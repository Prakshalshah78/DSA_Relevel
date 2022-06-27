function MergeSort(arr,start,end){
    if(start>=end) return;

    let mid = parseInt((start+end)/2);
    MergeSort(arr,start,mid);
    MergeSort(arr,mid+1,end);
    merge(arr,start,mid,end);
}

function merge(arr,start,mid,end){
    let m1 = mid - start + 1;
    let m2 = end - mid;

    let a1 = new Array(m1);
    let a2 = new Array(m2);

    for(let i = 0;i<m1;i++){
        a1[i] = arr[start + i];
    }
    for(let j = 0;j<m2;j++){
        a2[j] = arr[mid+1+j];
    }

    let p1 = 0; //a1
    let p2 = 0; //a2
    let k = start; //res
    while(p1 < a1.length && p2 < a2.length){
        if(a1[p1] < a2[p2]){
            arr[k] = a1[p1];
            p1++;
            k++;
        }
        else{
            arr[k] = a2[p2];
            p2++;
            k++;
        }
    }

    if(p1 == a1.length){
        while(p2 != a2.length){
            arr[k] = a2[p2];
            k++;
            p2++;
        }
    }
    if(p2 == a2.length){
        while(p1 != a1.length){
            arr[k] = a1[p1];
            k++;
            p1++;
        }
    }
    return arr;
}

let arr = [14,33,27,10,35,19,42,44];
MergeSort(arr,0,7)
console.log(arr)