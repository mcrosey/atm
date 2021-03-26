//account imports into here
//this imports all functions into index
//contain the following functions
    //getBalance
    //withdraw
    //deposit
    //validatePin
//must be able to interact until exit is selected
//account for any mistakes when information is entered
//initial prompt should list all the options including exit option
const prompt = require('prompt-sync')();

const account = require('./account');

function getBalance (){
    console.log(balance);
}


function withdraw(withdrawAmount){
    account.balance = account.balance - withdrawAmount;
}

console.log(account.balance);

function deposit(depositAmount){
    account.balance = account.deposit + depositAmount;
}

console.log(account.balance);

function validatePin (userInput);
let pinAttempt = userInput;
if (pinAttempt == account.pin){
    return true;
}else{
    return false;
}