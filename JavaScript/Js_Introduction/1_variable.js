// // Variable  Declaration   (Dont need type specification)

// // Var, let, const

// var a; // variable will always be initialized with an undefined value  (Right click on file and run it)
// console.log(a);//undefined

// // Javascript is dynamically typed language (do not need to asign data type)
// a = 3;
// console.log(a);//defined (prints 3)

// a = "I am string"; //print I am String
// console.log(a);

// a = true;
// console.log(a); //this will print true 

// a = null;
// console.log(a); //this will print null

//-------------------------------

// // Datatypes in Javascript --> 1)Number 2)String 3)Boolean 4)Null 5)Undefined

// //Number
// var b = 3
// var c = 3.4
// var d = 20.45455

// console.log(b)
// console.log(c)
// console.log(d)

// //String

// var s ="a"
// var s2 = "I am String"

// console.log(s)
// console.log(s2)

// //Boolean

// var t = true
// var f = false

// console.log(t)
// console.log(f)

// //Undefined

// var u;
// console.log(u)

// //Null

// var b = null
// console.log(b);

//-------------------------------

// // Var keyword has some problems

//-------------------------------

// //1)Redeclaration

// var a = "Hello"; 
// console.log(a);    //Prints hello

// var a = 3;
// console.log(a);     //Prints 3

// Overcomming redeclaration problem (using let keyword)

// let b = "Hello";
// console.log(b)   //Prints hello

// let b ="Bye"
// console.log(b) // Error : b is already been declared (Redeclaration Error)

//-------------------------------


//Loops

// For loop

// Is prime (prime --> number divided by 1 and itself)

//-------------------------------

// var flag = true

// var num = 4

// for (var i = 2 ; i*i<=num ; i++ ){
//     if(num%i == 0){
//         flag = false
//         break
//     }
// }

// if(flag == true){
//     console.log("Prime number");
// }
// else{
//     console.log("Not a prime number");
// }

//-------------------------------



//Second problem with var --> Scoping

//-------------------------------

// Scope of 'a' should be only in if block. we should not beable to access it outside the if block
// We can overcome this problem with let keyword

// 1) Redeclaration and 2) Scoping are two problems with var keyword

// let is blocked scoped 
// var is function scoped
//-------------------------------
// if(10%2==0){
//     var a = "Number is divided";
//     console.log(a)
// }

// console.log(a)

//-------------------------------

// const keyword

// const a = 2;

// const a = 6; //Redeclaration not allowed

// a = "Hello" //Reassigning not allowed 

//-------------------------------



if(10%2==0){
    let a = "Number is divided";
    console.log("Inside the loop",a)
}
let a = 5
console.log("Outside the loop",a)