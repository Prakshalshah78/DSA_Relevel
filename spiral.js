let arr=[[1,2,3],
         [4,5,6],
         [7,8,9]];
let rowMin=0;
let rowMax=arr.length-1;
let colMin=0;
let colMax=arr[0].length-1;
let counter=0;
let nel=arr.length*arr[0].length;

while(counter<nel){
  
  for(let row= rowMin;counter<nel &&row<=rowMax;row++){
    console.log(arr[row][colMin]);
    counter++
  }
  colMin++;
  
  for(let col=colMin;counter<nel&&col<=colMax;col++){
    console.log(arr[rowMax][col])
    counter++
  }
  rowMax--;
  
  for(let row=rowMax;counter<nel&&row>=rowMin;row--){
    console.log(arr[row][colMax]);
    counter++
  }
  colMax--;
  
  for(col=colMax;counter<nel&&col>=colMin;col--){
    console.log(arr[rowMin][col]);
    counter++
  }
  rowMin++;  
}