const username = localStorage.getItem('loggedInUser');
document.getElementById('welcome').textContent = `Welcome, ${username}`;

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = "index.html";
}

const categoryList = document.getElementById("categoryList");
const title = document.getElementById("selectedMechanismTitle");
const details = document.getElementById("mechanismDetailsContainer");

for (const category in data) {
  const categoryItem = document.createElement("li");
  categoryItem.textContent = category;
  categoryItem.onclick = () => loadMechanisms(category);
  categoryList.appendChild(categoryItem);
}

function loadMechanisms(category) {
  title.textContent = category;
  details.innerHTML = "";

  const mechanisms = data[category];
  for (const name in mechanisms) {
    const info = mechanisms[name];

    const box = document.createElement("div");
    box.className = "mechanism-info";

    box.innerHTML = `
      <h4>${name}</h4>
      <p><strong>Description:</strong> ${info.description}</p>
      <p><strong>Materials:</strong> ${info.materials}</p>
      <p><strong>Critical Factors:</strong> ${info.criticalFactors}</p>
      <p><strong>Affected Units:</strong> ${info.affectedUnits}</p>
      <p><strong>Appearance:</strong> ${info.appearance}</p>
      <p><strong>Mitigation:</strong> ${info.mitigation}</p>
      <p><strong>Inspection:</strong> ${info.inspection}</p>
    `;

    details.appendChild(box);
  }
}
