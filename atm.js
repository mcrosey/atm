const account = require('./account');

function getBalance (){
    console.log(balance);
}


function withdraw(withdrawAmount){
    account.balance = account.balance - withdrawAmount;
    return account.balance;
}


function deposit(depositAmount){
    account.balance = account.balance + depositAmount;
    console.log("this is account balance" + account.balance)
    return account.balance;
}


function validatePin (userInput){
let pinAttempt = userInput;
if(pinAttempt != account.pin){
    return "please re-enter pin";
}else{
    return "thank you";
}

}
module.exports.validate = validatePin;
module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;