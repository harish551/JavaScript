function isEven(num){
	return num%2 == 0;
}

function isPrime(num){
	for(let factor = 2;factor<=Math.round(num/2);factor++){
		if(num%factor == 0){
			return false;
		}
	}
	return true;
}

function showEvens(limit){
	for(num=2; num<limit;num++){
		if(isEven(num)){
			console.log(num);
		}
	}
}

function showPrimes(limit) {
	for(num=2;num<limit;num++){
		if(isPrime(num)){
			console.log(num);
		}
	}
}

console.log("Printing Evens");
showEvens(100);

console.log("Printing Primes");
showPrimes(100);