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

addToFormulary("Paracetamol");
addToFormulary("Ibuprofen");
console.log(formulary);

addToFormulary("Amoxicillin");
console.log(formulary);

addToFormulary("Codeine");
addToFormulary("Diclofenac");
addToFormulary("Simvastatin");
addToFormulary("Tramadol");
console.log(formulary);

console.log(
  `There are ${formulary.length} medicines in the formulary. Therefore, at most ${formulary.length} medicines can be added to the inventory.`
);

for (let i = 0; i < formulary.length; i++) {
  if (formulary[i] === "Paracetamol") {
    console.log(
      "Name: Paracetamol, Strength: 500mg, Pack Size: 50, Total Packs: 100"
    );
  } else if (formulary[i] === "Ibuprofen") {
    console.log(
      "Name: Ibuprofen, Strength: 500mg, Pack Size: 50, Total Packs: 100"
    );
  } else if (formulary[i] === "Amoxicillin") {
    console.log(
      "Name: Amoxicillin, Strength: 250mg, Pack Size: 20, Total Packs: 20"
    );
  } else if (formulary[i] === "Tramadol") {
    console.log(
      "Name: Tramadol, Strength: 50mg, Pack Size: 100, Total Packs: 5"
    );
  } else if (formulary[i] === "Codeine") {
    console.log(
      "Name: Codeine, Strength: 30mg, Pack Size: 10, Total Packs: 20"
    );
  } else if (formulary[i] === "Simvastatin") {
    console.log(
      "Name: Simvastatin, Strength: 10mg, Pack Size: 10, Total Packs: 10"
    );
  } else if (formulary[i] === "Warfarin") {
    console.log("Name: Warfarin, Strength: 3mg, Pack Size: 50, Total Packs: 5");
  }
}
