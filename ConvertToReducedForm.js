function ConvertToReduce(arr){
    //copy original array to temp
    let temp = [...arr];

    //sort array
    temp.sort((a,b)=>a-b);

    //create empty map
    let convertMap = new Map();

    let counter = 0;

    //travarse through map and store the mapping number and values 
    for(let i = 0; i < arr.length; i++){
        convertMap.set(temp[i], counter++);
    }

    //travarse through my map and store value to corresponds to original array element
    for(let i = 0; i < arr.length ; i++){
        arr[i] = convertMap.get(arr[i]);
    }
}

let arr = [1,2,5,10,3,4]
ConvertToReduce(arr);
console.log(arr)