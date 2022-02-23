# Truepill Pharmacy Stock Kata

This repository contains my solution to the take-home coding test for Truepill, written in JavaScript. 

## Installation

Code is run within the Node.js environment.

## Description

The Truepill test has two main parts: **1.1 Medication Available in the Pharmacy**, and **1.2 Medication Inventory**. 

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

**1.2** requires us to add medicines to the inventory so that we can maintain stock levels of medicines in the formulary.
