var n = 4;
var str = "";

for(row=1;row<=n;row++){
  for(star=1;star<=row;star++){
    str = str +"* ";
  }
  str = str + "\n"
  
  for(row=n-1;row>0;row--){
    for(star = 1;star<=row;star++){
        str = str +"* ";
  	}
    str = str + "\n";
	}
}
console.log(str)
    