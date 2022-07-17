//File system module

//***** Files ******/

const fs = require('fs')

const path = require('path')

//---------------------------------------------------------------------------------------------------------------

// 1. We will be reading writing, updating and deleting in file

//Read a file
//You can use readFileSync method to read the file

// let content = fs.readFileSync("f1.txt")

// console.log(content) //you will get buffer string (so for output concatinate your data with other string)

// console.log("This is my file data -> "+content)

//---------------------------------------------------------------------------------------------------------------

//Write a file
//WritefileSync method is used to write yhe file

// fs.writeFileSync('fi.txt','This is new data') //File does not exist (so it create new file )

// fs.writeFileSync('f2.txt','This is constent')

//---------------------------------------------------------------------------------------------------------------

//Udate a file content

// fs.appendFileSync('f2.txt','More data is inserted in this file')


//---------------------------------------------------------------------------------------------------------------

//Delete a file

// fs.unlinkSync('fi.txt')

//---------------------------------------------------------------------------------------------------------------










//---------------------------------------------------------------------------------------------------------------

//****** Directories ******/

// Create , delete , check , stats , content

//---------------------------------------------------------------------------------------------------------------

//Creating directory

// fs.mkdirSync("My Folder")
// console.log("Folder created")
// fs.mkdirSync("/Users/kaushalhole/Pep-coding_DEV/JavaScript/Js_Introduction/Myfolder")

//---------------------------------------------------------------------------------------------------------------

//Deleting directory

// fs.rmdirSync("My Folder")
// fs.rmdirSync("/Users/kaushalhole/Pep-coding_DEV/JavaScript/Js_Introduction/Myfolder")


//---------------------------------------------------------------------------------------------------------------

// exists method lets you know file/folder exist or not. It reture true false value

// let doesfile = fs.existsSync("/Users/kaushalhole/Pep-coding_DEV/JavaScript/Js_Introduction")
// let does = fs.existsSync('1_cp.js')
// console.log(does) //We need to pass full path of the file
// console.log(doesfile)+


//--------------------------------------------------------------------------------------------------------------

// lstatSync - Status of dirsctory

// let stats = fs.lstatSync('/Users/kaushalhole/Pep-coding_DEV/JavaScript/NodeJS/f1.txt')
// console.log(stats)

// We can chech the thing we have passed is file of folder

// console.log("Is file ? -> ",stats.isFile())
// console.log("Is Directory ? -> ",stats.isDirectory())

//--------------------------------------------------------------------------------------------------------------

//readdirSync

//readdirSync is a method used to see content inside the directory

// let folder = "/Users/kaushalhole/Pep-coding_DEV/JavaScript/NodeJS/myfolder"

// let content = fs.readdirSync(folder)

// console.log("Folder contain -> "+content)

//--------------------------------------------------------------------------------------------------------------

//Copying file from srouce to destination

// let srcfile = "/Users/kaushalhole/Pep-coding_DEV/JavaScript/NodeJS/myfolder/1.txt"

// let destfile = "/Users/kaushalhole/Pep-coding_DEV/JavaScript/NodeJS/myfolder2"

// let srcname = path.basename(srcfile)
// // console.log(srcname)

// let destname = path.join(destfile, srcname)

// fs.copyFileSync(srcfile, destname)
// console.log("File copied")



