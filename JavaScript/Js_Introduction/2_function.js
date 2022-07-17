// Normal function

//we write function so that we can reuse code

//-------------------------------------------------------------

// function SayHi(){                //Syntax to write function

// }

// SayHi()                          //Function calling or invocation

//-------------------------------------------------------------

// function Say(){
//     console.log("Hi")
// }

// Say()

//-------------------------------------------------------------

//Parameters in function

// function add(a,b){
//     console.log("The addintion is",a+b)
// }

//Argumnet passing will calling function

// add(5,5)

//-------------------------------------------------------------

// function arithematic_operation(a,b){
//     console.log("Addition is :",a+b)
//     console.log("Multiplication is :",a*b)
//     console.log("division is :",a/b)
//     console.log("Subtration is :",a-b)
// }

// arithematic_operation(2,6)

//-------------------------------------------------------------

//Function are threated as first class citizen in javascript

// let SayHi = function(){             //Anonymous function
//     console.log("Hi please come here")
// } //Function Expression 

// let add = function(a,b){
//     console.log(a+b)
// }

// SayHi()
// add(2,2)

//-------------------------------------------------------------


//IIFE (Immediately invoked function Expression)

//  let subtract = (function(a,b){ //Used only ones 
//     console.log(a-b)
//  })(30,20)

//-------------------------------------------------------------

//Return value from the function 

// function sayhi(){
//     let value = "hi"
//     return value
// }

// var answerFormTheFunction = sayhi()
// console.log(answerFormTheFunction)

//-------------------------------------------------------------