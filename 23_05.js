// //Find min and max values
// let inp = [3,1,31,6]
// //				 0 1 2  3
// function findMax(arr){
// 	let minAndMax = new Array();
//   let len = arr.length;
//   let itt=0;
//   if(len==1){ //arr is having 1 val
//     minAndMax.min=arr[0];
//     minAndMax.max=arr[0];
//     return minAndMax;
//   }
  
//   if(arr[0]>arr[1]){
//     minAndMax.min = arr[1];
//     minAndMax.max = arr[0];
//   }
//   else{
//     minAndMax.min = arr[0];
//     minAndMax.max = arr[1];
//   }
//   //more than 2 value
//   for(itt=2;itt<len;itt++){
//    	if(arr[itt]>minAndMax.max){
//       minAndMax.max=arr[itt]
//     }
//     else if(arr[itt]<minAndMax.min){
//       minAndMax.min = arr[itt]
//     }
//   }
//   return minAndMax;
// }

// let minAndMax=findMax(inp)
// console.log(minAndMax)




// let arr = [100,180,260,310,40,534,695]
// //   				0		1		2		3		4		5		6			
// function findProfit(arr){
//   debugger;
//   let len = arr.length;
//   let profit = 0;
//   for(day=1;day<len;day++){
//     if(arr[day]>arr[day-1]){ //180>100
//       profit = profit+ arr[day]-arr[day-1]
//     }
//   }
//   return profit;
// }

// let output = findProfit(arr)
// console.log(output)