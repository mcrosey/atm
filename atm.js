

const account = require('./account');

function getBalance (){
    console.log(balance);
}


function withdraw(withdrawAmount){
    account.balance = account.balance - withdrawAmount;
}

//console.log(account.balance);

function deposit(depositAmount){
    account.balance = account.deposit + depositAmount;
    console.log(account.balance);
}

//console.log(account.balance);

function validatePin (userInput){
let pinAttempt = userInput;
if(pinAttempt != account.pin){
    return "please re-enter pin";
}else{
    return "thank you";
}
console.log(validatePin);
}
module.exports.validate = validatePin;
module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;