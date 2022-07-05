function findTriplets(arr){
    let n = arr.length;
    for(let i = 0; i< n-1 ; i++){
        //let setArray = [];
        for(j= i+1; j<n;j++){
            let checkNo = -(arr[i]+arr[j]);
            if(arr.includes(checkNo)){
                console.log(checkNo,arr[i],arr[j]);
            }
           
        }
    }
}

findTriplets([1,-1,2,0,3,1,-2]);

// TC: O(n2)
// SC: O(n) => O(1)





//2, 3
//-5 =>


//            0  1 2 3 4 5  6
// i => 0 to n-2
// 0 1 2 3 4 5
// j => 1 to n-1
// 1 2 3 4 5 6
