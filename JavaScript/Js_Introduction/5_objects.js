// Javascript objects are always in key value pair

let obj = {} //This is how we declare object

//-----------------------------------------------------------------------------

let car = {
    name : 'Mustang',   //In javascript object are always in key : value pair
    brand : 'Ford',
    maxSpeed : '200km/hr',
    color : 'white',
    price : 7500000
}
//-----------------------------------------------------------------------------

//Captain america - Avengers

let cap = {
    firstName : 'Steve',
    lastName : 'Rogers',
    friends : ['Bucky','Natasha','Dr Banner'],  //We can store array in object (value for any key)
    age : 102,
    isAvenger : true,
    address : {                 //We can store one more object inside the object (value for the key)
        state : 'Manhattan',
        city : 'New York'
    },
    sayHi : function(){                         //We can also store function inside object
        console.log("Captain says hi...")
    }
}
//-----------------------------------------------------------------------------
// console.log(cap)
//-----------------------------------------------------------------------------
//Acessing element of the object

// 1) Dot Notation
// console.log(cap.firstName)
// console.log(cap.age)

// 2) Bracket Notation
// console.log(cap['firstName'])

//-----------------------------------------------------------------------------

// Accessing nested value ( object value inside the object)

// console.log(cap.address) //Key value
// console.log(cap.address.city)    //object value

// console.log("My best friend is :",cap.friends[0])    //array value

//cap.sayHi() //function value

//-----------------------------------------------------------------------------

// For in loop for objects
//for in loop automatically convert you key in string

// for(let key in cap){        //Dot Notation dont works with for in loop we need to use bracket Notation
//     console.log("key :",key ,"value :",cap[key])  //Pass key in bracket without " "
// }

//-----------------------------------------------------------------------------

//Changing the value in object

// cap.isAvenger = false;
// console.log(cap)

// cap.age = 200;
// console.log(cap)

//-----------------------------------------------------------------------------

//Adding key value pair to object

// cap.movies = ['FirstAvenger','CivilWar']
// console.log(cap)

//-----------------------------------------------------------------------------

//Delecting key value pair from object

// delete cap.friends
// console.log(cap)

//-----------------------------------------------------------------------------

//Changing value of array which is inside the array

cap.friends[1] = "thor"
console.log(cap)

//for object

cap.address.city = "Mumbai"
console.log(cap)

//for function

cap.sayHi = "Captain is angry"
console.log(cap)

//-----------------------------------------------------------------------------
