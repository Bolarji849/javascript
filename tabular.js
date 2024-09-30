//console.log('N  "\t"  N2 "\t"  N3  "\t"  N4 ')


let z = 0;
	console.log("N	N2	N3	N4");
	for(let x = 1; x <=5; x++  ){
	z=x;
	for(let y = 1; y<=4; y++){
		z = z**y
		process.stdout.write(z+"       ");
		z=x;	
	}
	
	console.log("");
	}
	

