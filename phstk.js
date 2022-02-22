const formulary = [];

const addToFormulary = (nameOfMedicine) => {
  if (formulary.includes(nameOfMedicine)) {
    return formulary.filter(function (value, index, array) {
      array.indexOf(value) === index;
    });
  } else {
    formulary.push(nameOfMedicine);
    return formulary;
  }
};

const paracetamol = {
  name: "Paracetamol",
  strength: "500mg",
  packSize: 50,
  totalPacks: 100,
};

const ibuprofen = {
  name: "Ibuprofen",
  strength: "500mg",
  packSize: 50,
  totalPacks: 100,
};

const amoxicillin = {
  name: "Amoxicillin",
  strength: "250mg",
  packSize: 20,
  totalPacks: 20,
};

const tramadol = {
  name: "Tramadol",
  strength: "50mg",
  packSize: 100,
  totalPacks: 5,
};

const codeine = {
  name: "Codeine",
  strength: "30mg",
  packSize: 10,
  totalPacks: 20,
};

const simvastatin = {
  name: "Simvastatin",
  strength: "10mg",
  packSize: 10,
  totalPacks: 10,
};

const warfarin = {
  name: "Warfarin",
  strength: "3mg",
  packSize: 50,
  totalPacks: 5,
};

const diclofenac = {
  name: "Diclofenac",
  strength: "N/A",
  packSize: "N/A",
  totalPacks: "N/A",
};

addToFormulary(paracetamol.name);
addToFormulary(ibuprofen.name);
console.log(formulary);

addToFormulary(amoxicillin.name);
console.log(formulary);

addToFormulary(codeine.name);
addToFormulary(diclofenac.name);
addToFormulary(simvastatin.name);
addToFormulary(tramadol.name);
console.log(formulary);

console.log(
  `There are ${formulary.length} medicines in the formulary. Therefore, at most ${formulary.length} medicines can be added to the inventory.`
);

formulary.forEach((medicine) => {
  console.log(
    `Name: ${medicine.name}, Strength: ${medicine.strength}, Pack Size: ${medicine.packSize}, Total Packs: ${medicine.totalPacks}`
  );
});
