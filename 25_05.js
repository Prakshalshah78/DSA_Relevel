function checkReverse(arr){
    let len = arr.length;
    if(len==1)
      return true;
    
    //I will find upto which point my array is incrementing values
    
    for(i=1;i<len&&arr[i]>arr[i-1];i++);
    //you have traversed through entire element of array or not 
    if(i==len)
      return true;
  console.log(i)
    //i will find upto which point my array is decrementing values
    let j =i;
    while(j<len&&arr[j]<arr[j-1]){
      if(i>1&&arr[j]<arr[i-2])
        return false;
      j++
    }
    if(j==len)
      return true;
    console.log(j)
    
    let k = j;
    if(arr[k]<arr[i-1])
      return false;
    while(k>1&&k<len){
      if(arr[k]<arr[k-1]){
        return false;
      }
      k++;
    }
    return true;
  }
  //[1,7,2,5,4,3]
  let arr = [1,2,3,4,20,9,8,45]
  //				 0 1 2 3 4 5
  checkReverse(arr)?console.log("yes"):console.log("no")