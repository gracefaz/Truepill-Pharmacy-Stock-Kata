# Truepill Pharmacy Stock Kata

This repository contains my solution to the take-home coding test for Truepill, written in JavaScript. 

## Installation

The code is run within the Node.js environment.

## Description

The test consists of two main parts: **1.1 Medication Available in the Pharmacy**, and **1.2 Medication Inventory**. 

**1.1** requires us to maintain a list of medicines in the formulary (formulary meaning list of medicines). To do this I first created objects for all of the relevant medications, for example 
```javascript
const paracetamol = {
  name: "Paracetamol",
  strength: "500mg",
  packSize: 50,
  totalPacks: 100,
};
```
I then created a simple function called addToFormulary, which takes the name of one of the objects as its argument.
```javascript
addToFormulary(paracetamol.name);
```
After adding Paracetamol and Ibuprofen to the formulary, the formulary is printed to the console by
```javascript
console.log(formulary)
```
The same command can be used after adding more medications to check the updated formulary.
If we tried to add a medication to the formulary which was already there, an error message would be printed telling us that one type of medication can be added to the formulary only once.

**1.2** requires us to add medicines to the inventory so that we can maintain stock levels of medicines in the formulary.

