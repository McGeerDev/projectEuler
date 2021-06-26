// The prime factors of 13195 are 5, 7, 13 and 29.
// 
// What is the largest prime factor of the number 600851475143 ?
//
// Prime factor: Num = x * y * z... where x and y and z are prime numbers;
// This means num % x == 0 : true
// How to check for prime numbers? Divide by self and 1;

// Solution 1 was to push at every point where the outer number modulo the inner number is equal to 0;
// but there are numbers with multiple 0 remainders.

// This is the first rendition of the answer and should be improved as it is very slow and inefficient.

const primeFactors = (num) => { // Divide from the smallest factor, getting larger until the division equals 1. This is the biggest factor
  let prime_nums = primes();
  for(let factor of prime_nums){
    if(num%factor == 0){
      if(num/factor == 1){
        return factor;
      } 
      num = num / factor;
    }
  }
}
// The primes function creates an array of prime numbers
const primes = ()=>{ 
  let primes = [];
  let count = 0;
  for(var i=1;i<100000;i++){ // If there are not enough prime numbers the primeFactors function returns undefined.
    for(var j=1;j<=i;j++){
      if(i%j == 0){ //Count each time the module is 0. Prime numbers only have 2 or less.
        count++;
      }
    }
    if(count <=2 ){
      primes.push(i)
      count = 0;
    }
    count = 0;
  }
  return primes;
}

console.log(primes());
// console.log(primeFactors(13195)); // Test to confirm logic
console.log(primeFactors(600851475143));