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
    },
    "High-temperature Hydrogen Attack": {
      description: "Hydrogen reacts with carbon in steel at high temps.",
      materials: "Carbon steel",
      criticalFactors: "H₂ partial pressure, temperature > 400°C",
      affectedUnits: "Hydrotreaters, hydrogen furnaces",
      appearance: "Internal fissures, cracks",
      mitigation: "Use Cr-Mo steels or upgrade metallurgy",
      inspection: "UT, A-scan, TEPCO method"
    },
    "Oxidation": {
      description: "Metal reacts with oxygen at high temperature forming scale.",
      materials: "Carbon steel, low alloy steels",
      criticalFactors: "High temperature and oxygen presence",
      affectedUnits: "Furnace tubes, reformers",
      appearance: "Flaky oxide layers, metal loss",
      mitigation: "Coatings, alloy upgrade",
      inspection: "Visual, weight loss, thickness"
    },
    "Carburization": {
      description: "Carbon diffuses into metal, causing hardening and embrittlement.",
      materials: "Low alloy steels",
      criticalFactors: "Carbonaceous gases at high temperature",
      affectedUnits: "Reformer tubes, furnaces",
      appearance: "Brittle surface, hardness rise",
      mitigation: "Use austenitic stainless steels",
      inspection: "Hardness test, metallography"
    }
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
  },
  "3. Chemical Damage": {
    "Caustic Stress Corrosion Cracking": {
      description: "Cracking due to caustic exposure and tensile stress.",
      materials: "Carbon steel, low alloy steel",
      criticalFactors: "High NaOH, heat, tensile stress",
      affectedUnits: "Drums, caustic treaters",
      appearance: "Branched intergranular cracking",
      mitigation: "PWHT, use corrosion-resistant alloys",
      inspection: "WFMT, UT, replication"
    }
  },
  "4. Mechanical and Metallurgical Damage": {
    "Thermal Fatigue": {
      description: "Cracking from repeated thermal cycling.",
      materials: "All metals",
      criticalFactors: "Temp fluctuations, restraint",
      affectedUnits: "Heaters, exchangers",
      appearance: "Transgranular cracks",
      mitigation: "Design flexibility, material upgrade",
      inspection: "Dye Penetrant, VT"
    }
  },
  "5. MIC and Environmental": {
    "Microbiologically Influenced Corrosion": {
      description: "Localized attack due to microbes in aqueous environments.",
      materials: "Carbon steel, copper alloys",
      criticalFactors: "Presence of biofilms, stagnant water",
      affectedUnits: "Cooling water systems",
      appearance: "Pitting, tubercles",
      mitigation: "Biocides, cleaning, design",
      inspection: "Bacterial count, UT"
    }
  }
};
