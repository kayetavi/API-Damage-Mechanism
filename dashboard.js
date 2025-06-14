const username = localStorage.getItem("loggedInUser");
const welcomeDiv = document.getElementById("welcome");
if (username) {
  welcomeDiv.textContent = "Welcome, " + username;
} else {
  window.location.href = "login.html";
}

function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}

// --- Category and Mechanism Data ---
const data = {
  "1. High Temperature Corrosion": {
    "High-temperature H₂/H₂S Corrosion": "Occurs at high temperatures in the presence of hydrogen and sulfur.",
    "Graphitization": "Loss of strength due to carbon migration forming graphite.",
    "Thermal Fatigue": "Cracking due to repeated heating and cooling cycles."
  },
  "2. Aqueous Environment Damage": {
    "Wet H₂S Damage": "Includes blistering, HIC, SOHIC, SSC in sour environments.",
    "CO₂ Corrosion": "Carbon dioxide reacting with metal forming carbonic acid.",
    "Cooling Water Corrosion": "From scale, biofouling, or oxygen-rich environments."
  },
  "3. Chemical Damage": {
    "Ammonium Bisulfide Corrosion": "From ammonium and sulfur compounds.",
    "Amine SCC": "Stress corrosion from amines.",
    "Sulfuric Acid Corrosion": "Aggressive corrosion from sulfuric acid."
  },
  "4. Mechanical and Metallurgical Damage": {
    "Creep and Stress Rupture": "Time-dependent deformation at high temp.",
    "Hydrogen Embrittlement": "Loss of ductility due to hydrogen absorption.",
    "Corrosion Fatigue": "Cracks from combined cyclic stress and corrosion."
  },
  "5. MIC and Environmental": {
    "Sulfidation": "Corrosion from sulfur compounds without hydrogen.",
    "Microbiologically Influenced Corrosion (MIC)": "From bacteria or biofilms.",
    "Galvanic Corrosion": "Between dissimilar metals in contact."
  },
  "6. Water & Steam Related Damage": {
    "Boiler Water Corrosion": "Corrosion in boilers due to oxygen/acid.",
    "Corrosion Under Insulation (CUI)": "Trapped moisture under insulation.",
    "Oxygenated Water Corrosion": "Occurs in non-boiler oxygenated systems."
  }
};

// --- Render Category List ---
const categoryList = document.getElementById("categoryList");
const mechanismDetails = document.getElementById("mechanismDetails");
const selectedTitle = document.getElementById("selectedMechanismTitle");

Object.entries(data).forEach(([category, mechanisms]) => {
  const categoryItem = document.createElement("li");
  categoryItem.textContent = category;
  categoryItem.style.fontWeight = "bold";

  const mechList = document.createElement("ul");
  mechList.style.display = "none";

  Object.entries(mechanisms).forEach(([mech, desc]) => {
    const mechItem = document.createElement("li");
    mechItem.textContent = mech;
    mechItem.style.fontWeight = "normal";
    mechItem.onclick = () => {
      selectedTitle.textContent = mech;
      mechanismDetails.textContent = desc;
    };
    mechList.appendChild(mechItem);
  });

  categoryItem.onclick = () => {
    mechList.style.display = mechList.style.display === "none" ? "block" : "none";
  };

  categoryList.appendChild(categoryItem);
  categoryList.appendChild(mechList);
});
