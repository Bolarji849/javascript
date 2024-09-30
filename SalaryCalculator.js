const prompt = require("prompt-sync")({sigient:true});

while(true){

	let soldMerchandise = prompt("Enter worth of sold merchandise for the week: ")
	if(soldMerchandise <=0 )
		console.log("invalid input");

	const salary = 200

	const grossPercentage = 9

	let result = (soldMerchandise / 100) * 9 + 200

console.log("your Salary is:",result);

}