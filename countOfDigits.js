var num = 32;
var count =0;
var numOriginal = num;
var sum = 0; 
while(num!=0){
    num= parseInt(num/10);
    count++;
}
console.log(count);
num = numOriginal;
if(count>2){
    do{
        num = parseInt(num / 10);
        let lastDigit = num % 10;
        sum = sum + lastDigit;
    }
    while(parseInt(num/100)>0);
}
else{
    sum = -1;
}
console.log(sum);