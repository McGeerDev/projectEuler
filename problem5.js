// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// 2520 % 1:10 == 0     TRUE
// ANSWER % 1:20 == 0   TRUE

// 2520 is multiple of 10,9,8,7,6,5,4,3,2,1

// var prod = 1;
// for(let i=1;i<=10;i++){
//   prod *=i;
// }
// console.log(prod)

const answer = () =>{
  let arr = [11,12,13,14,15,16,17,18,19,20];
  let primeArr = primes(20);
  
  const reducer = (accumulator, curr) => accumulator * curr;
  let primeProduct = primeArr.reduce(reducer);
  let count = 1;
  let found = false

  finalVal = primeProduct*count;
  while(!found){
    if(checkVal(finalVal,arr)){
      found = true;
    }
    else{
      finalVal = primeProduct*count;
      count++;
    }
  }
  return finalVal;
}

// checkVal() checks if every value in the array(arr) divides cleanly(without remainders) into the number(num);
const checkVal = (num,arr) =>{
  let count = 0;
  for(let i of arr){
    if(num%i==0){count++}
  }
  if(count==arr.length){
    return true;
  }
  else{
    return false;
  }
}

const primes = (limit)=>{ 
  let primes = [];
  let count = 0;
  for(var i=1;i<limit;i++){
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

// console.log(checkVal(2520,[1,2,3,4,5,6,7,8,9,10]));  // Test
console.log(answer());