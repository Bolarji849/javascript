
function isLeapYear(number){

if(number % 4 == 0 && number % 100 != 0|| number % 400 == 0)
	return true
	
else
	return false
	




}

const prompt = require("prompt-sync")();

let year = prompt("Enter year to check if it's leap year:");

console.log(isLeapYear(year));