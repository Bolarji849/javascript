const user = {
		groceries : 150,
		dining: 100,
		transportation:50,
		entertainment: 80,



};
sum = 0
for(count in user)
	sum+= user[count]
	console.log(sum);