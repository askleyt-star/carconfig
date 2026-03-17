// Terminology mappings for Simple vs Advanced mode
export const terminologyMap: Record<string, { simple: string; advanced: string }> = {
  // Chassis
  '4130 Chromoly Space Frame': {
    simple: 'Steel Frame',
    advanced: '4130 Chromoly Space Frame'
  },
  'Carbon Fiber Monocoque': {
    simple: 'Carbon Body',
    advanced: 'Carbon Fiber Monocoque'
  },
  'Aluminum Spaceframe': {
    simple: 'Aluminum Frame',
    advanced: 'Aluminum Spaceframe'
  },
  
  // Engine
  'LS3 Crate Engine': {
    simple: 'V8 Engine',
    advanced: 'LS3 Crate Engine'
  },
  'Twin-Turbo V6': {
    simple: 'Turbo V6',
    advanced: 'Twin-Turbo V6'
  },
  'Electric Motor (Tesla LDU)': {
    simple: 'Electric Motor',
    advanced: 'Electric Motor (Tesla LDU)'
  },
  'Flat-Plane V8': {
    simple: 'High-Rev V8',
    advanced: 'Flat-Plane V8'
  },
  
  // Transmission
  'Manual 6-Speed': {
    simple: 'Manual Transmission',
    advanced: 'Manual 6-Speed'
  },
  'Automatic 8-Speed': {
    simple: 'Automatic Transmission',
    advanced: 'Automatic 8-Speed'
  },
  'DCT 7-Speed': {
    simple: 'Dual-Clutch Transmission',
    advanced: 'DCT 7-Speed'
  },
  'Single-Speed Electric': {
    simple: 'Electric Drive',
    advanced: 'Single-Speed Electric'
  },
  
  // Suspension
  'Double Wishbone': {
    simple: 'Independent Suspension',
    advanced: 'Double Wishbone'
  },
  'Multi-Link': {
    simple: 'Multi-Link Suspension',
    advanced: 'Multi-Link'
  },
  'MacPherson Strut': {
    simple: 'Strut Suspension',
    advanced: 'MacPherson Strut'
  },
  
  // Braking
  'Carbon-Ceramic Discs': {
    simple: 'Premium Brakes',
    advanced: 'Carbon-Ceramic Discs'
  },
  'Cast Iron Discs': {
    simple: 'Standard Brakes',
    advanced: 'Cast Iron Discs'
  },
  'Regenerative Braking': {
    simple: 'Electric Brakes',
    advanced: 'Regenerative Braking'
  },
  
  // Wheels
  'Forged Aluminum': {
    simple: 'Aluminum Wheels',
    advanced: 'Forged Aluminum'
  },
  'Carbon Fiber Wheels': {
    simple: 'Carbon Wheels',
    advanced: 'Carbon Fiber'
  },
  'Magnesium Alloy': {
    simple: 'Magnesium Wheels',
    advanced: 'Magnesium Alloy'
  },
  
  // ECU
  'Haltech Rebel LS': {
    simple: 'Engine Computer',
    advanced: 'Haltech Rebel LS'
  },
  'MoTeC M1': {
    simple: 'Advanced Engine Computer',
    advanced: 'MoTeC M1'
  },
  'Tesla Vehicle Control Unit': {
    simple: 'Electric Control Unit',
    advanced: 'Tesla Vehicle Control Unit'
  },
  
  // Body
  'Fiberglass': {
    simple: 'Fiberglass Body',
    advanced: 'Fiberglass'
  },
  'Carbon Fiber Body': {
    simple: 'Carbon Body',
    advanced: 'Carbon Fiber'
  },
  'Aluminum Panels': {
    simple: 'Aluminum Body',
    advanced: 'Aluminum Panels'
  },
  
  // Interior
  'Leather & Alcantara': {
    simple: 'Premium Interior',
    advanced: 'Leather & Alcantara'
  },
  'Cloth & Synthetic': {
    simple: 'Standard Interior',
    advanced: 'Cloth & Synthetic'
  },
  'Full Carbon Fiber Interior': {
    simple: 'Carbon Interior',
    advanced: 'Full Carbon Fiber'
  },
  
  // Additional items
  'Roll Cage': {
    simple: 'Safety Cage',
    advanced: 'Roll Cage'
  },
  'Aerodynamic Kit': {
    simple: 'Body Kit',
    advanced: 'Aerodynamic Kit'
  },
  'Traction Control System': {
    simple: 'Traction Control',
    advanced: 'Traction Control System'
  },
  'Active Suspension': {
    simple: 'Smart Suspension',
    advanced: 'Active Suspension'
  },
  'Launch Control': {
    simple: 'Launch Assist',
    advanced: 'Launch Control'
  },
  'Data Logging System': {
    simple: 'Performance Recorder',
    advanced: 'Data Logging System'
  },
  
  // Section titles
  'Chassis': {
    simple: 'Frame',
    advanced: 'Chassis'
  },
  'Engine': {
    simple: 'Engine',
    advanced: 'Engine'
  },
  'Transmission': {
    simple: 'Gearbox',
    advanced: 'Transmission'
  },
  'Suspension': {
    simple: 'Suspension',
    advanced: 'Suspension'
  },
  'Braking': {
    simple: 'Brakes',
    advanced: 'Braking'
  },
  'Wheels': {
    simple: 'Wheels',
    advanced: 'Wheels'
  },
  'ECU': {
    simple: 'Engine Computer',
    advanced: 'ECU'
  },
  'Body': {
    simple: 'Body',
    advanced: 'Body'
  },
  'Interior': {
    simple: 'Interior',
    advanced: 'Interior'
  },
  'Additional Components': {
    simple: 'Add-ons',
    advanced: 'Additional Components'
  },
  'Total Investment': {
    simple: 'Total Cost',
    advanced: 'Total Investment'
  },
  'Build Time': {
    simple: 'Build Time',
    advanced: 'Build Time'
  },
  'Bill of Materials': {
    simple: 'Parts List',
    advanced: 'Bill of Materials'
  },
  'Power-to-Weight': {
    simple: 'Power-to-Weight',
    advanced: 'Power-to-Weight'
  },
  'Total Horsepower': {
    simple: 'Total Power',
    advanced: 'Total Horsepower'
  },
  'Estimated Weight': {
    simple: 'Weight',
    advanced: 'Estimated Weight'
  },
};

export const getTerminology = (text: string, isSimple: boolean): string => {
  const mapping = terminologyMap[text];
  if (!mapping) return text;
  return isSimple ? mapping.simple : mapping.advanced;
};
