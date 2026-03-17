// Configuration data for the supercar builder
export interface ConfigOption {
  id: string;
  name: string;
  description: string;
  price: number;
  timeEstimate: number; // in hours
  recommended?: boolean;
  pros: string[];
  cons: string[];
  specs?: Record<string, string | number>;
}

export interface ConfigCategory {
  id: string;
  title: string;
  description: string;
  options: ConfigOption[];
}

export const chassisOptions: ConfigOption[] = [
  {
    id: "chromoly-space",
    name: "4130 Chromoly Space Frame",
    description: "High-strength, lightweight. Requires TIG welding expertise.",
    price: 4500,
    timeEstimate: 120,
    recommended: true,
    pros: [
      "Excellent strength-to-weight ratio",
      "Allows thinner wall tubing",
      "Professional appearance",
      "Good for high-performance builds"
    ],
    cons: [
      "Requires TIG welding expertise",
      "More expensive material",
      "Stress relief required",
      "Steeper learning curve"
    ],
    specs: {
      "Material": "4130 Chromoly Steel",
      "Weight": "~180 lbs",
      "Torsional Rigidity": "Very High",
      "Welding": "TIG Required",
    }
  },
  {
    id: "mild-steel-space",
    name: "DOM Mild Steel Space Frame",
    description: "Cost-effective, easier to weld. Slightly heavier.",
    price: 2800,
    timeEstimate: 100,
    pros: [
      "Budget-friendly",
      "Easier to weld (MIG/TIG)",
      "More forgiving for beginners",
      "Good community support"
    ],
    cons: [
      "Heavier than Chromoly",
      "Less refined appearance",
      "Requires more material",
      "Lower strength-to-weight"
    ],
    specs: {
      "Material": "DOM Mild Steel",
      "Weight": "~220 lbs",
      "Torsional Rigidity": "High",
      "Welding": "MIG/TIG Compatible",
    }
  },
  {
    id: "donor-corvette",
    name: "Corvette C5/C6 Donor Chassis",
    description: "Proven geometry, simplifies registration. Restricts design.",
    price: 8000,
    timeEstimate: 80,
    pros: [
      "Proven, tested geometry",
      "Simplifies registration",
      "Minimal welding required",
      "Excellent suspension geometry"
    ],
    cons: [
      "Restricts body design",
      "Higher upfront cost",
      "Less unique appearance",
      "Limited customization"
    ],
    specs: {
      "Material": "Factory Steel/Aluminum",
      "Weight": "~280 lbs",
      "Torsional Rigidity": "Excellent",
      "Welding": "Minimal",
    }
  }
];

export const engineOptions: ConfigOption[] = [
  {
    id: "ls3-430",
    name: "Chevrolet LS3 (430 HP)",
    description: "Industry standard for custom builds. Massive aftermarket support.",
    price: 13500,
    timeEstimate: 60,
    recommended: true,
    pros: [
      "Massive aftermarket support",
      "Proven reliability",
      "Excellent power output",
      "Cost-effective for performance"
    ],
    cons: [
      "Requires custom cooling",
      "Fuel system upgrades needed",
      "Emissions complexity",
      "Not eco-friendly"
    ],
    specs: {
      "Displacement": "6.2L (376 cu in)",
      "Horsepower": "430 HP",
      "Torque": "425 lb-ft",
      "Type": "V8 Naturally Aspirated",
    }
  },
  {
    id: "ls3-500",
    name: "LS3 with Supercharger (500 HP)",
    description: "Boosted performance. Requires upgraded cooling and fuel system.",
    price: 18500,
    timeEstimate: 80,
    pros: [
      "Significant power increase",
      "Instant torque delivery",
      "Proven supercharger tech",
      "Excellent acceleration"
    ],
    cons: [
      "Higher heat generation",
      "More complex cooling",
      "Fuel consumption increases",
      "Higher maintenance costs"
    ],
    specs: {
      "Displacement": "6.2L Supercharged",
      "Horsepower": "500 HP",
      "Torque": "510 lb-ft",
      "Type": "V8 Supercharged",
    }
  },
  {
    id: "tesla-ldu",
    name: "Tesla LDU Electric Motor",
    description: "Instant torque, zero emissions. Complex battery integration.",
    price: 22000,
    timeEstimate: 120,
    pros: [
      "Zero emissions",
      "Instant maximum torque",
      "Low maintenance",
      "Silent operation"
    ],
    cons: [
      "Complex battery integration",
      "Limited range",
      "Expensive upfront",
      "Charging infrastructure needed"
    ],
    specs: {
      "Type": "Electric Motor",
      "Horsepower": "450+ HP",
      "Torque": "500+ lb-ft (Instant)",
      "Range": "200-300 miles",
    }
  },
  {
    id: "ls7-427",
    name: "LS7 (427 HP)",
    description: "Naturally aspirated, high-revving. Premium option.",
    price: 16000,
    timeEstimate: 70,
    pros: [
      "High RPM capability",
      "Naturally aspirated reliability",
      "Excellent sound",
      "Premium performance"
    ],
    cons: [
      "Higher cost",
      "More fuel consumption",
      "Complex tuning required",
      "Less low-end torque"
    ],
    specs: {
      "Displacement": "7.0L (427 cu in)",
      "Horsepower": "427 HP",
      "Torque": "420 lb-ft",
      "Type": "V8 Naturally Aspirated",
    }
  }
];

