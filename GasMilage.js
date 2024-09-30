const prompt = require("prompt-sync")({sigient:true})
let numberOfTrips = prompt("Enter number of trips: ");
		

let totalOfMiles = 0;
let totalOfGallons = 0;

		for(let count = 1; count <= numberOfTrips; count++){

			let milesDriven = prompt("Enter the miles driven: ");
			

			totalOfMiles = totalOfMiles + milesDriven;

			let gallonUsed = prompt("Enter the gallon used: ");
			

			totalOfGallons = totalOfGallons + gallonUsed;

			let average = milesDriven / gallonUsed;

		}

		let totalOfAverage = totalOfMiles / totalOfGallons;
		console.log(totalOfAverage);

		

