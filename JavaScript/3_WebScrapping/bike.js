const request = require('request')
const cheerio = require('cheerio')

request('https://www.bikewale.com/royalenfield-bikes/',reqFunction)

function reqFunction(error , status , html){
    if(error){
        console.log(error)
    }
    else{
        console.log(status && status.statusCode)
        handleHtml(html)
        // console.log(html)
    }
}

function handleHtml(html){
    let selectTool = cheerio.load(html)

    let content = selectTool('.bikeDescWrapper .modelurl')

    // for(let i=0 ; i<content.length ; i++){
    //     let data = selectTool(content[i]).text()
    //     console.log(data)
    // }

    let firstBike = selectTool(content[0]).text()
    let secondBike = selectTool(content[1]).text()
    let thirdBike = selectTool(content[2]).text()
    let fourthBike = selectTool(content[3]).text()
    let fifthBike = selectTool(content[4]).text()
    let sixthBike = selectTool(content[5]).text()
    let seventhBike = selectTool(content[6]).text()

    console.log('First Bike -> ',firstBike)
    console.log('Second Bike -> ',secondBike)
    console.log('Thired Bike -> ',thirdBike)
    console.log('Fourth Bike -> ',fourthBike)
    console.log('Fifth Bike -> ',fifthBike)
    console.log('Sixth Bike -> ',sixthBike)
    console.log('Seventh Bike -> ',seventhBike)
}
