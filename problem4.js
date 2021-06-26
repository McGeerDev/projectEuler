// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.


// Largest 3 digit number = 999
// How do you check for a palindrome?
// num[0] == num[num.length-1] = true;

// My initial assumption that the largest palindromic produt would exist out of 999*Y was wrong

// ifPalindrome() checks if a given number is a palindrome or not and returns a boolean value appropriate to the result.
const ifPalindrome = (num) => {
  num = String(num).split("");
  let length = num.length-1;
  let palindrome = true;
  for(let i=0;i<length/2;i++){
    if(num[i] == num[length-i]){
      palindrome = true;
    }
    else{palindrome = false; break;};
  }
  return palindrome;
}

// largePalindrome() is a brute force method of searching for a palindrome that is formed out of 3 digit products;
const largePalindrome = (upperLimit) => {
  for(let i = upperLimit; i>99;i--){
    // if(String(upperLimit*i).endsWith(String(upperLimit*i)[0])){console.log(upperLimit,i,"=",upperLimit*i);}
    if(ifPalindrome(upperLimit*i)){
      // console.log(upperLimit,i,upperlimit*i);
      return upperLimit*i;
    }
  }
}

// largestPalindrome() finds and return the largest palindrome found by largePalindrome()
const largestPalindrome = ()=>{
  let max = 0;
  for(let i=999;i>99;i--){ // Counting backwards on the assumption that the 2 3-digit values are closer to 999 than 100
    if(max<largePalindrome(i)){
      max = largePalindrome(i);
    }
  }
  return max;
}
 console.log(largestPalindrome());