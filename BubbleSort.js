function bubbleSort(arr){
    let n = arr.length; // length of array
    for(let i=0;i<n-1;i++){  //n-1 iteratuion
        
        var isswapped = false;

        //comparing the adjacent elements 
        for(let j = 0;j < n-1-i;j++){ 
            
            //if current elem is smaller and elem bigger we do need to swap 
            if(arr[j] > arr[j+1]){
                //swap element at jth and j+1 index 
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