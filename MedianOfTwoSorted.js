function MergeSortedArrays(a1,a2){
    //Create an array 
    let res = [];
    let p1 = 0; //a1
    let p2 = 0; //a2
    let k = 0; //res
    while(p1 < a1.length && p2 < a2.length){
        if(a1[p1] < a2[p2]){
            res.push(a1[p1]);
            p1++;
            k++;
        }
        else{
            res.push(a2[p2]);
            p2++;
            k++;
        }
    }
    if(p1 == a1.length){
        while(p2 != a2.length){
            res.push(a2[p2]);
            k++;
            p2++;
        }
    }
    if(p2 == a2.length){
        while(p1 != a1.length){
            res.push(a1[p1]);
            k++;
            p1++;
        }
    }
    return res;
}

let arr = MergeSortedArrays([2,4,5,6],[1,3,4]);
console.log(arr);
let med
let n = arr.length;
if(n % 2 == 0)
    med = (arr[n/2]+arr[(n/2)-1])/2;

else
    med = arr[parseInt(n/2)];

console.log(med)
