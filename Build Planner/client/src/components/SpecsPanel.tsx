import { Configuration } from '@/hooks/useConfigurator';
import { allCategories } from '@/lib/configData';
import { Card } from '@/components/ui/card';
import { Zap, Weight, Gauge } from 'lucide-react';

interface SpecsPanelProps {
  config: Configuration;
  totalHP: number;
  totalWeight: number;
}

export function SpecsPanel({ config, totalHP, totalWeight }: SpecsPanelProps) {
  // Collect all specs from selected options
  const allSpecs: Record<string, string | number> = {};

  allCategories.forEach(category => {
    const selectedId = config[category.id as keyof typeof config];
    if (selectedId && typeof selectedId === 'string') {
      const option = category.options.find(opt => opt.id === selectedId);
      if (option?.specs) {
        Object.assign(allSpecs, option.specs);
      }
    }
  });

  return (
    <div className="space-y-4">
      <Card className="bg-gradient-to-br from-blue-600/20 to-blue-700/20 border-blue-500/30 p-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <p className="text-slate-400 text-sm">Total HP</p>
            <p className="text-3xl font-bold text-white">{totalHP || '—'}</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Weight className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-slate-400 text-sm">Weight</p>
            <p className="text-3xl font-bold text-white">{totalWeight || '—'} lbs</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <Gauge className="w-6 h-6 text-green-400" />
            </div>
            <p className="text-slate-400 text-sm">Power/Weight</p>
            <p className="text-3xl font-bold text-green-400">
              {totalHP && totalWeight ? (totalHP / (totalWeight / 1000)).toFixed(2) : '—'}
            </p>
          </div>
        </div>
      </Card>

      {Object.keys(allSpecs).length > 0 && (
        <Card className="bg-slate-800/50 border-slate-700 p-6">
          <h3 className="text-lg font-bold text-white mb-4">Technical Specifications</h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(allSpecs).map(([key, value]) => (
              <div key={key} className="p-3 bg-slate-700/30 rounded-lg">
                <p className="text-slate-400 text-xs font-medium">{key}</p>
                <p className="text-white font-semibold mt-1">{value}</p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
