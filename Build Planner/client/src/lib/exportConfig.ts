import { Configuration } from '@/hooks/useConfigurator';
import { allCategories, additionalCosts } from './configData';

export function generateConfigReport(config: Configuration, totalPrice: number, selectedParts: any[], totalHP: number, totalWeight: number) {
  const timestamp = new Date().toLocaleString();
  
  let report = `
╔════════════════════════════════════════════════════════════════════════════╗
║                    SUPERCAR CONFIGURATOR - BUILD REPORT                    ║
╚════════════════════════════════════════════════════════════════════════════╝

Generated: ${timestamp}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONFIGURATION SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

`;

  // Add selected components
  allCategories.forEach(category => {
    const selectedId = config[category.id as keyof typeof config];
    if (selectedId && typeof selectedId === 'string') {
      const option = category.options.find(opt => opt.id === selectedId);
      if (option) {
        report += `${category.title.toUpperCase()}
  └─ ${option.name}
     Price: $${option.price.toLocaleString()}
     ${option.description}

`;
      }
    }
  });

  // Add additional items
  const selectedAdditional = Object.entries(config.additionalItems)
    .filter(([_, isSelected]) => isSelected)
    .map(([itemId]) => itemId);

  if (selectedAdditional.length > 0) {
    report += `ADDITIONAL COMPONENTS
`;
    selectedAdditional.forEach(itemId => {
      const item = additionalCosts[itemId as keyof typeof additionalCosts];
      if (item) {
        report += `  └─ ${item.name}
     Price: $${item.price.toLocaleString()}

`;
      }
    });
  }

  report += `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BILL OF MATERIALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

`;

  selectedParts.forEach((part, idx) => {
    report += `${idx + 1}. ${part.name}
   Category: ${part.category}
   Price: $${part.price.toLocaleString()}

`;
  });

  report += `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COST BREAKDOWN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Components Subtotal:  $${(totalPrice - 5000).toLocaleString()}
Engineering & Base:   $5,000
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOTAL INVESTMENT:     $${totalPrice.toLocaleString()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PERFORMANCE SPECIFICATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Total Horsepower:     ${totalHP || 'N/A'} HP
Estimated Weight:     ${totalWeight || 'N/A'} lbs
${totalHP && totalWeight ? `Power-to-Weight Ratio: ${(totalHP / (totalWeight / 1000)).toFixed(2)} HP/1000lbs` : ''}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This configuration was generated using the Supercar Configurator.
For more information, visit: https://supercar-configurator.manus.space

`;

  return report;
}

export function downloadReport(content: string, filename: string = 'supercar-config.txt') {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
