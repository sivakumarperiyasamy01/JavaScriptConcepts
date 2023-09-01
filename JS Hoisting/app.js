// Hositing

// Hoisting is where we can extract values of variables and functions even before initialization. it happens due to memory creation phase 

// exampls 

// it will create memory for all variable and functinos 

// then go for executing all code in synchoronus single threaded order

greet();  

console.log(a);

var a=10;

function greet(){
  let x =10
  console.log(x)
}


// var keyword using variables are hoisted with default value 
// using let and const we cant access before initialization 
// var ,let we can do reassignment. const will not allow for reassignment
