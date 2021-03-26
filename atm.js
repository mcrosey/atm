

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
}

//console.log(account.balance);

function validatePin (userInput){
let pinAttempt = userInput;
if (pinAttempt == account.pin){
    return true;
}else{
    return false;
}
}
module.exports.validate = validatePin;