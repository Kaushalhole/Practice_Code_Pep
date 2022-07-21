// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders
//js mein input Array ke from mein jaata hai and that is array is process.argv Array



//importing required modules
const path = require('path')
const fs = require('fs')
const helpModule = require('../Commands/help')
const organizeModule = require('../Commands/organize')
const treeModule = require('../Commands/tree')


//Taking input from terminal in the form of array
let input = process.argv.slice(2)

// let inputArr = input         //This will also work
// let command = inputArr[0]

let command = input[0]
let direPath = input[1]



switch (command) {
    case 'tree':
        treeModule.treeFnKey(direPath)
        break;
    case 'organize':
        organizeModule.organizeFnKey(direPath)
        break;
    case 'help':
        helpModule.helpFnKey()
        break;
    default:
        console.log("Please enter valid command")
        break;
}












