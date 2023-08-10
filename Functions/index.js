// 1)function statement or function Declaration 

// function define with function keyword and name, parenthisis()
function greet(){         
  console.log("welcome")
}

greet(); // function call or invoke - it will execute the code inside the function 

// prints welcome



// 2) parameters vs arguments 

function a(name){             // lables or identifiers are parameters 
  console.log(`welcome"${name}"`)
}

a("siva");  // values passed inside the function call called arguments 


// 3)Function Expression 

// Assigning a function to a variable . function acts like a value

var greet= function(){
  console.log("Hi every one")
}

greet();
// prints hi every one


// 4)difference between function Statement and function Expression 

// Main difference lies in Hoisting 

greet(); 
greet1();

function greet(){         
  console.log("welcome")
}


var greet1= function(){
  console.log("Hi every one")
}

// greet() prints welcome
//  greet1() prints  index.js:27 Uncaught TypeError: greet1 is not a function

/*
in memory creation phase it creates the memory for variables and functions (names)

when memory creation face greet created in memory and function assigned to greet .
but in greet1 its acts like a variable (greet1:undefined) it stores in memory like that . when code execution phase it touches the greet1 function it cant called. its still undefined  

index.js:27 Uncaught TypeError: greet1 is not a function */



// 5) Anonyms functions 

// Function without a name called anonyms function it throws an syntax error 
// vales insdie this function will not give the result 
// we can use anonyms function in function expressions 

// function(){
//   console.log("sivakumar")
// }

//Uncaught SyntaxError: Function statements require a function name (at index.js:52:1)




// 6)Named Function expression 

// its like a function expression but it has a name 

var b= function xyz(){
  console.log("b called ")
}

 xyz() /* index.js:77 Uncaught ReferenceError: xyz is not defined
at index.js:77:1

xyz not not created in golable scope so we cant called */



// 7) First class function or first class citzens 

// pass a functions inside a function as a arguments and return a function all together known as first class function or first class citizens 

// passing a function or function name 


function name1(par1){
 console.log(par1)
}


function abc(){
  console.log("welcome ot india ")
}

// name1(abc); or '

 name1(function abc(){
  console.log("welcome ot india ")
})


// return a function 
// return a function from a function 

var xy= function (){

  return function abcd(){

  }
}

console.log(xy);



// 8) Arrow function 

// syntax 
//arrow function expression is a compact alternative to a traditional function expression,
//let myFunctionName = (a, b) => a * b;


// normal function expression 

let total = function(sum){
  console.log(sum)
}

// arrow function 
 let d=(value)=>{
  console.log(value)
 }

d(10);
total(10)








