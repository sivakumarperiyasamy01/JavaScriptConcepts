
// asynchronus and synchronous 

// Api 

console.log("hi")
setTimeout(function(){
  console.log("hello")
},0)

console.log("sivakumar")

// call back function called certain amount of time 


console.log("gowtham");

setTimeout(function(){
  console.log("Welcome to india")
},5000)

// call back function using foreach 

const names=["siva","gowtham","santhiya"]

names.forEach((name)=>{
  console.log(name)
})



// call back function using foreach 

const values=(name,call)=>{
      
    for(let i = 0; i < name.length; i++) {
      const element = name[i]
       call(element)
    }

}


values(names,(value)=>{
  console.log(value)
})





