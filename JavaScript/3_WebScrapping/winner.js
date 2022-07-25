const request = require('request')
const cheerio = require('cheerio')

// let url = 'https://www.espncricinfo.com/series/india-in-west-indies-2022-1317885/west-indies-vs-india-2nd-odi-1317901/full-scorecard'

let url = 'https://www.espncricinfo.com/series/county-championship-division-one-2022-1297650/lancashire-vs-kent-49th-match-1297755/full-scorecard'

request(url,reqFunction)

function reqFunction(error, response, html){
    let selTool = cheerio.load(html)

    let team = selTool('.ds-border-b.ds-border-line.ds-font-bold.ds-bg-fill-content-alternate.ds-text-tight-m .ds-min-w-max.ds-text-right')
    let bollers = selTool('.ds-w-full.ds-table.ds-table-xs.ds-table-fixed tbody tr td span a ')
    let wicket = selTool('.ds-w-full.ds-table.ds-table-xs.ds-table-fixed tbody tr .ds-min-w-max.ds-text-right strong')

    let team_1 = selTool(team[0]).text()
    let team_2 = selTool(team[2]).text()

    console.log("Team_1 Score : ",team_1)
    console.log("Team_2 Score : ",team_2)

    if(team_1>team_2){
        console.log('\nTeam 1 wom the match : ',team_1)
    }
    else{
        console.log('\nTeam 2 won the match : ',team_2)
    }

    let boller_1 = selTool(bollers[11]).text()
    let boller_2 = selTool(bollers[12]).text()
    let boller_3 = selTool(bollers[13]).text()
    let boller_4 = selTool(bollers[14]).text()
    let boller_5 = selTool(bollers[15]).text()
    let boller_6 = selTool(bollers[16]).text()

    let b1_wicket = selTool(wicket[9]).text()
    let b2_wicket = selTool(wicket[10]).text()
    let b3_wicket = selTool(wicket[11]).text()
    let b4_wicket = selTool(wicket[12]).text()
    let b5_wicket = selTool(wicket[13]).text()
    let b6_wicket = selTool(wicket[14]).text()

    console.log("\nBollers of winner team :- ")
    console.log("1) ",boller_1," ",b1_wicket)
    console.log("2) ",boller_2," ",b2_wicket)
    console.log("3) ",boller_3," ",b3_wicket)
    console.log("4) ",boller_4," ",b4_wicket)
    console.log("5) ",boller_5," ",b5_wicket)
    console.log("6) ",boller_6," ",b6_wicket)

    if(b1_wicket>=b2_wicket && b1_wicket>=b3_wicket && b1_wicket>=b4_wicket && b1_wicket>=b5_wicket && b1_wicket>=b6_wicket){
        console.log("\n",boller_1," is highest wicket taker.")
    }
    else if(b2_wicket>=b1_wicket && b2_wicket>=b3_wicket && b2_wicket>=b4_wicket && b2_wicket>=b5_wicket && b2_wicket>=b6_wicket){
        console.log("\n",boller_2," is highest wicket taker.")
    }
    else if(b3_wicket>=b1_wicket && b3_wicket>=b2_wicket && b3_wicket>=b4_wicket && b3_wicket>=b5_wicket && b3_wicket>=b6_wicket){
        console.log("\n",boller_3," is highest wicket taker.")
    }
    else if(b4_wicket>=b1_wicket && b4_wicket>=b2_wicket && b4_wicket>=b3_wicket && b4_wicket>=b5_wicket && b4_wicket>=b6_wicket){
        console.log("\n",boller_4," is highest wicket taker.")
    }
    else if(b5_wicket>=b1_wicket && b5_wicket>=b2_wicket && b5_wicket>=b3_wicket && b5_wicket>=b5_wicket && b5_wicket>=b6_wicket){
        console.log("\n",boller_5," is highest wicket taker.")
    }
    else if(b6_wicket>=b1_wicket && b6_wicket>=b2_wicket && b6_wicket>=b3_wicket && b6_wicket>=b5_wicket && b6_wicket>=b6_wicket){
        console.log(boller_6," is highest wicket taker.")
    }
    
}
//.ds-inline-flex.ds-items-center.ds-leading-none3