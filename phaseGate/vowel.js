let vowels = "aeiou"
total = 0
let givenWord = "hello world"
	for(let count = 0; count < givenWord.length; count++ ){
		for(let counter = 0; counter < vowels.length; counter++ ){
			if(givenWord[count] == vowels[counter]){
				total++
			}
		}

	}

console.log(total)