let myArr = [1,2,3,4];
let mySet = new Set(myArr);
let a = [2,7,8,56,3,2,3];
let b = [5,5,6,6,];
mySet.add([...a,...b]);
console.log(mySet)