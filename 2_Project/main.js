const HomeUrl = 'https://www.bikewale.com/'
const request = require('request')
const cheerio = require('cheerio')

request(HomeUrl, reqFunction_1)

function reqFunction_1(error,response,html){
    if(error){
        console.log(error)
    }
    else{
        let resp = response && response.statusCode
        handleHomeHtml(html)
    }
}

function handleHomeHtml(html){
    let $ = cheerio.load(html)

    let anchorElement = $('.brand-type-container ul li>a')

    for(let i=0 ; i<anchorElement.length ; i++){
        let shortBrandLink = $(anchorElement[i]).attr('href')
        let FullBrandLink = 'https://www.bikewale.com'+shortBrandLink
        console.log(FullBrandLink)
    }
 
}