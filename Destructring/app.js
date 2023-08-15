// Array destructring

const names=["sivakumar","gowtham","santhiya","periyasamy","saraswathy"]


const numbers=[56,98,55,44,21]


// normal way of getting values from array 
// const values=names[0]

// console.log(values)


const[name1,,name2,...rest]=names

console.log(rest);


// concate two arrays 

const Newarray=names.concat(numbers)
console.log(Newarray)

const Newarray1=[...numbers,...names]
console.log(Newarray1)



// uses in functions 

function Secondaaray(a,b){

  return[a*b,a+b,a/b]
}

const values1=Secondaaray(2,6)

console.log(values1)


const [A,B,C]=Secondaaray(2,6)

console.log(A)
console.log(B)
console.log(C)




// Destructring of objects 

const person1={
  name:"sivakumar",
  age:26,
  city:kgm,
  address:{
    dist:tpr
  }

}
const person2={
  name:"Gowtham",
  age:25,
  city:kgm,
  address:{
    dist:tpr,
    area:agasthilingam
  }

}

