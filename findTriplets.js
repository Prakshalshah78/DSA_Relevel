let arr =[1,-1,2,0,3,-2];

function findTriplets(arr){
    for(let i =0;i< arr.length - 2 ;i++){
        for(j= i + 1; j < arr.length-1;j++){
            for(let k = j + 1; k < arr.length;k++){
                if(arr[i] + arr[j] + arr[k] == 0){
                    console.log(arr[i],arr[j],arr[k]);
                }
            }
        }
    }
}

findTriplets(arr);

//TC :- O(n3)
//SC :- O(1)
//O(n)


/*
[1,-1,2,0,3,-2]
        i
          j
             k

*/
// 1 -1 2