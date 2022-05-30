// function checkDiagonal(mat){
//     for(let i=0;i<mat.length;i++){
//         for(let j=0;j<mat.length;j++){
//             if(i!=j&&mat[i][j]!=0){
//                 return false;
//             }
//         }
//     }
//   	return true;
// }

// let mat=[[1,0,0,0],
//          [0,2,0,0],
//          [0,0,0,0],
//          [0,0,0,0]]; 
//          //3*3
//          //4*4
// console.log(checkDiagonal(mat));


// //===========Sum of Column ==============
// let mat = [[1,2,3],
//            [2,3,4],
//            [5,6,7],
//            [9,4,8]]
// /*1-0,0
//   2-1,0
//   5-2,0
//   9-3,0
// */
// let row=mat.length;
// let col=mat[0].length;
// //4*3

// let col_sum=[];

// for(j=0;j<col;j++){
//   let sum=0;
//   for(i=0;i<row;i++){
//     sum+=mat[i][j]
//   }
//   col_sum.push(sum)
// }

// console.log(col_sum)


//==================Array Methods===============
arr=[1,2,3]
arr.push(4)
//adding in the last element
console.log(arr)
arr.pop()
//removing the last element
console.log(arr)
arr.unshift(4)
//add in the first element
console.log(arr)

arr.shift()
//removing the first element
console.log(arr)

//===============Lower triangle sum and upper triangle sum==============
function findTriangleSum(mat){
    let i,j;
    let us=0;
    let ls=0;
    
    for(i=0;i<mat.length;i++){
      for(j=0;j<mat[0].length;j++){
        if(i<=j){
          us+=mat[i][j]
        }
      }
    }
    console.log("Upper triangle sum is: "+us)
    
    for(i=0;i<mat.length;i++){
      for(j=0;j<mat[0].length;j++){
        if(j<=i){
          ls+=mat[i][j]
        }
      }
    }
    
    console.log("Lower triangle sum is: "+ls)
  }
  
  let mat=[[1,2,3],
           [4,5,6],
           [7,8,9]]
  
  findTriangleSum(mat)

  //===============Search Element in 2D============
  function searchElem(mat,target){
    let row=mat.length;
    let col= mat[0].length;
    let i=0;
    let j=col-1;
    while(i<row && j>=0){
      if(mat[i][j]==target){
        return true;
      }
      else{
        if(mat[i][j]<target){
          i+=1
        }
        else if(mat[i][j]>target){
          j-=1
        }
      }
    }
    return false;
  }
  
  let target = 80;
  let mat=[
                 [10,20,30,40],
           [11,21,36,43],
           [25,29,39,50],
           [50,60,70,80]
          ]
  searchElem(mat,target)
  
  
  //==========Unique elements

  function uniqueElements(mat){
    let max=0;
    let flag=0;
    
    //finding maximum element
    for(let i=0;i<mat.length;i++){
      for(j=0;j<mat[0].length;j++){
        if(mat[i][j]>max){
          max=mat[i][j]
        }
      }
    }
    
    //frequency of every elements
    let newArr = Array(max+1).fill(0);
    console.log("before",newArr)
    for(let i=0;i<mat.length;i++){
      for(j=0;j<mat[0].length;j++){
        newArr[mat[i][j]]++;
      }
    }
    console.log("after",newArr)
    //console every unique elements
    for(let i=0;i<=max;i++){
      if(newArr[i]==1){
        console.log(i+" ")
        flag=1;
      }
    }
    
    if(flag==0){
      console.log("no unique elem")
    }
  }
  //20
  //[0,1,2,0,0,2...]//20 length
  let mat=[
                  [11,2,2,20],
           [5,16,20,7],
           [1,13,5,16],
           [6,7,18,15]
                  ]
  
  uniqueElements(mat)
  
  
  
  