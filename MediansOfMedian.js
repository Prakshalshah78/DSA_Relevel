function QuickSelect_median(arr){
   const length = arr.length; //5
   const halfLength = parseInt(length/2);//2
   //odd
   if(length % 2!=0)
      return QuickSelect(arr,halfLength);
   else
      return (QuickSelect(arr, halfLength-1)+ QuickSelect(arr, halfLength))/2;
}
function QuickSelect(arr, k){ //k=1 //5 4
   if(arr.length == 1)
      return arr[0];
   else{
      const pivot = arr[0];//5
      const lows = arr.filter((e)=>e<pivot); //4
      const highs = arr.filter((e)=>e>pivot);//0

      if(k < lows.length){ //2<0
         return QuickSelect(lows, k);
      }

      else if(k < lows.length + 1){1<2
         return pivot;
      }

      else{
         return QuickSelect(highs, k-lows.length-1)
      }
   }
}
console.log(QuickSelect_median([7,3,5,4,10]));
//0,1,2,3,4

/*
7 3 5 4 10
0 1 2 3 4
k=2
7
3 5 4
1 2 3
3
?
5 4
2 3 
2 - 0 - 1

3 
1
2


*/