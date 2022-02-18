// 1.1 Medication Inventory

// 1.1 Medication Available in the Pharmacy

// Starting with an empty array called 'emptyForm' (stands for empty formulary). Medicines will be added to this array as and when they are needed.
const emptyForm = [];
// Function called 'addToFormulary' which takes the name of a medicine (as a string) as its input and adds this medicine to the empty array 'emptyForm'.
const addToFormulary = (nameOfMedicine) => {
  if (emptyForm.includes(nameOfMedicine)) {
    return emptyForm.filter(function (value, index, array) {
      array.indexOf(value) === index;
    });
  } else {
    emptyForm.push(nameOfMedicine);
    return emptyForm;
  }
};

// 1. Add Paracetamol and Iboprufen to the formulary and print the updated list.
addToFormulary("Paracetamol");
addToFormulary("Ibuprofen");
console.log(emptyForm);
console.log("");

// 2. Add Amoxicillin to the formulary and print the updated list.
addToFormulary("Amoxicillin");
console.log(emptyForm);
console.log("");

// 3. Add Codeine, Diclofenac, Simvastatin and Tramadol to the formulary and print the updated list.
addToFormulary("Codeine");
addToFormulary("Diclofenac");
addToFormulary("Simvastatin");
addToFormulary("Tramadol");
console.log(emptyForm); // Prints to the console.

console.log(" ");

// Running the addToFormulary function again with the input of 'Paracetamol' should not add another Paracetamol element to the array, as Paracetamol is already in the array. It should print the array ['Paracetamol', 'Ibuprofen', 'Amoxicillin', 'Codeine', 'Diclofenac', 'Simvastatin', 'Tramadol']. (Uncomment the following to see this.)
// addToFormulary("Paracetamol");
// console.log(emptyForm);

// Similarly, calling addToFormulary with the input of 'Ibuprofen' will not add Ibuprofen to the formulary, as it is already there. (Uncomment the following to see this.)
// addToFormulary("Ibuprofen");
// console.log(emptyForm);

// However, if we call addToFormulary with 'Warfarin' as the argument, Warfarin will be added to the end of the formulary as it is not already there. (Uncomment the following to see this.)
// addToFormulary("Warfarin");
// console.log(emptyForm);

console.log(" ");

console.log(
  "There are " +
    emptyForm.length +
    " medications in the formulary. Therefore, at most " +
    emptyForm.length +
    " medications can be in the inventory."
);

console.log("");

for (let i = 0; i < emptyForm.length; i++) {
  if (emptyForm[i] === "Paracetamol") {
    console.log(
      "Name: Paracetamol, Strength: 500mg, Pack Size: 50, Total Packs: 100"
    );
  } else if (emptyForm[i] === "Ibuprofen") {
    console.log(
      "Name: Ibuprofen, Strength: 500mg, Pack Size: 50, Total Packs: 100"
    );
  } else if (emptyForm[i] === "Amoxicillin") {
    console.log(
      "Name: Amoxicillin, Strength: 250mg, Pack Size: 20, Total Packs: 20"
    );
  } else if (emptyForm[i] === "Tramadol") {
    console.log(
      "Name: Tramadol, Strength: 50mg, Pack Size: 100, Total Packs: 5"
    );
  } else if (emptyForm[i] === "Codeine") {
    console.log(
      "Name: Codeine, Strength: 30mg, Pack Size: 10, Total Packs: 20"
    );
  } else if (emptyForm[i] === "Simvastatin") {
    console.log(
      "Name: Simvastatin, Strength: 10mg, Pack Size: 10, Total Packs: 10"
    );
  } else if (emptyForm[i] === "Warfarin") {
    console.log("Name: Warfarin, Strength: 3mg, Pack Size: 50, Total Packs: 5");
  }
}

// Note that adding the 'else if' for Warfarin will not change the output as Warfarin is not in the formulary. However, if Warfarin were to be added to the formulary first (uncomment above to see this), then it would be added to the inventory.
