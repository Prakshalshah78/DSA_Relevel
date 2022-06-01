//==========PURE IMPURE FUNCTION==============

function add(x,y){
    return x+y;
  }
  
  console.log(add(2,2))

  function add(x,y){
    let rand = Math.random()*10;
    return x+y+rand;
  }
  
  //Math.random will generate random number between (0,1]
  //Math.random() *10 will generate random no between 1 to 10
  
  console.log(add(2,2))


  let mutateNum = 0;
const impureFunction = (num) =>{
  return (mutateNum+=num)
}

console.log(impureFunction(5))
console.log(impureFunction(5))
console.log(impureFunction(5))
console.log(impureFunction(5))
console.log(mutateNum)

//==========Closures================
//Nested function
function greet(nm){
    function displayName(){
      console.log('Hi'+" "+nm)
    }
    displayName();
  }
  
  greet('Dipanshu')
  


  //returning a function
function greet(nm){
    function displayName(){
      console.log('Hi'+" "+nm)
    }
    return displayName;
  }
  
  let result = greet('Dipanshu');
  console.log(result);
  result();
  
  
//==========
function x(){
    let a = 8;
    function y(){
      console.log(a)
    }
    a=120;
    return y;
  }
  
  var z = x()
  console.log(z) //function body
  z()
  
  
  
  
  
  
  