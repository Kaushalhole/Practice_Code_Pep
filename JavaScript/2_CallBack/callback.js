// Call back function --> Any function that is passed as an argument to another function as callback function

//------------------------------------------------------------------------------------

// function PrintFirstName(firstName, callbackFunction,age){
//     console.log(firstName)
//     callbackFunction('Taneja')
//     age(20)
// }

// function PrintSecondName(lastName){
//     console.log(lastName)
// }

// function PrintAge(age){
//     console.log(age)
// }

// PrintFirstName('Gaurav' , PrintSecondName , PrintAge)
// // PrintSecondName('Taneja')

//------------------------------------------------------------------------------------

//Create calculater with callback function - addition, subtraction, divison, multiplication

function calculator(addition,subtraction,multiplication,divison){
    addition(10,20)
    subtraction(20,5)
    multiplication(2,4)
    divison(10,2)
}

function add(a,b){
    console.log(a+b)
}

function sub(a,b){
    console.log(a-b)
}

function multi(a,b){
    console.log(a*b)
}

function div(a,b){
    console.log(a/b)
}

calculator(add, sub, multi, div)

//------------------------------------------------------------------------------------