export const bodyOptions: ConfigOption[] = [
  {
    id: "fiberglass-standard",
    name: "Fiberglass Body (GRP)",
    description: "Most common DIY choice. Affordable and repairable.",
    price: 6000,
    timeEstimate: 200,
    recommended: true,
    pros: [
      "Most affordable option",
      "Easy to repair",
      "Good aesthetic finish",
      "Lightweight"
    ],
    cons: [
      "Lower durability",
      "Requires multiple coats",
      "Can crack under stress",
      "Maintenance needed"
    ],
    specs: {
      "Material": "Fiberglass Reinforced Plastic",
      "Weight": "~120 lbs (full body)",
      "Durability": "Good",
      "Repairability": "Easy",
    }
  },
  {
    id: "carbon-fiber-full",
    name: "Full Carbon Fiber Body",
    description: "Lightweight, premium finish. Requires vacuum infusion.",
    price: 18000,
    timeEstimate: 250,
    pros: [
      "Lightest option",
      "Premium appearance",
      "Excellent durability",
      "Best performance"
    ],
    cons: [
      "Most expensive",
      "Requires specialized equipment",
      "Difficult to repair",
      "Steep learning curve"
    ],
    specs: {
      "Material": "Carbon Fiber Composite",
      "Weight": "~80 lbs (full body)",
      "Durability": "Excellent",
      "Repairability": "Specialized",
    }
  },
  {
    id: "carbon-hybrid",
    name: "Carbon Fiber Hybrid (Panels + Fiberglass)",
    description: "Balance of weight and cost. Carbon panels on fiberglass base.",
    price: 11000,
    timeEstimate: 220,
    pros: [
      "Good weight savings",
      "Balanced cost",
      "Premium look",
      "Easier to repair than full carbon"
    ],
    cons: [
      "More complex layup",
      "Still requires skill",
      "Moderate cost",
      "Moderate difficulty"
    ],
    specs: {
      "Material": "Mixed Composite",
      "Weight": "~95 lbs (full body)",
      "Durability": "Very Good",
      "Repairability": "Good",
    }
  }
];

export const suspensionOptions: ConfigOption[] = [
  {
    id: "double-wishbone",
    name: "Double Wishbone (Front & Rear)",
    description: "Precision handling. Best for performance. Complex geometry.",
    price: 9000,
    timeEstimate: 80,
    recommended: true,
    pros: [
      "Best handling characteristics",
      "Full adjustability",
      "Professional setup",
      "Excellent performance"
    ],
    cons: [
      "Most complex to build",
      "Requires precision tooling",
      "Higher cost",
      "Difficult alignment"
    ],
    specs: {
      "Type": "Double Wishbone",
      "Adjustability": "Full camber/caster control",
      "Handling": "Excellent",
      "Complexity": "High",
    }
  },
  {
    id: "pushrod-coilover",
    name: "Pushrod Coilover System",
    description: "Compact, lightweight. Good for mid-engine layouts.",
    price: 6500,
    timeEstimate: 60,
    pros: [
      "Compact design",
      "Lightweight",
      "Good adjustability",
      "Mid-engine friendly"
    ],
    cons: [
      "Less adjustable than double wishbone",
      "Requires custom fabrication",
      "Moderate complexity",
      "Limited geometry options"
    ],
    specs: {
      "Type": "Pushrod Coilover",
      "Adjustability": "Height & Damping",
      "Handling": "Very Good",
      "Complexity": "Medium",
    }
  },
  {
    id: "macpherson-strut",
    name: "MacPherson Strut (Front) + Multi-Link (Rear)",
    description: "Modern, proven design. Good balance of cost and performance.",
    price: 5500,
    timeEstimate: 50,
    pros: [
      "Budget-friendly",
      "Proven design",
      "Good handling",
      "Easier to install"
    ],
    cons: [
      "Less adjustable",
      "Limited performance potential",
      "Less unique",
      "Standard geometry"
    ],
    specs: {
      "Type": "Strut/Multi-Link Hybrid",
      "Adjustability": "Limited",
      "Handling": "Good",
      "Complexity": "Low-Medium",
    }
  }
];

