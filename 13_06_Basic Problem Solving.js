//#################################### Fibonacci 1 ################################
function fibo(n){
  
    //base case
    if(n==0 || n==1)
      return n;
    
    let res1 = fibo(n-1); //recursive call
    let res2 = fibo(n-2); //recursive call
    
    let res = res1+res2; //self work
    return res;
  }
  
  console.log(fibo(5))

//#################################### Fibonacci Series #############################
  function fibo(n){
  
    //base case
    if(n==0 || n==1)
      return n;
    
    let res1 = fibo(n-1); //recursive call
    let res2 = fibo(n-2); //recursive call
    
    let res = res1+res2; //self work
    return res;
  }
  
for(i=0;i<=5;i++){
  console.log(fibo(i))
}


//######################### Array is sorted or not ############################
debugger;
function isSorted(arr,i){
  //base case
  if(i == arr.length-1){
    return true;
  }
  
  //recursive call
  let val = isSorted(arr,i+1);
  
  //self work
  if(val && arr[i]<arr[i+1]){
  	return true;    
  }
  else{
    return false;
  }
}

console.log(isSorted([1,2,3,4,5],0))

//[1,2,3,4,5]

// ############ Subsequences ################


1

function PrintSubsequences(arr,index){

2

  

3

  //base case

4

  //[3] => 1. self element 2. empty element

5

  if(index==arr.length-1){

6

    let res=[];

7

    res.push([arr[index]]);

8

    res.push([]);

9

    return res;

10

  }

11

  

12

  //Recursive call => [2,3]

13

 let subSequences = PrintSubsequences(arr,index+1)

14

 

15

 let sw = [];

16

 for(i=0;i<subSequences.length;i++){

17

   sw.push(subSequences[i]);

18

   let val = [...subSequences[i]];

19

   val.unshift(arr[index]);

20

   sw.push(val);

21

 }

22

  return sw;

23

}

24

console.log(PrintSubsequences([2,3],0))

25

​

function PrintSubsequences(arr,index){
  
    //base case
    //[3] => 1. self element 2. empty element
    if(index==arr.length-1){
      let res=[];
      res.push([arr[index]]);
      res.push([]);
      return res;
    }
    
    //Recursive call => [2,3]
   let subSequences = PrintSubsequences(arr,index+1)
   
   let sw = [];
   for(i=0;i<subSequences.length;i++){
     sw.push(subSequences[i]);
     let val = [...subSequences[i]];
     val.unshift(arr[index]);
     sw.push(val);
   }
    return sw;
  }
  console.log(PrintSubsequences([2,3],0))
  