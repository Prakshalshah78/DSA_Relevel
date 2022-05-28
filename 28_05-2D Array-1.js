const studentNaina = {
    firstName:'Naina',
    age:32,
    occupation:'Student'
  };
  
  const studentHariharan={
    firstName:'Hariharan',
    age:28,
    occupation:'Software Engineer'
  };
  
  const studentDipanshu={
    firstName:'Dipanshu',
    age:25,
    occupation:'Software Engineer'
  };
  
  const studentDatabase=[studentNaina,studentHariharan,studentDipanshu]
  
  studentDatabase.push({
    firstName:'Suroj',
    age:22,
    occupation:'Student'
  })
  
  for(let i=0;i<studentDatabase.length;i++){ //console.log(studentDatabase[i].firstName	)
  }
  
  //console.log(studentDatabase	)
  //Array of Objects
  
  const nainaInfo=['Naina',28,'Student'];
  const dipanshuInfo=['Dipanshu',25,'Software Engineer'];
  const surojInfo=['Suroj',21,'Software Engineer'];
  
  const studentsInfo = [nainaInfo,dipanshuInfo,surojInfo]
  
  for(let i=0;i<studentsInfo.length;i++){
    //console.log(studentsInfo[i][0])
  }
  
  //console.log(studentsInfo)
  //Array of Arrays => 2D array
  
  
  //2D array
  
  const students = 
  [
    /*0th index of an outer array*/
    ['Naina',28,'Student'],
    //0      1     2
    /*1st index of an outer array*/
    ['Dipanshu',25,'Software Engineer'],
    /*2nd index of an outer array*/
    ['Suroj',21,'Software Engineer']
  ]
  //2D arrays travarsal 
  for(let i=0;i<students.length;i++){
    for(let j=0;j<students[i].length;j++){
      console.log(students[i][j])
    }
  }
  
  
//=============================Wave Matrix=============================
function waveMatrix(mat){
    for(let i=0;i<mat[0].length;i++){
      if(i%2==0){
        //top to down
        for (let j=0;j<mat.length;j++){
          console.log(mat[j][i])
        }
      }
      else{
        //bottom up
        for(let j=mat.length-1;j>=0;j--){
            console.log(mat[j][i])
        }
      }
    }
  }
  
  let mat=[[1,2,3],
          [4,5,6],
          [7,8,9]]
  
  waveMatrix(mat)
  
  //Transpose matrix

  const arr=[[1,1,1,4],
           [2,2,2,4],
           [3,3,3,4]] 
//3*4
//4*3
[
  [],
  [],
  [],
  []
]

var output = [...Array(arr[0].length)].map(e=>Array(arr.length))

for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr[0].length;j++){
    output[j][i]=arr[i][j]
  }
}
console.log(output)

//Multiplication

let one = [
    [1,2,3],
    [4,5,6]
  ]
  //2*3
  //1*1+4*2
  let two=[
                [1,2],
          [3,4],
          [5,6]
  ]
  //3*2
  
  let r1= one.length;
  let c1=one[0].length;
  let r2= two.length;
  let c2=two[0].length;
  
  let res = [...Array(r1)].map(e=>Array(c2));
  
  for(let i=0;i<res.length;i++){
    for(let j=0;j<res[0].length;j++){
              let sum =0;
      for (let k=0;k<c1;k++){
        let val =one[i][k]*two[k][j];
        sum+=val
        
      }
      res[i][j]=sum
    }
     
  }
  
  console.log(res)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  