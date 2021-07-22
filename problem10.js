// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

// The primes function creates an array of prime numbers up until limit.

// const primes = (limit)=>{ 
//   let primes = [];
//   let count = 0;
//   for(var i=2;i<limit;i++){
//     console.log(i);
//     for(let j=1;j<=i/2;j++){
//       if(i%j == 0){ //Count each time the module is 0. Prime numbers only have 2 or less.
//         count++;
//       }
//     }
//     if(count <=2 ){
//       primes.push(i)
//       count = 0;
//     }
//     count = 0;
//   }
//   return primes;
// }

// const sumOfPrimes = (limit) =>{
//   const sum = (accumulator,currentValue) => accumulator+currentValue;
//   return primes(limit).reduce(sum);
// }
// console.log(sumOfPrimes(2_000_000));
// console.log(primes(10))

// const primes1 = () =>{
//   let negOne = 1;
//   let arr = primes(40)
//   let limit = 15;
//   for(let i = 1;i<limit;i++){
//     Math.floor((factorial(i)%(i+1))/i)*
//   }
//   return arr
// }
// const factorial = (num) => {
//   let prod = 1;
//   for(let i=1;i<=num;i++){prod*=i}
//   return prod;
// }


// const isPrime = (n) =>{
//   if(n==1)          {return false}
//   else if(n<4)      {return true}
//   else if(n%2 == 0) {return false}
//   else if(n<9)      {return true}
//   else if(n%3 == 0) {return false}
//   else{
//     let r = Math.floor(Math.sqrt(n));
//     let f = 5;
//     while(f<=r){
//       if(n%f==0){
//         return false
//       }
//       if(n%(f+2)==0){
//         return false;
//       }
//       f+=6;
//     }
//     return true;
//   }
// }

// const sumPrimes=(n)=>{
//   let sum = 12;
//   for(let i=2;i*i<=n;i++){
//     if(isPrime(i)){
//       sum+=i;
//     }
//   }
//   return sum;
// }
// console.log(sumPrimes(10));

const sieveOfEratosthenes = (n) => {
  let sum = 0;
  let prime = Array.from({length: n+1},(_,i)=>true);
  for(let i=2;i*i<=n;i++){
    // console.log("i: ",i);
    if(prime[i] == true){
      for(let j=i*i;j<=n;j+=i){
        console.log("i & j: ",i,j);
        prime[j] = false;
      }
    }
  }

  for(i=2;i<=n;i++){
    prime[i]==true?sum+=i:null
  }
  return sum;
}

console.log(sieveOfEratosthenes(100)); 
