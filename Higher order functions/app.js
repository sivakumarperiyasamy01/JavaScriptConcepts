
// HIGHER ORDER FUNCTIONS 

// Functions that take other functions as an argument or return functions as their values 

function xy(){
  
  console.log("hi welcome")
}

function x(para){
  para();

}
x(xy)



// lets try to calculate values of radius , circumfrence from this array then built new array with values  using higher order functions


const radius =[2,6,5,4,6,5,5,5]

const calcradius=function(radiusvalue){
   const output=[]

   for(i=0;i<radiusvalue.length;i++){
      output.push(Math.floor(Math.PI*radiusvalue[i]*radiusvalue[i]))

   }
   return output;

}

console.log(calcradius(radius))


// find circumference


const radius1 =[5,6,5,9,5,5,]

const calcradius1=function(radiusvalue1){
   const output=[]

   for(i=0;i<radiusvalue1.length;i++){
      output.push(Math.floor(2*Math.PI*radiusvalue1[i]))

     
   }
   return output;

}

console.log(calcradius(radius1))



// write in higher order function 

// write logic in separate function 


// calculate radius (logic)
const value=[5,9,8,7,3,1,4]

const sumradius=function(value){

      return Math.floor(Math.PI*value*value)


}

sumradius(value)


// calculate the circumference  (logic)

const cirucm=(value) => Math.floor(2 * Math.PI * value)

cirucm(value);



// insert a logic into the function then call 

var store= function(sumradius,value){

    const out=[];
    for(i=0;i<value.length;i++){
        out.push(sumradius(value[i]))

    }
    return out;

}

console.log(store(sumradius,value))
console.log(store(cirucm,value))




// Map , Filter , Reduce array methods 

// array map method

   // convert this array to multiples of new array
   // convert tripple the value of new array
 
// map mehod convert the requireemnts then give it us as a new array 
const array=[4,7,8,6,3]

const newarray= array.map((value)=>{
   return value*2
})
console.log(newarray);


const triplevalue=array.map((x)=>{
   return x*3
})

console.log(triplevalue);


// array filter method

// filter function is used ot filter the requirements

const number=[6,9,5,4]

const totalEven=number.filter((number)=>{
   return number%2==0
})


console.log(totalEven)


const greaterThan=number.filter((x)=>{

   return x>8

})

console.log(greaterThan)


// array reduce method

const newarray1=[5,9,8,7,8]

// traditoional way 

const findSum=(newarray1)=>{
   let sum=0;

   for(let i=0; i<newarray1.length;i++){
        sum= sum + newarray1[i];

   }
      return sum;
}

console.log(findSum(newarray1))


// using reduce method 

const sum =newarray1.reduce((acc,curr)=>{
      acc=acc+curr

      return acc;
},0)

console.log(sum)



// find max value using reduce 

// traditional way 

const num=[2,1,7,9,3,6];


const newNum=function(num){
      let accumlate=0;

      for(i=0; i<num.length;i++){

        (num[i]>accumlate?accumlate=num[i]:null)
      
   }
      return accumlate;

}

console.log(newNum(num))


// using reduce method 

const sumofvalue=num.reduce((acc,curr)=>{
       
   if(curr>acc){
      acc=curr
   }
      return acc

},0)

console.log(sumofvalue)



// tricky map 

const objarray=[

   {
      firstName:"siva",
       LastName:"kumar",
       age:26
   },

   {
      firstName:"santhiya",
      LastName:"p",
       age:19
   },

   {
      firstName:"gowtham",
       LastName:"p",
       age:25
   },

   {
      firstName:"saraswathy",
       LastName:"p",
       age:59
   },
   {
      firstName:"periyasamy",
       LastName:"m",
       age:68
   }
]

// list all full name 

const fullName= objarray.map((z)=>{
 const fullname= z.firstName+ " " +z.LastName;
 return fullname

}
)

console.log(fullName)


// function chaining 

// findout different ages in this array and findout the same ages count , how many people with same age 

// fist name of all the people whose age is below 30 using filter method 

// fist filter object where the age is below 30 

// finaly we need to get ["gowtham","santhiya ","periyasamy"]

// if you are using {} need to write return 

const output= objarray.filter((x)=>
x.age<30
).map((x)=>
   x.firstName
)


console.log(output)


// using reduce method 

const ouput1=objarray.reduce((acc,curr)=>{

   if(curr.age<30){
      acc.push(curr.firstName)
   }

   return acc

},[])

console.log(ouput1)