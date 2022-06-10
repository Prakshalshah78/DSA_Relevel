//unique
function unique(arr){
  let ans = arr[0];
  for(let i=1;i<arr.length;i++){
    ans = ans ^arr[i];
  }
  return ans;
}

let arr = [3,2,"1",2,"3"]
//some elem ^ 0 
console.log(unique(arr))

//subArray
function subArray(n){
    for(i=0;i<n;i++){
      for(j=i;j<n;j++){
        for(k=i;k<=j;k++){
          console.log(arr[k])
        }
        console.log("\n")
      }
    }
  }
  arr=[1,2,3,4]
  subArray(arr.length)

//findIntersaction
  function findIntersaction(arr1,arr2){
    let i=0;j=0;
    while(i<arr1.length&&j<arr2.length){
      if(arr1[i]<arr2[j]){
        i++;
      }
      else if(arr2[j]<arr1[i]){
        j++
      }
      else{
        console.log(arr2[j])
        i++;
        j++;
      }
    }
  }
  
  let arr1=[1,2,3,3,4,5,6]
  let arr2=[3,3,6]
  
  findIntersaction(arr1,arr2)


//===Triplets=======
function findTriplets(arr,target){
  let l,r;
  arr.sort((a,b)=>a-b);
  for(let i=0;i<arr.length;i++){
    l=i+1;
    r=arr.length-1;
    while(l<r){
      if(arr[i]+arr[l]+arr[r]==target){
        console.log(arr[i],arr[l],arr[r])
        return true;
      }
      else if(arr[i]+arr[l]+arr[r]<target){
        l++;
      }
      else{
        r--;
      }
    }
  }
  return false;
}

let arr=[1,2,5,6,7,8,3]
findTriplets(arr,8)
//arr=[1,2,3,5,6,7,8]

VM36:10 1 2 5
true