const username = localStorage.getItem("loggedInUser");
if (!username) {
  window.location.href = "index.html";
}

const categoryList = document.getElementById("categoryList");
const mechanismDetails = document.getElementById("mechanismDetails");
const selectedTitle = document.getElementById("selectedMechanismTitle");

Object.entries(data).forEach(([category, mechanisms]) => {
  const categoryItem = document.createElement("li");
  categoryItem.textContent = category;
  categoryItem.style.fontWeight = "bold";

  const mechList = document.createElement("ul");
  mechList.style.display = "none";

  Object.entries(mechanisms).forEach(([mech, detail]) => {
    const mechItem = document.createElement("li");
    mechItem.textContent = mech;
    mechItem.onclick = () => {
      selectedTitle.textContent = mech;
      mechanismDetails.innerHTML = `
        <strong>Description:</strong> ${detail.description}<br>
        <strong>Affected Materials:</strong> ${detail.materials}<br>
        <strong>Critical Factors:</strong> ${detail.criticalFactors}<br>
        <strong>Affected Units or Equipment:</strong> ${detail.affectedUnits}<br>
        <strong>Appearance:</strong> ${detail.appearance}<br>
        <strong>Prevention/Mitigation:</strong> ${detail.mitigation}<br>
        <strong>Inspection and Monitoring:</strong> ${detail.inspection}<br>
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
