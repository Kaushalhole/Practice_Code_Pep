const fs = require("fs");

const path = require("path");

function treeFn(direPath) {

    //Check if the path is passed or not
    if (direPath == undefined) {
        console.log("Enter the Path to run the function")
        return
    }
    else {
        let doesExist = fs.existsSync(direPath)

        if (doesExist == true) { //If given path is true call the treeHelper function
            treeHelper(direPath, ' ')
        }
        else {
            console.log('Path you have passed does not exist')
        }
    }
}

function treeHelper(targetPath, indent) {

    let isFile = fs.lstatSync(targetPath).isFile() 

    if (isFile == true) {
        let fileName = path.basename(targetPath)
        console.log(indent + "├── " + fileName)
    }
    else{
        let folderName = path.basename(targetPath)
        console.log(indent+"└── "+folderName)

        let children = fs.readdirSync(targetPath)
        
        for(let i=0 ; i<children.length ; i++){
            let childPath = path.join(targetPath,children[i])
            treeHelper(childPath, indent + '\t')
        }
    }
}

module.exports = {
    treeFnKey: treeFn,
  }