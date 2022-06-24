function selectionSort(arr){
    let n = arr.length;
    for(i=0;i<n-1;i++){
        let minidx=i;
        for(j=i+1;j<n;j++){

            if(arr[j]<arr[minidx]){
                minidx=j;
            }

        }
        [arr[minidx],arr[i]]= [arr[i],arr[minidx]];
        console.log(arr)
    }
    return arr;
}

selectionSort([4,5,3,2,9])