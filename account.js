//imports into atm
//likely contains balance
//maybe contains the pin?

const PromptSync = require("prompt-sync");

//how to store the balance information to this file
//how to then update the balance with a deposit

let pin = 8537
let balance = 800

//create an add function that can add the balance with a user input variable

function updateBalance(currentBalnce, depositAmount){
    return currentBalnce + depositAmount;
}

module.exports.balanceUpdate = updateBalance;
module.exports.balance = balance; 
module.exports.pin = pin;
console.log(module);

// function verifyPin (userInput, pin){
//     let userInput = PromptSync
// }