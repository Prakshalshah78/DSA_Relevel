// Problem statement = 

// given an object 

// Input 

// arr=[
//     {'name':'Ram','salary':100000},
//     {'name':'Ramesh','salary':10000},
//     {'name':'Rakesh','salary':500000},
//     {'name':'Rithik','salary':650000},
//     {'name':'John','salary':45000},
//     {'name':'Deepak','salary':230000}
//     ]

// O/P: Second largest salary holder 

// Rakesh

// 2nd largest => 

//kth largest 

// n-2

let arr=[{'name':'Ram','salary':100000},{'name':'Ramesh','salary':10000},{'name':'Rakesh','salary':500000},{'name':'Riya','salary':650000},{'name':'Rithik','salary':45000},{'name':'Ritesh','salary':230000}];
function bubbleSort(arr){
    let n = arr.length; // 5
    for(let i=0;i<n-1;i++){ 
        var isswapped = false;
        for(let j = 0;j < n-1-i;j++){ 
            if(arr[j].salary > arr[j+1].salary){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                isswapped=true;
            }
        }
        if(!isswapped){
            break;
        }
    }
    return arr;
}

let res = bubbleSort(arr);
let k = 2;
console.log(res[res.length-k].name)
