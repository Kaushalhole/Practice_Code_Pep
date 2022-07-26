const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595'
const request = require('request')
const cheerio = require('cheerio')

request(url, reqFun)

function reqFun(error, response, html){
    if(error){
        console.log(error)
    }
    else{
        console.log(response && response.statusCode)
        extractLink(html) 
    }
}

function extractLink(html){
    let $ = cheerio.load(html)

    let anchorElem = $('span a[href="/series/ipl-2020-21-1210595/match-results"]')

    let link = anchorElem.attr('href')

    let fullLink = 'https://www.espncricinfo.com'+link

    console.log(fullLink)


    
}