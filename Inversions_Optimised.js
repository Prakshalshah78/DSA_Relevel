let inv = 0;

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
            //a1[p1]>a2[p2]
            arr[k] = a2[p2];
            p2++;
            k++;
            if(a1[p1]>2*a2[p2])
                inv+=(m1-p1); //*
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
    return inv;
}

let arr = [3,5,6,9,1,2,7,8];
MergeSort(arr,0,7)
console.log(arr)