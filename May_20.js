// var person = {
//   name : "Dishi",
//   age : 24,
//   sibling : ["Mehak"],
//   isStudent : true
// }
// Object.seal(person)
// console.log(Object.isSealed(person))

// person.name="Deepanshu"
// console.log(person)

// person.test = "test"
// console.log(person)

// delete person.age;
// console.log(person)

// //can not delete
// //can not add
// //can modify

// var person = {
//     name : "Dishi",
//     age : 24,
//     sibling : ["Mehak"],
//     isStudent : true
//   }
  
//   Object.preventExtensions(person)
//   console.log(Object.isExtensible(person))
  
//   person.name = "Deepanshu"
//   console.log(person)
  
//   person.test = "test"
//   console.log(person)
  
//   delete person.name 
//   console.log(person)
  
//   //can delete
//   //can update
//   //can not add
  

//   const arr = [5,1,2,6]

// function double(x){
//   return x*2;
// }

// function triple(x){
//   return x*3;
// }

// function add5(x){
//   return x+5;
// }

// const output = arr.map(add5)

// console.log(output)


// // ===============FILTER================
// const arr = [5,1,2,6]

// function odd(x){
//   return x%2;
// }

// function even(x){
//   return x%2===0;
// }

// const output = arr.filter((x)=>x%2===0) 

// console.log(output)
// //filter will accept a function which will basically filters out the existing values and give new values 

// ///REDUCE/////////

// const arr = [5,1,2,6,8,9]

// function findSum(arr){
//   let sum = 0;
//   for(let i=0;i<arr.length;i++){
//     sum= sum + arr[i]
//   }
//   return sum;
// }

// //same using reduce 

// const output = arr.reduce(function(acc,curr){
//   acc = acc+curr;
//   return acc;
// },0) 

// console.log(output)
// //pass function which will do our job 
// //this function will be iterated to each and every element of an array 

// // acc - accumulator - it will add or accumulate the reult after each iteration , just as sum

// // curr - current - represents the value in each iteration , just as arr[i]


// //Reduce 

// const arr = [5,1,2,6,8,9] //9

// function findMax(arr){
//   let max = 0;
//   for(let i =0;i<arr.length;i++){
//     if(arr[i]>max){
//       max=arr[i]
//     }
//   }
//   return max;
// }

// const output = arr.reduce(function(max,curr){
//   if(curr>max){
//     max= curr;
//   }
//   return max;
// },0)
// console.log(arr)
// console.log(output)