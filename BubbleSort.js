function bubbleSort(arr){
    let n = arr.length; // 5
    for(let i=0;i<n-1;i++){ 
        var isswapped = false;
        for(let j = 0;j < n-1-i;j++){ 
            if(arr[j] > arr[j+1]){
                //swap
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                isswapped=true;
            }
        }
        if(!isswapped){
            break;
        }
        console.log(arr)
    }
    return arr;
}

bubbleSort([5,1,4,2,8])