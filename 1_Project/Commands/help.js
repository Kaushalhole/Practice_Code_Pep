//Help function will list all the ways by which you can run the commands of this project 
function helpFn() {
    console.log(`List of all the commands ->
                            1)Tree - node fo.js tree <directoryPath>
                            2)Organize - node fo.js organise <directoryPath>
                            3)Help - node fo.js help`)
}

module.exports = {
    helpFnKey : helpFn
}