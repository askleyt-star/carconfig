import { useState, useMemo } from 'react';
import { additionalCosts, allCategories } from '@/lib/configData';

export interface Configuration {
  chassis?: string;
  engine?: string;
  transmission?: string;
  suspension?: string;
  brakes?: string;
  wheels?: string;
  ecu?: string;
  body?: string;
  interior?: string;
  additionalItems: Record<string, boolean>;
}

export function useConfigurator() {
  const [config, setConfig] = useState<Configuration>({
    additionalItems: {}
  });

  const selectOption = (category: string, optionId: string) => {
    setConfig(prev => ({
      ...prev,
      [category]: optionId
    }));
  };

  const toggleAdditionalItem = (itemId: string) => {
    setConfig(prev => ({
      ...prev,
      additionalItems: {
        ...prev.additionalItems,
        [itemId]: !prev.additionalItems[itemId]
      }
    }));
  };

  const resetConfig = () => {
    setConfig({
      additionalItems: {}
    });
  };

  // Calculate totals
  const calculations = useMemo(() => {
    let totalPrice = 0;
    let totalTime = 0;
    const selectedParts: Array<{ category: string; name: string; price: number; time: number }> = [];
    let totalHP = 0;
    let totalWeight = 0;

    // Process each category
    allCategories.forEach(category => {
      const selectedId = config[category.id as keyof Configuration];
      if (selectedId && typeof selectedId === 'string') {
        const option = category.options.find(opt => opt.id === selectedId);
        if (option) {
          totalPrice += option.price;
          totalTime += option.timeEstimate;
          selectedParts.push({
            category: category.title,
            name: option.name,
            price: option.price,
            time: option.timeEstimate
          });

          // Extract HP and weight from specs
          if (option.specs?.['Horsepower']) {
            const hp = parseInt(option.specs['Horsepower'].toString().split(' ')[0]);
            totalHP += hp;
          }
          if (option.specs?.['Weight']) {
            const weight = parseInt(option.specs['Weight'].toString().split(' ')[0]);
            totalWeight += weight;
          }
        }
      }
    });

    // Add additional costs
    Object.entries(config.additionalItems).forEach(([itemId, isSelected]) => {
      if (isSelected) {
        const item = additionalCosts[itemId as keyof typeof additionalCosts];
        if (item) {
          totalPrice += item.price;
          totalTime += item.timeEstimate;
          selectedParts.push({
            category: 'Additional',
            name: item.name,
            price: item.price,
            time: item.timeEstimate
          });
        }
      }
    });

    // Add base costs (labor, materials, etc.)
    const baseCosts = 5000; // Design, engineering, misc materials
    totalPrice += baseCosts;

    return {
      totalPrice,
      selectedParts,
      totalHP,
      totalWeight,
      totalTime,
      baseCosts,
      partCount: selectedParts.length
    };
  }, [config]);

  return {
    config,
    selectOption,
    toggleAdditionalItem,
    resetConfig,
    ...calculations
  };
}
