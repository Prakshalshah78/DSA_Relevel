// let arr = ["elephant","crow","peacock","bison","dog","cat","mouse"]

// console.log(arr.slice(2))
// console.log(arr.slice(2,5)) //slice will take values from first argument till second argument - 1

// let arr="elephant,dog"

// console.log(arr.split("d"))

// //Destructuring 

// let person = {
//     "name":"Mehak",
//     "age":24,
//     "siblings":["Rohan"]
//   }
  
//   let personAge = person.age;
  
//   console.log(personAge)
  
  
//   let person = {
//     nm:"test",
//     age:23
//   }
//   let {nm:customName,firstname="Sanath"}= person //destructuring 
//   console.log(person)
//   console.log(customName,firstname)
  
//   //name:customName => this will indicate that you will fetch your name property with customName in further code
  
//   //firstname="Sanath" - this will indicate that although you did not have firstname in your raw object but we need to use it this is my default value.


//   let person = {
//     nm:"test",
//     age:23,
//     sibling:{
//       brother:"Priyanshu",
//       sister:"Mehak"
//     }
//   }
//   let {nm:customName,sibling:{
//     brother:b,
//     sister:s
//   }}= person 
//   console.log(customName,b,s)


//   let person = {
//     "brother":"Priyanshu",
//     "sister" :"Mehak",
//     "name":"Dipanshu",
//     "age":24,
//       "hobbies":[
//       "Singing",
//       "Trekking"
//     ]
//   }
  
//   let {brother:bro,sister:sis,...restOfDetails} = person
  
//   //... is my rest operator => remaining value
  
//   console.log(bro,sis,restOfDetails)


//   let person = ["Singing","Trekking","Sin","Tre","ing","Tring"]
// // 	0						1				2			3			4				5


// let [a,b, ,...rest] = person
// 	// 0 1 2    3	
// console.log(a,b,rest)