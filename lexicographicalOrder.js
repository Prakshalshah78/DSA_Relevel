// Problem-1 

// Give an array of name of country, you are supposed to sort it in lexicographical order using the
// selection sort
// Input : [“India”,”Australia”,”China”,”Russia”,”Brazil”,”Japan”]
// Output: [”Australia”,”Brazil”,”China”,“India”,”Japan”,”Russia”]
// localeCompare()
//

let arr = ["India","Australia","China","Russia","Brazil","Japan"];
function selectionSort(arr){
    let n = arr.length;
    for(i=0;i<n-1;i++){
        let minidx=i;
        for(j=i+1;j<n;j++){
            if(arr[j].localeCompare(arr[minidx])==-1){
                minidx=j;
            }
        }
        [arr[minidx],arr[i]]= [arr[i],arr[minidx]];
    }
    return arr;
}

console.log(selectionSort(arr))