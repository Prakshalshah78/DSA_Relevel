function partition(arr, low, high){
    let pivot = arr[high];
    let i = low - 1;
    for(let j = low; j < high; j++){
        if(arr[j] < pivot){
            i++;
            [arr[j],arr[i]] = [arr[i], arr[j]];
        }
    }
    // put pivot element at the correct position
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function kthSmallest(arr,low,high,k){
    let pi = partition(arr,low,high);
    if(pi == k - 1){
        return arr[pi];
    }
    //which partition i need to call
    if(pi < k - 1){
        return kthSmallest(arr, pi + 1, high, k);
    }
    else{
        return kthSmallest(arr, low, pi - 1, k);
    }
}
let arr = [1 ,3, 2, 4, 8, 5];
console.log(arr)
console.log(kthSmallest([1 ,3, 2, 4, 8, 5], 0, arr.length-1, 6));
//[1 ,3, 2, 4, 8, 5]