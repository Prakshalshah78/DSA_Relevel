// var returnedValue = Math.max(2,5,6,9,10);
// console.log(returnedValue); //5

// var myObj = {};
// Object.assign(myObj,{a:1, b:2, c:3}, {z:9,y:8,x:7});
// console.log(myObj);

function sumOne(a,b,...args){
    console.log(args);
    let mul = a*b;
    let sum = 0;
    for(let arg of args){
        console.log(arg)
        sum+=arg;
    }
    console.log(sum)
    return [sum,mul];
}

console.log(sumOne(2,3,4,7,8,9,35,41))
//first 2 args => multiply
//remaining one => added 
//return [sum,mul]