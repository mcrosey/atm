const { pin, balance } = require("./account")
const prompt = require('prompt-sync')();

// menu
// enterpin~
// validatepin~
// or reenter pin ... prompt works does not request reentery
// list of choice
// view balance
// make a withdrawl
// make a deposit
// exit the atm

console.log("welcome");
console.log("please enter pin");
const enterPin = prompt();
const {validate, getBalance, deposit, withdraw} = require('./atm');
let result = validate(enterPin);
console.log(result);
console.log('choose menu item');
console.log('1 check balance \n2 make a deposit \n3 make a withdrawl');
const makeChoice = prompt();
switch(makeChoice) {
case "1":
    getBalance;
    console.log(balance);
    break;
case "2":
    let depositAmount = prompt("How much would you like to deposit?")
    parseInt(depositAmount);
    deposit;
    console.log(balance);
    break;
case "3":
    withdraw;
    console.log(balance);
    break;
default:
    break;
}