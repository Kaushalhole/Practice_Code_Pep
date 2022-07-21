const path = require('path')
const fs = require('fs')

let types = {
    media: ["mp4", "mkv", "mp3", "mov", "wmv", "avi", "avchd"],
    images: ["jpeg", "jpg", "png", "gif", "tiff", "psd", "esp", "ai", "indd", "raw"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: [
        "docx",
        "doc",
        "pdf",
        "xlsx",
        "xls",
        "odt",
        "ods",
        "odp",
        "odg",
        "odf",
        "txt",
        "ps",
        "tex",
    ],
    app: ["exe", "dmg", "pkg", "deb"],
};

//Organize function will organize all your target folder's files in a different folders according to their extensions
function organizeFn(direPath) { //We need directory path as a parameter 
    let destPath;

    if (direPath == undefined) {
        console.log('Please enter a valid directory path')
        return;
    }//check whether directory path is passed or not and if not simply return

    let doesExist = fs.existsSync(direPath)
    //the doesExist will tell path is valid or not (folder exists or not)

    if (doesExist == true) {

        destPath = path.join(direPath, 'Organised_files')
        // we created path for organised_files folder 


        // check whether in the given destPath does a folder exist with same name if not it will make a folder
        if (fs.existsSync(destPath) == false) {
            fs.mkdirSync(destPath)
        }
        else {
            console.log('Folder Already Exits')
        }
    }
    else {
        console.log('Please enter a vaild path')
        return
    }
    organizeHelper(direPath, destPath)
}

function organizeHelper(src, dest) {

    let childNames = fs.readdirSync(src)
    // console.log(childNames)

    for (let i = 0; i < childNames.length; i++) {
        let filePath = path.join(src, childNames[i])
        let isFile = fs.lstatSync(filePath).isFile()

        if (isFile == true) {
            let fileCategory = getCategory(childNames[i])
            // console.log(childNames[i]+' belongs to '+fileCategory)`

            sendFileFn(filePath, dest, fileCategory)
        }
    }

}

function getCategory(fileName) {
    let ext = path.extname(fileName).slice(1)
    // we extracted extension name of the target files
    //.slice(1) --> This removes (.) from starting of the file extension 

    for (let key in types) {
        let carTypeArray = types[key] //We took out all the category type arrays here

        for (let i = 0; i < carTypeArray.length; i++) {
            if (ext == carTypeArray[i]) {
                return key
            }
        }
    }
    return 'others'
}

function sendFileFn(srcFilePath, dest, fileCategory) {
    //we will create path for each category type encountered to create folders of their name
    let catPath = path.join(dest, fileCategory)
    //media folder
    //document folder

    if (fs.existsSync(catPath) == false) {
        fs.mkdirSync(catPath)
    }

    let fileName = path.basename(srcFilePath)
    //we took out basename of all the files

    let destFilePath = path.join(catPath, fileName)

    fs.copyFileSync(srcFilePath, destFilePath)

    fs.unlinkSync(srcFilePath)//Delete the files from main folder (soure folder)

    console.log("Files Organised")
}

module.exports={
    organizeFnKey : organizeFn
}