const prompt = require("prompt-sync")();

let accountNumber = prompt("Enter account number:");

let beginingMonthBalance = prompt("Enter beginning month balance: ");

let totalCharged = prompt("Enter total item charged:");

let CreditApplied = prompt("Enter total of credit applied: ");

let CreditLimit = prompt("Enter allow credit limit: ");

let newBalance = beginingMonthBalance + totalCharged - CreditApplied

if(newBalance > CreditLimit){


console.log("Credit Limit exceeded");
}

else{
	console.log("Credit Limit not exceeded");
	}
	




console.log();