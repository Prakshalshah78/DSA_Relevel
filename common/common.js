// 0 1 1 2 3 5 8 13

//fib(num) = fib(num=1)+ fib(num-2)
//0 1 1 2 3 5 8 13 21.....

//0 1 2 3

//#############FIBONACI##############
// function fibSeries(num){
//     if(num<=1){
//         return num;
//     }
//     else{
//         //logic
//         //var ans = fibSeries(num-1)+ fibSeries(num-2)
//         return fibSeries(num-1)+ fibSeries(num-2);
//     }
// }

// console.log(fibSeries(9))
//#############FIBONACI##############


/*

Logic : no of row = no of col = no of stars

1 ****
2 ****
3 ****
4 ****

*/
//#############Square##############
// var n = 7;
// var output="";
// //outer loop
// for(row = 1; row<=n; row++){
//     for(col=1; col<=n;col++){
//         output=output+"*";
//     }
//     output=output+"\n";
// }
// console.log(output);
//#############Square##############

//Logic : Row 1 or 4 => Print entire stars
//        Col 1 or 4 => Print entire stars            

/*
    * * * *
    *     *
    *     *
    * * * *  
*/

var n =6;
var output="";
for(row=1;row<=n;row++){
    for(col=1;col<=n;col++){
        if(row==1||row==n){
            output=output+"* "
        }
        else{ // row 2 and 3
            if(col==1||col==n){
                output=output+"* "
            }
            else{
                output=output+"  "
            }
        }

    }
    output = output+"\n"
}
console.log(output)