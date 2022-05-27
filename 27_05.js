// //sparse matrix
// //travarse through 2D array and check for the element 

// //sparse matrix : 
// // total no of zeros = total no of elements /2

// //total no of elements = m*n
// //total no of zeros

// //if my element is 0 then maintain counter variable 
// let arr = [[0,1,0],
//            [5,0,0],
//            [1,0,1]
//           ] 
// let m = 3;
// let n = 3;
// let counter = 0;
// let totalNoOfElements = m*n

// for(i=0;i<m;i++){
//     for(j=0;j<n;j++){
//         if(arr[i][j]==0){
//           counter++;
//         }
//     }
// }

// (counter>=parseInt(totalNoOfElements/2)) ? console.log("Sparse Matrix") : console.log("Not a sparse Matrix")
  
//===========================-ve in left and +ve in right =================
/*
for every elem check it with pivot
elem<pivot => i++ => swap a[i] & a[j] && j++
elem>pivot => j++
*/
// 

function ReArrangeElements(arr){
    let pivot = 0;
    let i=-1;
    let j = 0;
    let len = arr.length;
      for(j=0;j<len;j++){
    if(arr[j]<pivot){
            i++;
          [arr[i],arr[j]]=[arr[j],arr[i]]
        }
      }
    return arr;
  }
  
  let arr = [3,-2,5,-4,1,6]
  console.log(ReArrangeElements(arr))

//========================Cyclic rotation=========================

//   let arr=[1,2,3,4]
//   //[4,1,2,3]
//   let len = arr.length;
//   let temp = arr[len-1]
//   for(let i =len-1;i>=1;i--){
//     arr[i]=arr[i-1]
//   }
//   arr[0]=temp;
//   console.log(arr)
  
  
// =====================LCS=========================
// function LCS(arr){
//     debugger;
//     let output=0;
//     let count=0;
//     let len= arr.length;
//     arr.sort(function(a,b){
//       return a-b;
//     })
    
//     let tempArray=[];
      
//     for(i=1;i<len;i++){
//       if(arr[i]!=arr[i-1]){
//         tempArray.push(arr[i-1])
//       }
//     }
    
//     for(i=0;i<tempArray.length;i++){
//       if(i>0&&tempArray[i]==tempArray[i-1]+1){
//         count++;
//       }
//       else{
//         count=1;
//       }
//       output=Math.max(output,count)
//       }
//     return output
//   }
//   var arr= [4,1,7,2,3,8]
//     //[1,2,3,4,7,8]
  
//   console.log("Length of common sequence is : "+LCS(arr))  