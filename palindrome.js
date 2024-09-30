const prompt = require("prompt-sync")({sigient:true})
let number = prompt("Enter number a five digit number: ");
if(number <=9999){
	console.log("invalid input");
	let number = prompt("Enter number a five digit number: ");
	}
	let userInputedNumber = number
	let reverse = 0
	let counter = 1 
	while(counter <= number){
		reverse =  reverse * 10 + number % 10
		
		number = number / 10
		number = Math.trunc(number)
		}
		counter++
			
		if(userInputedNumber ==  reverse ){
			console.log("it's a palindrome");
		}
		else{
			console.log("it's not a palindrome");

		
		}
	