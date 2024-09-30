const prompt = require("prompt-sync")({sigient:true})
let digit = prompt("Enter number: ");
	for(let column = 1; column <= digit; column++){
			for(let row = 1; row <= column; row++){
				process.stdout.write("*");
				}

		console.log()
		}


