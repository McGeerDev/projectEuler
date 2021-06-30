// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?

// The primes function creates an array of prime numbers
const primes = (limit) => {  
  let primes = [];
  let count = 0;
  let countPrimes = 0;
  let prime;
  for(var i=1;i<limit;i++){ // If there are not enough prime numbers the primeFactors function returns undefined.
    for(var j=1;j<=i;j++){
      if(i%j == 0){ //Count each time the modulo is 0. Prime numbers only have 2 or less.
        count++;
      }
    }
    if(count <=2 ){
      primes.push(i)
      countPrimes++;
      prime = i;
      count = 0;
    }
    if(countPrimes==(10001+1)){
      return prime;
    }
    count = 0;
  }
  return -1;
  // return primes;
}

console.log(primes(1000000))