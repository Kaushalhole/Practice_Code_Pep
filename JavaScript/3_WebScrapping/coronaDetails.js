// including modules
const request = require('request')
const cheerio = require('cheerio')

//request function 
request('https://www.worldometers.info/coronavirus/', reqFunction)

function reqFunction(error, response, html){
    if(error){
        console.log(error)
    }
    else{
        // console.log(response && response.statusCode)
        handleHTML(html)
    }
}

function handleHTML(html){
    // in selTool we are basically getting the whole HTML in cheerio's format
    let selTool = cheerio.load(html)
    // console.log(selTool)

    //This contentArr contains the array of .maincounter-number class (all the data who have .maincounter class in html)
    let contentArr = selTool('.maincounter-number span')

    // for(let i=0 ; i<contentArr.length ; i++){
    //     let data = selTool(contentArr[i]).text()
    //     console.log(data)
    // }

    let totalCases = selTool(contentArr[0]).text() // .text function changes html content to text
    let totalDeaths = selTool(contentArr[1]).text()
    let totalRecovers = selTool(contentArr[2]).text()

    console.log('Total Cases : ',totalCases)
    console.log('Total Deaths : ',totalDeaths)
    console.log('Total Recovered : ',totalRecovers)

}