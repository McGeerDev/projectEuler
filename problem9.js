// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

//Brute Force method:
// a = sqrt((c+b)(c-b))
// while(typeOf(a)!= number) b++

// console.log(1.123%1 == 0);
// a^2 + b^2 = c^2
// a + b + c = 1000
// a < b < c 


// const answer = () => {
//   let a,b;
//   let c = 1;
//   while((a+b+c != 1000)){
    
//     c++
//   }
//   console.log(a,b,c)
//   return 123
// }

const isInt = (num) =>{
  return (num%1 == 0);
}
// Checks the product of every number until 1000 as the extreme upper limit is 1000.
const disgustingBruteForce = () =>{
let a,b,c
  for(let i = 1;i<1000;i++){
    for(let j=i+1;j<1000-i;j++){
      if(isInt(Math.sqrt(Math.pow(i,2)+Math.pow(j,2)))){
        console.log(i,j,Math.sqrt(Math.pow(i,2)+Math.pow(j,2)),i+j+Math.sqrt(Math.pow(i,2)+Math.pow(j,2)));

        if((i+j+Math.sqrt(Math.pow(i,2)+Math.pow(j,2))) == 1000){
          console.log(i,j,Math.sqrt(Math.pow(i,2)+Math.pow(j,2)),'Success');
          a = i;
          b = j;
          c = Math.sqrt(Math.pow(i,2)+Math.pow(j,2));
        }
      }
    }
  }
  return a*b*c;
}
console.log(disgustingBruteForce());


//parametrisation method


