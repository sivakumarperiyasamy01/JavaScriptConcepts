// lexcial Environment 
// global execution contact cant access local memory variable value 

// A function can access variable from global scope 
var b= 10;

function para1(){
      
      console.log(b);

}

para1();


// Even function nested deep can access a variable value in global scope 
function para1(){

  function para2(){
    console.log(b);
  }
   
para2();

}

para1();



// function will give first prefrence to local memory it checks first then move to lexical parent then it check in global scope is called scope chain 

function para1(){

  function para2(){
    var b=100;
    console.log(b);
  }
   
para2();

}

para1();



//  closures 

function a(){
  var b= 10;
  var a =15;
  
  function x(){
    console.log(a);
  }
  
  function y(){
    console.log(b);
  }
  
  return y
}


var total =a()

total();


