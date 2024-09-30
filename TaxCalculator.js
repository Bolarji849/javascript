

const prompt = require("prompt-sync")({sigient:true})

let name = prompt("Enter Name: ");
let amountEanred = prompt("Enter total amount earned for year: ");


if(amountEanred == 30,000){
	let result = amountEanred * 0.15
	console.log('${name}, and tax is:', name, result,);
	}
else{
	(amountEanred > 30,000)
	let output = amountEanred * 0.20
	console.log('${name}, and tax is:', name, output,);
	}
