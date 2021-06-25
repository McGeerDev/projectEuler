// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

// if(num%3 == 0 or num%5 == 0){ Solution 1;
//   sum += num;
// }

// Use 2 for loops;  Possible 2nd solution
// 1 for i+3 increments
// 1 for i+5 increments

const sum = (num)=>{
  let sum = 0;
  for(let i = 3;i<num;i++){
    (i%3==0||i%5==0)?sum+=i:null;
  }
  return sum

}

console.log(sum(1000)); 