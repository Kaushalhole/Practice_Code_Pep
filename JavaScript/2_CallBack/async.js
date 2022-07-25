const fs = require('fs')

//Syncronous 

// console.log("before")                                //Output --> before filedata after 

// let data = fs.readFileSync('file.txt')
// console.log("Data ---> "+data)

// console.log("after")

//------------------------------------------------------------------------------------

//Asyncronous

console.log("before")                                //callback function is executed at last

fs.readFile('file.txt',callback)

function callback(error, data){
    if(error){
        console.log(error)
    }
    else{
        console.log("Data -->\n "+data)
    }
    fs.readFile("file_1.txt",callback_1)
}



function callback_1(error, data_1){
    if(error){
        console.log(error)
    }
    else{
        console.log("Data --> \n"+data_1)
    }
    fs.readFile("file_2.txt",callback_2)
}



function callback_2(error, data_3){
    if(error){
        console.log(error)
    }
    else{
        console.log("Data --> \n"+data_3)
    }
}

console.log('After')

//------------------------------------------------------------------------------------

