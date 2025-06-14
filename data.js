const data = {
  "1. High Temperature Corrosion": {
    "High-temperature H₂/H₂S Corrosion": {
      description: "Corrosion in high-temp environments with H₂ and H₂S.",
      materials: "Carbon steel, low alloy steel",
      criticalFactors: "Temperature > 400°F, sulfur & hydrogen presence",
      affectedUnits: "Hydroprocessing units, heaters",
      appearance: "Wastage, thinning, bulging",
      mitigation: "Resistant alloys, temp control",
      inspection: "UT, IR scan, visual"
    },
    "Graphitization": {
      description: "Carbon migrates forming graphite, leading to brittleness.",
      materials: "Carbon steel",
      criticalFactors: "Extended exposure at 800–1100°F",
      affectedUnits: "Old exchangers, heaters",
      appearance: "Gray brittle fracture",
      mitigation: "Upgrade material, replace parts",
      inspection: "Metallography, hardness"
    }
    // Add more if needed
  },

  "2. Aqueous Environment Damage": {
    "Wet H2S Damage (Blistering/HIC/SOHIC/SSC)": {
      description: "Hydrogen damage under wet H2S conditions causing blisters or cracks.",
      materials: "Carbon steel",
      criticalFactors: "Wet H2S, tensile stress",
      affectedUnits: "Drums, sour water systems",
      appearance: "Blisters, surface cracks",
      mitigation: "Use HIC-resistant steel, coating",
      inspection: "UT, MT, PAUT"
    }
  }
};
