const request = require('request')
const cheerio = require('cheerio')

const url = 'https://www.iplt20.com/matches/results/men/2022'

request(url,reqfun_1)

function reqfun_1(error, response, html){
    if(error){
        console.log(error)
    }
    else{
        let respo = response && response.statusCode
        console.log(respo)
        MatchCentre(html)
    }
}

function MatchCentre(html){
    let $ = cheerio.load(html)

    // let eleSelector = $('a[ng-if="!womensmatches"]')
    let eleSelector = $('.vn-ticnbtn a').attr('href')
    


    // for(let i=0 ; i<eleSelector.length ; i++ ){
    //     let matchLink = $(eleSelector[i]).attr('href')
    //     i++
    //     console.log(matchLink)
    // }

    let link_1 = $(eleSelector[1])
    console.log(link_1)

    let link_2 = $(eleSelector[2])
    console.log(link_2)

    let link_3 = $(eleSelector[3])
    console.log(link_3)

}
