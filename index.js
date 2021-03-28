const { pin, balance } = require("./account")
const prompt = require('prompt-sync')();
const {validate, getBalance, deposit, withdraw} = require('./atm');

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
let result = validate(enterPin);
switch (result){
    case "thank you":
        console.log("thank you");
        break;
    case "please re-enter pin":
        console.log('please try again');
        const enterPin = prompt();
        validate(enterPin);
        // break;
}
console.log(result);
console.log('choose menu item');
console.log('1 check balance \n2 make a deposit \n3 make a withdrawl');
const makeChoice = prompt();
switch(makeChoice) {
case "1":
    console.log(balance);
    break;
case "2":
    console.log("How much would you like to deposit");
    let depositSum = prompt()
    depositSum = parseInt(depositSum);
    console.log(depositSum);  
    let sum = deposit(depositSum);
    console.log(sum);
    break;
case "3":
    console.log("How much would you like to withdraw?");
    let withdrawAmount = prompt();
    withdrawAmount = parseInt(withdrawAmount);
    console.log (withdrawAmount);
    let amount = withdraw(withdrawAmount);
    console.log (amount);
    break;
default:
    break;
}