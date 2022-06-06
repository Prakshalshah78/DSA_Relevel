// const json = '{"name":"john","age":22}'; //JSON String

// //before
// console.log(json)

// //converting to Javascript Object
// const obj = JSON.parse(json)
// //after 
// console.log(obj)


// const jsonData = {name:"John",age:22};
// console.log(jsonData)


// //convert in JSON
// const obj = JSON.stringify(jsonData);
// console.log(obj)



const objData = {
    name:"John",
    age:22,
    func: function(){
      console.log("hello world")
    }
  }
  
  console.log(objData.func())
  
  //convert object to JSON string
  
  const jsonData = JSON.stringify(objData)
  console.log(typeof(jsonData))
  console.log(jsonData)
  