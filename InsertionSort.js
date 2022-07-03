function insertionSort(arr){
    let n = arr.length; //length of an array
    for(let i=1;i<n;i++){ 
        // the ele which is picked from the unsorted region and needs to be placed at its right position in sorted region
        let ele = arr[i]; // if your current elem is at ith index  the sorted region sorts i - 1 index
        let j = i - 1;
        
        while(j >= 0 && ele < arr[j]){
            //shifting process
            arr[j + 1] = arr[j];
            j--; // check for the another elem if present 
        }
        //place at the elem at its right index 
        arr[j+1] = ele;
    }
    return arr;
}

console.log(insertionSort([5,4,2,1,6]));