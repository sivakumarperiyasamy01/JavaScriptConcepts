   // call back function 

   const evennum=(result, failure)=>{
         
      const random= Math.floor(Math.random()*10)

          let num=3;

          if(random%2==0){
            result("even number")

          }else{
            failure("odd number")
          }


   }
   
   evennum(even,odd)
   
   
   function even(message){
    console.log(message)
   }

   function odd(oddmessage){
    console.log(oddmessage)
   }
   
   


   // above call back function write it using promises 
   // promises as also same like call back function its only difference is in calling a function . if result is success we will call success function or failure function.

  // function need to be defined before calling . when plan to calling


const numbers= new Promise((resolve, reject) => {
          
  let array=[7,9,5,8]

  for (let i = 0; i < array.length; i++) {
      const element = array[i];
    if(element>6){
       resolve("well done")
    }else{
       reject("its ok ")
    }
     }
  })

numbers.then((message1)=>{
    console.log(message1)
}).catch((message2)=>{
    console.log(message2)
})



// promises. all 

// promise. race

const greet1=new Promise((resolve, reject) => {
  resolve("hi everyone")
})
const greet2=new Promise((resolve, reject) => {
    resolve("welcome")
})
const greet3=new Promise((resolve, reject) => {
    resolve("welcome all ")
})


// it wont wait for another two promises to run it will give result as soon as first one run 
Promise.race([greet1,greet2,greet3])
.then((mes)=>{
  console.log(mes)
})


// it will run all promises and give result . if first one takes to much time it wont wait for first one to execute it will execute another two things 

Promise.all([greet1,greet2,greet3])
.then((mes)=>{
  console.log(mes)
})


// await and async