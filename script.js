
function populateDropdown(filteredData = data) {
  const select = document.getElementById("mechanism-select");
  select.innerHTML = '<option value="">-- Select --</option>';
  filteredData.forEach((mech, index) => {
    const opt = document.createElement("option");
    opt.value = mech.name;
    opt.textContent = mech.name;
    select.appendChild(opt);
  });
}

function showMechanismDetails() {
  const selected = document.getElementById("mechanism-select").value;
  const mech = data.find(m => m.name === selected);
  if (!mech) return;
  document.getElementById("dm-name").textContent = mech.name;
  document.getElementById("dm-description").textContent = mech.description;
  document.getElementById("dm-materials").textContent = mech.materials;
  document.getElementById("dm-factors").textContent = mech.factors;
  document.getElementById("dm-equipment").textContent = mech.equipment;
  document.getElementById("dm-inspection").textContent = mech.inspection;
  document.getElementById("dm-prevention").textContent = mech.prevention;
  document.getElementById("dm-related").textContent = mech.related.join(", ");
}

function searchMechanisms() {
  const search = document.getElementById("search-box").value.toLowerCase();
  const filtered = data.filter(m => m.name.toLowerCase().includes(search));
  populateDropdown(filtered);
  document.getElementById("details").style.display = "none";
}

function exportToExcel() {
  let csv = "Name,Category,Description,Materials,Factors,Equipment,Inspection,Prevention,Related\n";
  data.forEach(m => {
    csv += `"${m.name}","${m.category}","${m.description}","${m.materials}","${m.factors}","${m.equipment}","${m.inspection}","${m.prevention}","${m.related.join('; ')}"\n`;
  });
  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "api571_damage_mechanisms.csv";
  link.click();
}

function exportToPDF() {
  const doc = new jsPDF();
  const selected = document.getElementById("mechanism-select").value;
  const mech = data.find(m => m.name === selected);
  if (!mech) return alert("Please select a damage mechanism first.");

  doc.setFontSize(16);
  doc.text(mech.name, 10, 20);
  doc.setFontSize(12);
  let y = 30;
  doc.text(`Description: ${mech.description}`, 10, y); y += 10;
  doc.text(`Materials: ${mech.materials}`, 10, y); y += 10;
  doc.text(`Critical Factors: ${mech.factors}`, 10, y); y += 10;
  doc.text(`Equipment: ${mech.equipment}`, 10, y); y += 10;
  doc.text(`Inspection: ${mech.inspection}`, 10, y); y += 10;
  doc.text(`Prevention: ${mech.prevention}`, 10, y); y += 10;
  doc.text(`Related: ${mech.related.join(', ')}`, 10, y);

  doc.save(mech.name + ".pdf");
}

window.onload = () => {
  populateDropdown();
  document.getElementById("search-box").addEventListener("input", searchMechanisms);
  document.getElementById("export-btn").addEventListener("click", exportToExcel);
  document.getElementById("pdf-btn").addEventListener("click", exportToPDF);
};
