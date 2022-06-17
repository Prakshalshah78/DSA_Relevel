function combinationSum(arr,sum){
    let ans = new Array();
    let temp = new Array();
    arr.sort();
    getNumbers(ans,arr,sum,0,temp)  
    return ans;
  }
  
  function getNumbers(ans,arr,sum,index,temp){
    if(sum==0){
      ans.push([...temp]);
      return;
    }
    for(let i=index;i<arr.length;i++){
       if ((sum - arr[i]) >= 0) {
              temp.push(arr[i]);
              getNumbers(ans, arr, sum - arr[i], i, temp);
              temp.splice(temp.indexOf(arr[i]), 1);
          }
    }
    return temp;
  }
  
  let sum =7;
  let ans = combinationSum([2,3,5,7],sum);
  console.log(ans)
  
  
  
  function getNotes(amount){
    let availableNotes=[2000,500,200,100,50,20,10,5,1];
    let counter = Array(9).fill(0);
    for(let i=0;i<availableNotes.length;i++){
      if(amount>=availableNotes[i]){
        counter[i]=  Math.floor(amount/availableNotes[i]);
        amount = amount - counter[i]*availableNotes[i];
      }
    }
    
    console.log("counter",counter)
    
    //print the ans
    for(i=0;i<availableNotes.length;i++){
      console.log(availableNotes[i],counter[i]);
    }
  }
  
  let amount = 868;
  getNotes(amount)