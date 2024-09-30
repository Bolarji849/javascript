const prompt = require("prompt-sync")({sigient:true})


	let userinput = prompt(" Enter amount of numbers you like to enter");
		

	let number = prompt(" Enter amount of numbers you like to enter");
		


	let counter = 1;
	let largest = 0;
	let smallest = number;



	while(counter < userinput ){
		let number = prompt(" Enter numbers ");
	
		if (number > largest )largest = number;
		else if (number<smallest) smallest = number;

		counter++;
	}

	console.log("The largest is  " + largest);
      

	

