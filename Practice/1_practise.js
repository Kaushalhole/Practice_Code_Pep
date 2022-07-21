const path = require('path')
const fs = require('fs')


let input = process.argv.slice(2)
let command = input[0]
let dirpath = input[1]

let types = {
    media: ["mp4", "mkv", "mp3", "mov", "wmv", "avi", "avchd"],
    images: ["jpeg", "jpg", "png", "gif", "tiff", "psd", "pdf", "esp", "ai", "indd", "raw"],
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

switch (command) {
    case 'help':
        helpFn()
        break;

    case 'organize':
        organizeFn(dirpath)
        break;

    default:
        console.log("Enter valid command")
        break;
}


function helpFn() {
    console.log(`You can type organize command to run project`)
    return
}

function organizeFn(dirpath) {

    let destPath;

    if (dirpath == undefined) {
        console.log("Please pass the path of folder which you want to organise")
        return
    }

    let doesExit = fs.existsSync(dirpath)

    if (doesExit == true) {
        destPath = path.join(dirpath, "Organized_files")

        if (fs.existsSync(destPath) == false) {
            fs.mkdirSync(destPath)
        }
        else {
            console.log("Folder already exists")
        }
    }
    else {
        console.log("Please enter valid path")
        return
    }
    organizedHelperFn(dirpath, destPath)
}

function organizedHelperFn(src, dest) {

    let childNames = fs.readdirSync(src)

    for (let i = 0; i < childNames.length; i++) {
        let filePath = path.join(src, childNames[i])
        let isFile = fs.statSync(filePath).isFile()

        if (isFile == true) {
            let fileCategory = getCategory(childNames[i])
            sendFiles(filePath,dest,fileCategory)

        }
    }
}

function getCategory(fileName) {
    let ext = path.extname(fileName).slice(1)

    for(key in types){
        let carTypeArray = types[key]

        for(let i=0; i<carTypeArray.length; i++){
            if(ext == carTypeArray[i]){
                return key
                
            }
        }
    }
    return 'others'

}

function sendFiles(srcFilePath,dest,fileCategory){
    let catfile = path.join(dest,fileCategory)

    if(fs.existsSync(catfile)==false){
        fs.mkdirSync(catfile)
    }

    let fileName = path.basename(srcFilePath)

    let destFilePath = path.join(catfile,fileName)
    
    fs.copyFileSync(srcFilePath,destFilePath)
    
    fs.unlinkSync(srcFilePath)
    
    console.log("file organized")
}
