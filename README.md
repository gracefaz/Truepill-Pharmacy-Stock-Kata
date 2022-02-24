# Truepill Coding Test: Pharmacy Stock Kata

This repository contains my solution (pharmacystockkata.js) to the take-home coding test for Truepill, written in JavaScript. 

## How To Run

Need to use a preferred IDE such as Visual Studio Code (VSC). The code is run within the Node.js environment. To run locally, type the following command in the terminal:
```bash
node pharmacystockkata.js
```
and press enter to see the output in the console.

## Description

The test consists of two main parts: **1.1 Medication Available in the Pharmacy**, and **1.2 Medication Inventory**. 

**1.1** Requires us to maintain a list of medications in the formulary (list of available medications). To do this I first created separate objects for each of the relevant medications from the provided data. For example,
```javascript
const paracetamol = {
  name: "Paracetamol",
  strength: "500mg",
  packSize: 50,
  totalPacks: 100,
};
```
Then I created a simple function called addToFormulary, which takes the name of one of the objects (see the paracetamol object declared above) as its argument. The function checks whether the argument already exists in the formulary. If it doesn't, then the medication is added to the formulary. If the formulary already contains the medication then an error message is outputted, as a single medication can only be added to the formulary once. The function can be called by the following.
```javascript
addToFormulary(paracetamol.name);
```
After adding Paracetamol and Ibuprofen to the formulary, the formulary is printed to the console by
```javascript
console.log(formulary);
```
The same command can be used after adding more medications to check the updated formulary.


**1.2** Requires us to add medicatioins to the inventory so that we can maintain stock levels of medications in the formulary.

I chose to use a switch statement for this task, starting with declaring the 'medication' variable in the following way.
```javascript
let medication = 'Paracetamol';
```
Then we simply need to change the 'case' values to the different medication names. For example
```javascript
switch (medication) {
  case "Ibuprofen":
    if (formulary.includes("Ibuprofen")) {
      console.log(
        `Name: ${ibuprofen.name}, Strength: ${ibuprofen.strength}, Pack Size: ${ibuprofen.packSize}, Total Packs: ${ibuprofen.totalPacks}`
      );
    } else {
      console.log(
        "Error! Ibuprofen cannot be added to the inventory as it is not in the formulary."
      );
    }
  };
```

A point to note about this section is that only medications that are in the formulary can be added to the inventory. We were instructed to add Warfarin to the inventory, however as it is not in the formulary it cannot be added. I managed this by adding multiple if statements to the switch statement which check whether the name of the medication (for example 'Ibuprofen') is in the formulary. If yes (or true), then the name of the medication is printed in the inventory, as expected. If the medication is not in the formulary, then the inventory prints without said medication. An error message is also printed to tell the user that the medication cannot be added to the inventory.

## More Features

Approximately 6 hours were spent on this task. If time had allowed, I would have edited the code to be able to accept user input. For example, asking the user (ie. the pharmacist) which medication they would like to add to the inventory etc. Implementing this would have exceeded the recommened time. Perhaps another improvement might have been to import the medication data from a CSV file (if presented), and refer to the file in the script, rather than having to declare objects for each medication.
