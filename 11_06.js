//Recursion in factorial
var count = 0;
function factorial(n){
  
  //base case
  if(n==1){
    count++
    return 1;
  }
  count++;
  // recursive call
  let res = factorial(n-1);
  console.log(count)
  // self work
  return res*n;
}
let n = 5;
console.log(n>0 ? factorial(n) : console.log(1))
//5! = 4! * 5
//1! = 1
//1! = 1 * 0!