const path = require('path')

let filepath = "//Users//kaushalhole//Pep-coding_DEV//JavaScript//NodeJS//f2.txt"

let extensionName = path.extname(filepath)
console.log(extensionName)//this will print extension of the file

let filename = path.basename(filepath)
console.log(filename)//this will print filename (basename)

console.log(__dirname) //current working directory
console.log(__filename)//current filename