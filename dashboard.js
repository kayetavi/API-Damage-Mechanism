const username = localStorage.getItem("loggedInUser");
const welcomeDiv = document.getElementById("welcome");

if (username) {
  welcomeDiv.textContent = "Welcome, " + username;
} else {
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "index.html";
}

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
  }
};

const categoryList = document.getElementById("categoryList");
const mechanismDetailsContainer = document.getElementById("mechanismDetailsContainer");
const selectedTitle = document.getElementById("selectedMechanismTitle");

Object.entries(data).forEach(([category, mechanisms]) => {
  const categoryItem = document.createElement("li");
  categoryItem.textContent = category;
  categoryItem.style.fontWeight = "bold";

  const mechList = document.createElement("ul");
  mechList.style.display = "none";

  Object.entries(mechanisms).forEach(([mech, info]) => {
    const mechItem = document.createElement("li");
    mechItem.textContent = mech;
    mechItem.onclick = () => {
      selectedTitle.textContent = mech;
      mechanismDetailsContainer.innerHTML = `
        <div class="mechanism-info"><strong>Description of Damage:</strong> ${info.description}</div>
        <div class="mechanism-info"><strong>Affected Materials:</strong> ${info.materials}</div>
        <div class="mechanism-info"><strong>Critical Factors:</strong> ${info.criticalFactors}</div>
        <div class="mechanism-info"><strong>Affected Units or Equipment:</strong> ${info.affectedUnits}</div>
        <div class="mechanism-info"><strong>Appearance or Morphology of Damage:</strong> ${info.appearance}</div>
        <div class="mechanism-info"><strong>Prevention/Mitigation:</strong> ${info.mitigation}</div>
        <div class="mechanism-info"><strong>Inspection and Monitoring:</strong> ${info.inspection}</div>
      `;
    };
    mechList.appendChild(mechItem);
  });

  categoryItem.onclick = () => {
    mechList.style.display = mechList.style.display === "none" ? "block" : "none";
  };

  categoryList.appendChild(categoryItem);
  categoryList.appendChild(mechList);
});