export const interiorOptions: ConfigOption[] = [
  {
    id: "basic-interior",
    name: "Basic Interior (Minimal)",
    description: "Functional seats, basic dashboard. Lightweight.",
    price: 2500,
    timeEstimate: 40,
    recommended: true,
    pros: [
      "Lightest option",
      "Lowest cost",
      "Quick to install",
      "Minimalist aesthetic"
    ],
    cons: [
      "Minimal comfort",
      "No creature comforts",
      "Sparse appearance",
      "Limited features"
    ],
    specs: {
      "Seats": "Basic Racing Buckets",
      "Dashboard": "Minimal Gauge Cluster",
      "Trim": "Exposed Carbon/Fiberglass",
      "Weight": "~80 lbs",
    }
  },
  {
    id: "sport-interior",
    name: "Sport Interior",
    description: "Quality racing seats, leather trim, modern gauge cluster.",
    price: 6000,
    timeEstimate: 60,
    recommended: true,
    pros: [
      "Good comfort level",
      "Quality materials",
      "Modern gauges",
      "Balanced approach"
    ],
    cons: [
      "Moderate weight",
      "Moderate cost",
      "Less luxurious than full",
      "Standard features"
    ],
    specs: {
      "Seats": "Premium Racing Buckets",
      "Dashboard": "Digital Gauge Cluster",
      "Trim": "Leather & Alcantara",
      "Weight": "~120 lbs",
    }
  },
  {
    id: "luxury-interior",
    name: "Luxury Interior",
    description: "Premium leather, heated seats, infotainment system.",
    price: 10000,
    timeEstimate: 80,
    pros: [
      "Maximum comfort",
      "Premium materials",
      "Full features",
      "Luxury experience"
    ],
    cons: [
      "Heaviest option",
      "Most expensive",
      "More maintenance",
      "Reduces performance"
    ],
    specs: {
      "Seats": "Heated Premium Buckets",
      "Dashboard": "Full Digital Display",
      "Trim": "Premium Leather & Wood",
      "Weight": "~150 lbs",
    }
  }
];

export const ecuOptions: ConfigOption[] = [
  {
    id: "haltech-rebel",
    name: "Haltech Rebel LS",
    description: "Superior CAN-bus integration. Preferred for LS swaps.",
    price: 2200,
    timeEstimate: 20,
    recommended: true,
    pros: [
      "Excellent LS support",
      "User-friendly software",
      "Strong community",
      "Good value"
    ],
    cons: [
      "Steeper learning curve",
      "Requires tuning knowledge",
      "Support costs extra",
      "Moderate price"
    ],
    specs: {
      "Tuning": "User-friendly software",
      "Integration": "Excellent CAN support",
      "Support": "Strong community",
    }
  },
  {
    id: "holley-terminator",
    name: "Holley Terminator X Max",
    description: "Affordable, proven reliability. Great for LS engines.",
    price: 1800,
    timeEstimate: 18,
    pros: [
      "Most affordable",
      "Proven reliability",
      "Good documentation",
      "Easy installation"
    ],
    cons: [
      "Less advanced features",
      "Limited customization",
      "Smaller community",
      "Basic tuning"
    ],
    specs: {
      "Tuning": "Comprehensive",
      "Integration": "Good LS support",
      "Support": "Excellent",
    }
  },
  {
    id: "motec-m150",
    name: "MoTeC M150",
    description: "Professional-grade. Full flexibility. Steeper learning curve.",
    price: 3500,
    timeEstimate: 30,
    pros: [
      "Unlimited customization",
      "Professional grade",
      "Best performance",
      "Full control"
    ],
    cons: [
      "Most expensive",
      "Steep learning curve",
      "Requires professional tuning",
      "Complex setup"
    ],
    specs: {
      "Tuning": "Unlimited customization",
      "Integration": "Full CAN/Ethernet",
      "Support": "Professional tuners",
    }
  }
];

