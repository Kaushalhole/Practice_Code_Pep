function add(a,b){
    console.log("Addition is -> ",a+b)
}

function sub(a,b){
    console.log("Subtration is -> ",a-b)
}


function mul(a,b){
    console.log("Multiplication is ->",a*b)
}

function div(a,b){
    console.log("Divison is ->",a/b)
}


//This is object which is used to export function

module.exports = {
    Addition : add,
    Subtration : sub,
    Multiply : mul,
    Divison : div
}

// module.exports is a Object provided by Node.js by
// which you can export your functions in key value pair
// you will use your functions with the keys you have assigned
// to them
