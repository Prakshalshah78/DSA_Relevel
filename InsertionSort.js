function insertionSort(arr){
    let n = arr.length;
    for(let i=1;i<n;i++){
        let ele = arr[i];
        let j = i - 1;
        while(j >= 0 && ele < arr[j]){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j+1] = ele;
    }
    return arr;
}

console.log(insertionSort([5,4,2,1,6]));