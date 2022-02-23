// 1.1 Medication Available in the Pharmacy

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
  strength: "250mg",
  packSize: 25,
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

// 1.2 Medication Inventory

let medicine = "Paracetamol";

switch (medicine) {
  case "Paracetamol":
    console.log(
      `Name: ${paracetamol.name}, Strength: ${paracetamol.strength}, Pack Size: ${paracetamol.packSize}, Total Packs: ${paracetamol.totalPacks}`
    );
  case "Iboprufen":
    console.log(
      `Name: ${ibuprofen.name}, Strength: ${ibuprofen.strength}, Pack Size: ${ibuprofen.packSize}, Total Packs: ${ibuprofen.totalPacks}`
    );
  case "Amoxicillin":
    console.log(
      `Name: ${amoxicillin.name}, Strength: ${amoxicillin.strength}, Pack Size: ${amoxicillin.packSize}, Total Packs: ${amoxicillin.totalPacks}`
    );
  case "Tramadol":
    console.log(
      `Name: ${tramadol.name}, Strength: ${tramadol.strength}, Pack Size: ${tramadol.packSize}, Total Packs: ${tramadol.totalPacks}`
    );
  case "Codeine":
    console.log(
      `Name: ${codeine.name}, Strength: ${codeine.strength}, Pack Size: ${codeine.packSize}, Total Packs: ${codeine.totalPacks}`
    );
  case "Simvastatin":
    console.log(
      `Name: ${simvastatin.name}, Strength: ${simvastatin.strength}, Pack Size: ${simvastatin.packSize}, Total Packs: ${simvastatin.totalPacks}`
    );
  case "Warfarin":
    console.log(
      `Name: ${warfarin.name}, Strength: ${warfarin.strength}, Pack Size: ${warfarin.packSize}, Total Packs: ${warfarin.totalPacks}`
    );
}

// Warfarin is being added to the inventory even though it is not in the formulary. Need to fix this.
