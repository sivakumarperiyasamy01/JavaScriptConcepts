// call back function 

setTimeout(function greet(){
  console.log("Welcome")
}),5000

function name1(x){
  console.log("sivakumar");
  x();
}

name1(function name2(){
  console.log("gowtham")
})


// event listioner with clouser 

function xyz(){
let count=0;
document.getElementById("btn").addEventListener("click", function name3(){
  console.log("add to cart",++count)
})
}

xyz();