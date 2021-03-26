//final imported into file
//this will contain the user menu that interacts with the atm

const { pin, balance } = require("./account")
const prompt = require('prompt-sync')();

// menu
// enterpin
// validatepin
// or reenter pin
// list of choice
// view balance
// make a withdrawl
// make a deposit
// exit the atm

console.log("welcome");
console.log("please enter pin");
const enterPin = prompt();
const {validate} = require('./atm');
let result = validate(enterPin);
console.log(result);