// let friend1 = 'Deepa';
// let friend2 = 'Naina';
// let friend3 = 'Dipanshu';
// let friend4 = 'Sakib';
// let friend5 = 'Himanshu';
// let friend6 = 'Jasleen';
// let friend7 = 'Navneet';
// let friend8 = 'Nishant';

// let friendArray = ['Deepa','Naina','Dipanshu','Sakib','Nishant'];
//                     //0        1        2          3       4
// // console.log(friendArray.length); //5
// //arrayname[index]
// for(var i=0; i < friendArray.length;i++){
//     console.log(greet(friendArray[i]))
// }

// function greet(friendName){
//     let msg = `Hey, ${friendName} today is my birthday
//     you are invited`;
//     return msg;
// }

// console.log(greet(friend1))
// console.log(greet(friend2))
// console.log(greet(friend3))


/////////// DECLARING AN ARRAY =============

// 1. Literal way 

// var arrName = [1,2,"hi"];
// console.log(arrName);

// // 2. Using new keyword // Constructral declaration
// var newArray = new Array(4,5);
// console.log(arrName[1] / newArray[1]);

//single dimension array
// var arr = [19,23,42,21];
//     //      0  1  2  3
// console.log(arr[2])
// //multidimension array
// var arr1 = [["hi","Nilanjan"], [12,"ipsum",{"name":"Parag"}]]
// //         //        0                        1
// //             // 0      1          0   1           2

// for(i=0; i<arr1.length; i++)
// { 
//     var innerElem = arr1[0];
//     for(inner=0;inner<innerElem.length;inner++){
//         console.log(arr1[i][inner])
//     }
// }


//=============================Object ==============================

// Declaration 

//Type 1: Literal way 
//keys and values
var pen = {
    "make": "Parker",
    "cost": "500"
}
console.log(pen)
//Type 2 : Object create method

var penCopy = Object.create(pen)
console.log(penCopy)