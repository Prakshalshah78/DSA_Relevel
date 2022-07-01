function QuickSort(arr, low, high){
    // base case
    if(low >= high){
        return;
    }

    let pi = partition(arr, low, high);
    QuickSort(arr, low, pi-1);
    QuickSort(arr, pi + 1, high);
}

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

let arr = [4,2,1,5,6,8];
QuickSort(arr,0,arr.length-1);
console.log(arr);


