#! /usr/bin/env node

import inquirer from "inquirer";

let mybalance = 25000;

let mypin = 6666;

let pinanswer = await inquirer.prompt([{

name:"pin",
message:"enter your pin",
type:"number"

}]);

if (pinanswer.pin === mypin) {
console.log("Correct pin code");

let operationans = await inquirer.prompt([{

name:"operation",
message:"please select option",
type:"list",
choices:["withdraw","check balance"],

}]);


if(operationans.operation === "withdraw") {

let amountAns = await inquirer.prompt([{

name:"amount",
message:"Enter your amount",
type:"number"


}]);

mybalance -= amountAns.amount;

console.log("your remaining balance is:" + mybalance)
} else if (operationans.operation === "check balance"){
console.log("your balance is:" + mybalance)
}

}

else {
    console.log("Incorrect pin number");
}
