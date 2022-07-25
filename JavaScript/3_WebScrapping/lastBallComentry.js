const request = require('request')
const cheerio = require('cheerio')

request('https://www.espncricinfo.com/series/india-in-west-indies-2022-1317885/west-indies-vs-india-2nd-odi-1317901/ball-by-ball-commentary' , reqFun)

function reqFun(error , response , html){
    if(error){
        console.log(error)
    }
    else{
        console.log(response && response.statusCode)
        handleHtml(html)
    }
}

function handleHtml(html){
    let SelTool = cheerio.load(html)

    let Content = SelTool('.ci-html-content')

    let Lbc = SelTool(Content[16]).text()
    console.log("Last Ball Comentry : ",Lbc)
}