export const transmissionOptions: ConfigOption[] = [
  {
    id: "porsche-g50",
    name: "Porsche G50 5-Speed",
    description: "Classic, proven transaxle. Good for mid-engine layouts.",
    price: 4500,
    timeEstimate: 40,
    recommended: true,
    pros: [
      "Proven reliability",
      "Mid-engine friendly",
      "Classic option",
      "Good availability"
    ],
    cons: [
      "Only 5 speeds",
      "Limited ratios",
      "Older technology",
      "Less efficient"
    ],
    specs: {
      "Gears": "5-Speed Manual",
      "Type": "Transaxle",
      "Torque Rating": "400+ lb-ft",
    }
  },
  {
    id: "graziano-6speed",
    name: "Graziano 6-Speed",
    description: "Modern transaxle. Better ratios for performance.",
    price: 6500,
    timeEstimate: 45,
    pros: [
      "Modern design",
      "Better ratios",
      "Improved efficiency",
      "Premium option"
    ],
    cons: [
      "More expensive",
      "Less proven",
      "Harder to find",
      "Limited support"
    ],
    specs: {
      "Gears": "6-Speed Manual",
      "Type": "Transaxle",
      "Torque Rating": "450+ lb-ft",
    }
  },
  {
    id: "t56-magnum",
    name: "T56 Magnum 6-Speed",
    description: "American classic. Longitudinal mount. Proven reliability.",
    price: 5200,
    timeEstimate: 50,
    pros: [
      "Proven American design",
      "Longitudinal mount",
      "Good availability",
      "Reliable"
    ],
    cons: [
      "Heavier than transaxle",
      "Requires tunnel",
      "Less compact",
      "Mid-range cost"
    ],
    specs: {
      "Gears": "6-Speed Manual",
      "Type": "Longitudinal",
      "Torque Rating": "450+ lb-ft",
    }
  }
];

export const brakeOptions: ConfigOption[] = [
  {
    id: "wilwood-4piston",
    name: "Wilwood 4-Piston Calipers",
    description: "Lightweight, high-performance. Great stopping power.",
    price: 3500,
    timeEstimate: 30,
    recommended: true,
    pros: [
      "Lightweight",
      "Good stopping power",
      "Affordable",
      "Easy installation"
    ],
    cons: [
      "Less powerful than 6-piston",
      "Moderate performance",
      "Standard option",
      "Limited customization"
    ],
    specs: {
      "Type": "4-Piston Fixed",
      "Rotor Size": "12-13 inches",
      "Power": "Excellent",
      "Weight": "Lightweight",
    }
  },
  {
    id: "brembo-6piston",
    name: "Brembo 6-Piston Calipers",
    description: "Premium Italian brakes. Maximum performance.",
    price: 5500,
    timeEstimate: 35,
    pros: [
      "Maximum stopping power",
      "Premium brand",
      "Excellent feel",
      "Professional grade"
    ],
    cons: [
      "More expensive",
      "Heavier",
      "Requires larger rotors",
      "Overkill for some builds"
    ],
    specs: {
      "Type": "6-Piston Fixed",
      "Rotor Size": "13-14 inches",
      "Power": "Maximum",
      "Weight": "Moderate",
    }
  },
  {
    id: "ap-racing",
    name: "AP Racing CP9070 (Race Spec)",
    description: "Professional motorsport standard. Ultimate performance.",
    price: 7000,
    timeEstimate: 40,
    pros: [
      "Motorsport proven",
      "Lightest option",
      "Best performance",
      "Professional grade"
    ],
    cons: [
      "Most expensive",
      "Requires special setup",
      "Overkill for street",
      "Complex installation"
    ],
    specs: {
      "Type": "6-Piston Radial",
      "Rotor Size": "14 inches",
      "Power": "Maximum",
      "Weight": "Lightweight",
    }
  }
];

