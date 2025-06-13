
const data = [
  {
    name: "885 °F (475 °C) Embrittlement",
    category: "Metallurgical",
    description: "Loss of ductility and toughness due to metallurgical change in stainless steels exposed to 600–1000 °F.",
    materials: "400 series SS, Duplex SS, 300 SS welds",
    factors: "Cr content, ferrite %, exposure time, temperature",
    equipment: "Heat exchangers, reactors, furnace tubes",
    inspection: "Impact testing, hardness testing, metallography",
    prevention: "Use stabilized grades, avoid long exposure at 885 °F, post-weld heat treatment",
    related: ["Sigma Phase Embrittlement"]
  },
  {
    name: "Amine Corrosion",
    category: "Aqueous",
    description: "Localized corrosion of carbon steel in amine treating systems due to acid gases and contaminants.",
    materials: "Carbon steel; stainless steel more resistant",
    factors: "Amine type, CO₂, H₂S, oxygen, HSAS, temperature, velocity",
    equipment: "Reboilers, piping, absorbers, exchangers",
    inspection: "VT, UT, RT, coupons, probes",
    prevention: "Operational control, filtration, salt removal, oxygen exclusion",
    related: ["Amine SCC"]
  },
  {
    name: "Amine Stress Corrosion Cracking (SCC)",
    category: "Cracking",
    description: "Cracking in carbon and low alloy steels under tensile stress in aqueous amine environments.",
    materials: "Carbon steel, low-alloy steels",
    factors: "Tensile stress, type of amine, temperature",
    equipment: "Absorbers, strippers, heat exchangers, piping",
    inspection: "WFMT, ACFM, PAUT, PT",
    prevention: "PWHT, use of resistant materials, stress reduction",
    related: ["Wet H₂S Damage", "Caustic SCC"]
  }
];
