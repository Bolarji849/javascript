let array =  [1,2,3,4]
console.log(caculateSum(array));

function caculateSum(number){

	let total = 0;

	for(let count =0; count <number.length; count++){
		total+= number[count]

	}


return total
}