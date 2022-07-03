function selectionSort(arr){
    let n = arr.length;

    //n-1 iteration
    for(i=0;i<n-1;i++){
        // index of min element 
        let minidx=i;
        console.log("arr[i]",arr[i])
        console.log("arr[minidx]",arr[minidx])
        for(j=i+1;j<n;j++){

            if(arr[j]<arr[minidx]){
                minidx=j;
            }

        }

        //swa[ minidx with current eleem]
        [arr[minidx],arr[i]]= [arr[i],arr[minidx]];
        //[arr[1],arr[2]] =  [arr[2],arr[1]] 
        console.log(arr)
    }
    return arr;
}

selectionSort([4,5,3,2,9])