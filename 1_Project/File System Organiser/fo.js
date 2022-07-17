let input = process.argv.slice(2)

// let inputArr = input         //This will also work
//let command = inputArr[0]

let command = input[0] 
let direPath = input[1]

switch(command){
    case 'tree':
        console.log("Tree Implimented")
        break;
    case 'organize':
        organizeFn(direPath)
        break;
    case 'help':
        helpFn()            
        break;
    default:
        console.log("Please enter valid command")
        break;
}











//Help function will list all the ways by which you can run the commands of this project 
function helpFn(){
    console.log(`List of all the commands ->
                            1)Tree - node fo.js tree <directoryPath>
                            2)Organize - node fo.js organise <directoryPath>
                            3)Help - node fo.js help`)
}


 
//Organize function will organize all your target folder's files in a different folders according to their extensions
function organizeFn(direPath){
    const path = require('path')
    const fs = require('fs')

    if(direPath==undefined){
        console.log('Please enter a valid directory path')
        return;
    }//check whether directory path is passed or not and if not simply return

    let doesExist = fs.existsSync(direPath) 

    //the doesExist will tell path is valid or not (folder exists or not)

    if(doesExist==true){
         
        let destPath = path.join(direPath,'Organised_files')
        // we created path for organised_files folder 
        
        

        // check whether in the given destPath does a folder exist with same name if not it will make a folder
        if(fs.existsSync(destPath)==false){
            fs.mkdirSync(destPath)
        }
        else{
            console.log('Folder Already Exits')
        }
    }
    else{
        console.log('Path enter a vaild path')
    }
}

