//check if it is my array or not
const arr = [1,2,3,4]
//console.log(Array.isArray(arr))

//Javascript obj
const obj = {
  a:10,
  b:20
}

const myJson = JSON.stringify(obj);
console.log(myJson)

const arrNames = [1,2,3,4]
const myJsonArray = JSON.stringify(arrNames)
console.log(typeof myJsonArray)



//Fill

const arr=[1,2,3,4]
arr.fill("abc",2,4)
console.log(arr)

const age=[10,20,30,40,50,60,70]
         //0 1 2 3
//find age > 20

//[30,40,50,60,70]

//1. Using filter method
const filteredAge =age.filter((elem)=>elem>20)
console.log(filteredAge)

//2. Using find method
const findAge = age.find(element=>element>20)

console.log(findAge)


//2d Arrays

const age=[
    [1,2,4,5,6],
[2,3,4,5,44],
[29,39,48,18,24],
[84,23,212,23,45]
]

for(rows=0;rows<age.length;rows++){
for(cols=0;cols<age[rows].length;cols++){
console.log(age[rows][cols])
}
}


//iterative statements

/*
for
while
do-while
foreach
for in
for of

if
else
switch

break;
continue;

const arr = ["Apple","Rose","Summer"]
const obj = {
  "fruit":"Apple",
  "flower":"Rose",
  "season":"Summer"
}


//for - in => indices will be fetched
//=> if you need to get the element then you need to do operation in array e.g arr[idx]
for(let idx in arr){
  console.log(idx,arr[idx])
}

//for - of => entire element will be extracted
for(let elem of arr){
  console.log(elem)
}






const arr = ["Apple","Rose","Summer"]
const obj = {
  "fruit":"Apple",
  "flower":"Rose",
  "season":"Summer"
}

//console.log(Object.keys(obj))

//for - of
for(var key of Object.keys(obj)){
  //console.log(obj[key])
}

//for - in
for(var key in obj){
  console.log(obj[key])
}


*/


console.log(a)
var a=10;

//browser code

/*
var a;
console.log(a)
a=10;
*/

//=========let and const=========
console.log(aWithLet)
let aWithLet = 10;

//browser code
/*console.log(aWithLet);
let aWithLet;
aWithLet=10;*/


//by default only var is hoisted 
//let and const does not support hoisting




/*let foo = "outer";
function x()
{
    console.log("...");
    let foo = "inner";
    console.log(foo);
}
x();
*/
var foo = "outer";
function x()
{
    console.log("...");
    var foo = "inner";
    console.log(foo);
}
x();




// Map - transforming an array
 
var origArr=[10,20,30,40]

//multiply every elem with 5
let mapArray = origArr.map((elem)=>elem*5)

console.log("origArr",origArr)
console.log("mapArray",mapArray)

// Filter - use to filter out the records as per demand / condition

const filtArr =origArr.filter((elem)=>elem>15)
console.log("filtArr",filtArr)
//[20,30,40]

//Reduce - return one value as output

const reduceArr= origArr.reduce((mul,elem)=>{
  return mul*=elem
},1)

console.log(reduceArr)


// mul = mul*arr[i]

//pass by value and reference 

//pass by value
function square(x) {
    x = x * x;
    return x;
}

let y = 10;
let result = square(y);

console.log(result); //
console.log(y); //
