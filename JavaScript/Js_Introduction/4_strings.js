//String is sequence of characters

//-----------------------------------------------------------------

let str = 'pepcoders'

// console.log(str)    //Prints pepcoders

//-----------------------------------------------------------------

// Length property

// console.log(str.length)

//-----------------------------------------------------------------

// String Methods -

//-----------------------------------------------------------------

// 1.Extration Methods ------>

        // 1) Slice method
        
        //slice(start index, end index + 1)

        // let slicestr = str.slice(3,7)
        // console.log(slicestr)

        // let pepstr = str.slice(0,3)
        // console.log(pepstr)

        // let count = str.slice(3)
        // console.log(count)


        // 2) substr  

        //substr(start index, lenght how much you want)
        //pepcoder ----> we want 'code'

        // let strl = str.substr(3,4)
        // console.log(strl)

//-----------------------------------------------------------------

// Replacing string content

// let sayhello = 'Hello Amit'
// console.log(sayhello)
// //replace
// let saybye = sayhello.replace('Hello', 'Bye')
// console.log(saybye)

//-----------------------------------------------------------------
//Uppercase and lowercase method

// let text1 = "Hello World"
// let text2 = text1.toLowerCase() //String fully Lowercase
// console.log(text2)

// let text3 = "Hello World"
// let text4 = text3.toUpperCase() //String fully Uppercase
// console.log(text4)

//-----------------------------------------------------------------

// String concatenation

// let FirstString = 'Hello'
// let SecondString = 'Friends'

// let concatinatedString = FirstString.concat(" " , SecondString)
// console.log(concatinatedString)

//-----------------------------------------------------------------

//Trim method is used to remove all whitspaces

let text = "                Hello Guys "
console.log(text)

let trimtxt = text.trim()
console.log(trimtxt)

//-----------------------------------------------------------------

