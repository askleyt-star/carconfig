import { useState } from 'react';
import { useConfigurator } from '@/hooks/useConfigurator';
import { allCategories, additionalCosts } from '@/lib/configData';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Clock, DollarSign, List, Download, CheckCircle, AlertCircle, Zap, Settings, Moon, Sun } from 'lucide-react';
import { generateConfigReport, downloadReport } from '@/lib/exportConfig';
import { useTheme } from '@/contexts/ThemeContext';
import { getTerminology } from '@/lib/terminology';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

export default function Home() {
  const {
    config,
    selectOption,
    toggleAdditionalItem,
    resetConfig,
    totalPrice,
    selectedParts,
    totalHP,
    totalWeight,
    totalTime,
    partCount
  } = useConfigurator();

  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('chassis');
  const [isSimpleMode, setIsSimpleMode] = useState(false);

  const toggleMode = () => {
    setIsSimpleMode(!isSimpleMode);
  };

  const getTimeEstimateText = (hours: number) => {
    if (hours < 24) return `${hours}h`;
    const days = Math.round(hours / 8);
    return `~${days} days`;
  };

  const getTotalTimeText = (hours: number) => {
    const weeks = Math.floor(hours / 40);
    const days = Math.floor((hours % 40) / 8);
    if (weeks > 0) return `${weeks}w ${days}d`;
    return `${days} days`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 bg-white dark:bg-gray-900 transition-colors">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Supercar Configurator</h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Build your dream machine with precision</p>
            </div>
            <div className="flex items-center gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <Settings className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem onClick={toggleTheme} className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                      {theme === 'light' ? (
                        <>
                          <Moon className="w-4 h-4" />
                          <span>Dark Mode</span>
                        </>
                      ) : (
                        <>
                          <Sun className="w-4 h-4" />
                          <span>Light Mode</span>
                        </>
                      )}
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={toggleMode} className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-2">
                      <span>{isSimpleMode ? 'Advanced Mode' : 'Simple Mode'}</span>
                      <Badge variant="outline" className="text-xs">
                        {isSimpleMode ? 'Simple' : 'Advanced'}
                      </Badge>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="outline"
                onClick={resetConfig}
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-12 dark:text-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 dark:text-gray-100">
          {/* Configuration Panel */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 w-full mb-8 bg-gray-100 dark:bg-gray-800 p-1 h-auto rounded-lg">
                {allCategories.slice(0, 9).map(category => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="text-xs sm:text-sm py-2 px-3 rounded data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                  >
                    {category.title.split(' ')[0]}
                  </TabsTrigger>
                ))}
              </TabsList>

              {allCategories.map(category => (
                <TabsContent key={category.id} value={category.id} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{getTerminology(category.title, isSimpleMode)}</h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{category.description}</p>
                  </div>

                  <div className="grid gap-4">
                    {category.options.map(option => {
                      const isSelected = config[category.id as keyof typeof config] === option.id;

                      return (
                        <button
                          key={option.id}
                          onClick={() => selectOption(category.id, option.id)}
                          className={`p-5 rounded-lg border-2 transition-all text-left ${
                            isSelected
                              ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400'
                              : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-gray-900 dark:text-white">{getTerminology(option.name, isSimpleMode)}</h3>
                                {option.recommended && (
                                  <Badge className="bg-green-100 text-green-700 text-xs">Recommended</Badge>
                                )}
                              </div>
                              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{option.description}</p>
                            </div>
                            <div className="text-right ml-4 flex-shrink-0">
                              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                ${option.price.toLocaleString()}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                                <Clock className="w-3 h-3" />
                                {getTimeEstimateText(option.timeEstimate)}
                              </div>
                            </div>
                          </div>

                          {/* Pros and Cons */}
                          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <div>
                              <p className="text-xs font-semibold text-green-700 mb-2 flex items-center gap-1">
                                <CheckCircle className="w-3 h-3" /> Pros
                              </p>
                              <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                                {option.pros.slice(0, 2).map((pro, idx) => (
                                  <li key={idx} className="flex gap-1">
                                    <span className="text-green-600 dark:text-green-400">•</span> {pro}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-red-700 dark:text-red-400 mb-2 flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> Cons
                              </p>
                              <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                                {option.cons.slice(0, 2).map((con, idx) => (
                                  <li key={idx} className="flex gap-1">
                                    <span className="text-red-600 dark:text-red-400">•</span> {con}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Specs */}
                          {option.specs && (
                            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                              {Object.entries(option.specs).slice(0, 4).map(([key, value]) => (
                                <div key={key} className="p-2 bg-gray-50 dark:bg-gray-700 rounded">
                                  <p className="text-gray-500 dark:text-gray-400 font-medium">{key}</p>
                                  <p className="text-gray-900 dark:text-white font-semibold">{value}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            {/* Additional Items */}
            <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 p-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Additional Components</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(additionalCosts).map(([itemId, item]) => (
                  <label 
                    key={itemId} 
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors dark:bg-gray-700"
                  >
                    <Checkbox
                      checked={config.additionalItems[itemId] || false}
                      onCheckedChange={() => toggleAdditionalItem(itemId)}
                      className="border-gray-300"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 dark:text-white font-medium text-sm">{item.name}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs">${item.price.toLocaleString()}</p>
                    </div>
                  </label>
                ))}
              </div>
            </Card>
          </div>

          {/* Summary Panel - Sticky */}
          <div className="space-y-6">
            {/* Price & Time Summary */}
            <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 p-6 sticky top-24 space-y-6 shadow-lg">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Investment</h3>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">
                    ${totalPrice.toLocaleString()}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {partCount} {partCount === 1 ? 'component' : 'components'} selected
                  </p>
                </div>
              </div>

              <div className="h-px bg-gray-200 dark:bg-gray-700"></div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Build Time</h3>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {totalTime > 0 ? getTotalTimeText(totalTime) : '—'}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {totalTime > 0 ? `${totalTime} hours total` : 'Select components to estimate'}
                  </p>
                </div>
              </div>

              <Button 
                onClick={() => {
                  const report = generateConfigReport(config, totalPrice, selectedParts, totalHP, totalWeight);
                  downloadReport(report, 'supercar-configuration.txt');
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export Configuration
              </Button>
            </Card>

            {/* Performance Specs */}
            <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 p-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                Performance
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-medium">Total Horsepower</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{totalHP || '—'} HP</p>
                </div>
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">
                  <p className="text-gray-600 dark:text-gray-400 text-xs font-medium">Estimated Weight</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{totalWeight || '—'} lbs</p>
                </div>
                {totalHP && totalWeight && (
                  <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-medium">Power-to-Weight</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">
                      {(totalHP / (totalWeight / 1000)).toFixed(2)}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">HP/1000lbs</p>
                  </div>
                )}
              </div>
            </Card>

            {/* Bill of Materials */}
            <Card className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 p-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <List className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Bill of Materials
              </h3>
              <div className="space-y-2 max-h-72 overflow-y-auto">
                {selectedParts.length === 0 ? (
                  <p className="text-gray-600 dark:text-gray-400 text-sm py-4 text-center">Select components to see BOM</p>
                ) : (
                  selectedParts.map((part, idx) => (
                    <div key={idx} className="flex items-center justify-between py-2.5 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 last:border-0">
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-900 dark:text-white text-sm font-medium truncate">{part.name}</p>
                        <div className="flex gap-2 mt-0.5">
                          <p className="text-gray-500 dark:text-gray-400 text-xs">{part.category}</p>
                          <p className="text-gray-500 dark:text-gray-400 text-xs flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {getTimeEstimateText(part.time)}
                          </p>
                        </div>
                      </div>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm ml-2 flex-shrink-0">
                        ${part.price.toLocaleString()}
                      </p>
                    </div>
                  ))
                )}
              </div>
              {selectedParts.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <p className="text-gray-600 dark:text-gray-400">Subtotal</p>
                    <p className="text-gray-900 dark:text-white font-semibold">
                      ${(totalPrice - 5000).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                    <p>Engineering & Base</p>
                    <p>$5,000</p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
