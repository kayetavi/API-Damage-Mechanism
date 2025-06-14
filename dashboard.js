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