export const wheelOptions: ConfigOption[] = [
  {
    id: "lightweight-17",
    name: "Lightweight Alloy 17\" Wheels",
    description: "Classic size, good balance of weight and grip.",
    price: 2000,
    timeEstimate: 10,
    recommended: true,
    pros: [
      "Classic appearance",
      "Good balance",
      "Affordable",
      "Lightweight"
    ],
    cons: [
      "Smaller size",
      "Less aggressive look",
      "Limited options",
      "Older style"
    ],
    specs: {
      "Size": "17 inches",
      "Material": "Forged Aluminum",
      "Weight": "~18 lbs per wheel",
      "Style": "Classic",
    }
  },
  {
    id: "carbon-18",
    name: "Carbon Fiber 18\" Wheels",
    description: "Ultra-lightweight. Premium option.",
    price: 5500,
    timeEstimate: 15,
    pros: [
      "Ultra-lightweight",
      "Premium appearance",
      "Best performance",
      "Unique"
    ],
    cons: [
      "Most expensive",
      "Fragile",
      "Limited availability",
      "Overkill for most"
    ],
    specs: {
      "Size": "18 inches",
      "Material": "Carbon Fiber",
      "Weight": "~12 lbs per wheel",
      "Style": "Modern",
    }
  },
  {
    id: "forged-19",
    name: "Forged Aluminum 19\" Wheels",
    description: "Modern aggressive look. Excellent strength.",
    price: 3200,
    timeEstimate: 12,
    pros: [
      "Modern appearance",
      "Aggressive look",
      "Strong",
      "Good value"
    ],
    cons: [
      "Heavier than 17\"",
      "More expensive",
      "Larger sidewall wear",
      "Affects handling"
    ],
    specs: {
      "Size": "19 inches",
      "Material": "Forged Aluminum",
      "Weight": "~20 lbs per wheel",
      "Style": "Aggressive",
    }
  }
];

export const allCategories: ConfigCategory[] = [
  {
    id: "chassis",
    title: "Chassis",
    description: "Select the structural foundation of your supercar",
    options: chassisOptions
  },
  {
    id: "engine",
    title: "Engine & Powertrain",
    description: "Choose your power source",
    options: engineOptions
  },
  {
    id: "transmission",
    title: "Transmission",
    description: "Select your gearbox",
    options: transmissionOptions
  },
  {
    id: "suspension",
    title: "Suspension",
    description: "Choose your suspension geometry",
    options: suspensionOptions
  },
  {
    id: "brakes",
    title: "Braking System",
    description: "Select your brake setup",
    options: brakeOptions
  },
  {
    id: "wheels",
    title: "Wheels & Tires",
    description: "Choose your rolling stock",
    options: wheelOptions
  },
  {
    id: "ecu",
    title: "Engine Control Unit (ECU)",
    description: "Select your engine management system",
    options: ecuOptions
  },
  {
    id: "body",
    title: "Body Material",
    description: "Choose your body construction method",
    options: bodyOptions
  },
  {
    id: "interior",
    title: "Interior",
    description: "Select your cabin setup",
    options: interiorOptions
  }
];

// Additional components and costs
export const additionalCosts = {
  "wiring-harness": { name: "Custom Wiring Harness", price: 1500, timeEstimate: 30 },
  "fuel-system": { name: "Fuel System (Tank, Pump, Lines)", price: 2000, timeEstimate: 25 },
  "cooling-system": { name: "Cooling System (Radiator, Fans)", price: 1800, timeEstimate: 20 },
  "exhaust-system": { name: "Custom Exhaust System", price: 2500, timeEstimate: 35 },
  "paint-job": { name: "Professional Paint Job", price: 8000, timeEstimate: 100 },
  "interior-trim": { name: "Interior Trim & Upholstery", price: 3000, timeEstimate: 50 },
  "iva-testing": { name: "IVA Testing & Registration", price: 1500, timeEstimate: 20 },
  "tools-equipment": { name: "Tools & Equipment (TIG Welder, etc.)", price: 3500, timeEstimate: 0 }
};
