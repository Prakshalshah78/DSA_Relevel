
// Print Parenthesis
function PrintParenthesis(result,open,close,n){
  
  //base case
  if(result.length==2*n){
    console.log(result.join(''));
    return;
  }
  
  if(open<n){
    result.push("(");
    PrintParenthesis(result,open+1,close,n);
    result.pop();
  }
  if(close<open){
    result.push(")");
    PrintParenthesis(result,open,close+1,n);
    result.pop();
  }
}

PrintParenthesis([],0,0,2)

// Lexicographical order
let createArray = (n) => {
  const nums=[];
  for(let i=0;i<n;i++){
    nums.push(i);
  }
  return nums;
}

let lexOrder = (nums) => {
  nums.sort();
  return nums;
}

let printValues = (nums) => {
  let str="";
  for(let i=0;i<nums.length;i++){
    str+=nums[i]+" "; 
  }
  console.log(nums);
}
let n = 22;
let arr = createArray(n);
printValues(lexOrder(arr))

//findSteps
function findStep(n){
  if(n==1||n==0){
    return 1;
  }
  else if(n==2){
    return 2;
  }
  else{
      let a = findStep(n-1);
      let b = findStep(n-2);
      let c = findStep(n-3);
    return a+b+c;
  }
}

console.log(findStep(4));