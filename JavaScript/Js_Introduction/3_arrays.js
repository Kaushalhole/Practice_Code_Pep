//Arrays : Array provides you an ordered collection of Elements

//-------------------------------------------------------------

//let arr = []    //Declaration of array

//-------------------------------------------------------------

//let cars = ['BMW','Mustang','Mercedes']
//console.log(cars)

// let arr = ['Mustang',1,200,30,'BMW']     //In Javascript you can store different values of different datatypes
// console.log(arr)

//-------------------------------------------------------------

let cars = ['BMW','Mustang','Mercedes','Ferrari']

//-------------------------------------------------------------

//Accessing the elements of the array

// console.log(cars[2]) //Mercedes
// console.log(cars[0]) //BMW
// console.log(cars[1]) //Mustang
// console.log(cars[3]) //Ferrari

//-------------------------------------------------------------

//Replacing element in an array

cars[3] = 'Jaguar'

//-------------------------------------------------------------

//Add element in the array

// cars[4] = 'Bentley'

// cars[10] = 'Porsche'    // the empty place from 5 to 9 have undefinned value

// cars[6] = 'Rolls-Royes'

//-------------------------------------------------------------

//Array Methods

//-------------------------------------------------------------

// push and pop

// 1) Pop method - this method removes the last element of the array

// let removedElement = cars.pop()

// console.log(removedElement)

//-------------------------------------------------------------

// 2) push method - this element add element to the end of the array

// cars.push("Kawasaki")

//-------------------------------------------------------------

// shit and unshift

// 1) shit method - removes the element from the starting of the array

// cars.shift()

//-------------------------------------------------------------

// 2) unshift method - this adds element to the 0th index of the array

// cars.unshift("Kawasaki")

//-------------------------------------------------------------

// length property of array

// console.log(cars.length)

//-------------------------------------------------------------

// 2D Array

let matrix = [[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]] 
console.log(matrix)

console.log(matrix[1][1])
console.log(matrix[2][2])
              
