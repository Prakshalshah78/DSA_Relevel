function bubbleSort(arr){
    let n = arr.length; // 5
    for(let i=0;i<n-1;i++){ 
        let count = 0;
        var isswapped = false;
        for(let j = 0;j < n-1-i;j++){ 
            count++;
            if(arr[j] > arr[j+1]){
                //swap
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                isswapped=true;
            }
        }
        console.log(count)
        if(!isswapped){
            break;
        }
        console.log(arr)
    }
    return arr;
}

bubbleSort([5,1,4,2,8])