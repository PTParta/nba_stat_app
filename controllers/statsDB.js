const statDBRouter = require('express').Router()
const Stat = require('../models/stat')
const Pergame = require('../models/pergame')
const Per36 = require('../models/per36')
const Summary = require('../models/summary')
//const axios = require('axios')
//const baseUrl = 'https://www.balldontlie.io/api/v1/stats'

statDBRouter.get('/statsfromdb/:playerid', async (request, response) => {
  console.log('getting stats from database')
  console.log(':playerid', request.params.playerid)

  let startTime = new Date().getTime()
  const stats = await Stat.find({
    'player.id': request.params.playerid,
    'min': { $ne: null }
  })

  let endTime = new Date().getTime()
  console.log('finished retrieving data from database')
  console.log(`time ${endTime - startTime} ms`)
  console.log('documents:', stats.length)

  response.json(stats)
})

statDBRouter.get('/teamstatsfromdb/:teamid/:season', async (request, response) => {
  console.log('getting stats from database')
  console.log(':teamId', request.params.teamid)
  console.log(':season', request.params.season)

  let startTime = new Date().getTime()

  const stats = await Stat.find({
    'team.id': request.params.teamid,
    'game.season': request.params.season,
    'min': { $ne: null }
  })

  let endTime = new Date().getTime()
  console.log('finished retrieving data from database')
  console.log(`time ${endTime - startTime} ms`)
  console.log('documents:', stats.length)

  response.json(stats)
})

statDBRouter.get('/playerstatsforaseasonfromdb/:playerid/:season', async (request, response) => {
  console.log('getting season stats from database')
  console.log(':playerid', request.params.playerid)
  console.log(':season', request.params.season)

  let startTime = new Date().getTime()

  const stats = await Stat.find({
    'game.season': request.params.season,
    'min': { $ne: null },
    'player.id': request.params.playerid
  })

  let endTime = new Date().getTime()
  console.log('finished retrieving data from database')
  console.log(`time ${endTime - startTime} ms`)
  console.log('documents:', stats.length)

  response.json(stats)
})

statDBRouter.get('/selectedplayersidsforaseasonfromdb/:season', async (request, response) => {
  console.log('getting selected player stats for a season from database')
  console.log(':playerid', request.params.playerid)
  console.log(':season', request.params.season)

  let startTime = new Date().getTime()

  const stats = await Stat.distinct(
    'player.id',
    {
      'game.season': request.params.season,
      'min': { $ne: null }
    }
  )

  let endTime = new Date().getTime()
  console.log('finished retrieving data from database')
  console.log(`time ${endTime - startTime} ms`)
  console.log('documents:', stats.length)

  response.json(stats)
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////

statDBRouter.get('/allplayerstatsforaseasonfromdb/:season', async (request, response) => {

  console.log('getting all stats for a season from database')
  console.log(':season', request.params.season)

  const postseason = false

  let startTime = new Date().getTime()

  let statsFromDB = await Stat.find({
    'game.season': request.params.season,
    'min': { $ne: null }
  })

  let endTime = new Date().getTime()
  console.log('finished retrieving data from database')
  console.log(`time ${endTime - startTime} ms`)
  console.log('documents:', statsFromDB.length)

  //filter out bad data where player is not defined
  statsFromDB = statsFromDB.filter(stat => stat.player !== undefined)

  let playerStats = []
  //let i = 1
  statsFromDB.forEach(stat => {
    const playerFullName = `${stat.player.first_name} ${stat.player.last_name}`
    if (playerStats.find(stat => stat.name === playerFullName) === undefined) {
      const player = { name: playerFullName, player_id: stat.player.id }
      playerStats.push(player)
      /* console.log(i, player)
      i++ */
    }
  })

  const playerStatsFiltered = statsFromDB.filter(teamStat => teamStat.game.postseason === postseason)

  playerStats.forEach(playerStat => {
    let playedGames = 0
    const playerStatsHelper = playerStatsFiltered
      .filter(teamStat => `${teamStat.player.first_name} ${teamStat.player.last_name}` === playerStat.name)

    const totalPts = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.pts
    }, 0)
    const totalAst = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.ast
    }, 0)
    const totalReb = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.reb
    }, 0)
    const totalStl = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.stl
    }, 0)
    const totalBlk = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.blk
    }, 0)
    const totalTurnover = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.turnover
    }, 0)
    const totalPf = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.pf
    }, 0)
    const totalMin = playerStatsHelper.reduce((accumulator, currentValue) => {
      let minutes = 0
      const timeSplit = currentValue.min.split(':')
      if (timeSplit.length === 1) {
        minutes = Number(currentValue.min)
      } else {
        const seconds = Number(timeSplit[0]) * 60 + Number(timeSplit[1])
        minutes = Math.floor(seconds / 60)
      }
      if (isNaN(minutes)) {
        minutes = 0
      }
      if (minutes !== 0) {
        playedGames++
      }
      return accumulator + minutes
    }, 0)

    //const updatedPlayer = playerStat
    const updatedPlayer = {}

    //updatedPlayer.player_id = playerStat.player.id
    updatedPlayer.name = playerStat.name
    updatedPlayer.player_id = playerStat.player_id
    updatedPlayer.postseason = postseason

    updatedPlayer.pts_total = totalPts
    updatedPlayer.ast_total = totalAst
    updatedPlayer.reb_total = totalReb
    updatedPlayer.stl_total = totalStl
    updatedPlayer.blk_total = totalBlk
    updatedPlayer.turnover_total = totalTurnover
    updatedPlayer.pf_total = totalPf
    updatedPlayer.min_total = totalMin

    updatedPlayer.pts_pergame = Math.round(totalPts / playedGames * 10) / 10
    updatedPlayer.ast_pergame = Math.round(totalAst / playedGames * 10) / 10
    updatedPlayer.reb_pergame = Math.round(totalReb / playedGames * 10) / 10
    updatedPlayer.stl_pergame = Math.round(totalStl / playedGames * 10) / 10
    updatedPlayer.blk_pergame = Math.round(totalBlk / playedGames * 10) / 10
    updatedPlayer.turnover_pergame = Math.round(totalTurnover / playedGames * 10) / 10
    updatedPlayer.pf_pergame = Math.round(totalPf / playedGames * 10) / 10
    updatedPlayer.min_pergame = Math.round(totalMin / playedGames * 10) / 10

    //Don't calculate per 36 min stats if minutes per game is too low
    if (updatedPlayer.min_pergame >= 10) {
      updatedPlayer.pts_per36 = Math.round(updatedPlayer.pts_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
      updatedPlayer.ast_per36 = Math.round(updatedPlayer.ast_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
      updatedPlayer.reb_per36 = Math.round(updatedPlayer.reb_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
      updatedPlayer.stl_per36 = Math.round(updatedPlayer.stl_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
      updatedPlayer.blk_per36 = Math.round(updatedPlayer.blk_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
      updatedPlayer.turnover_per36 = Math.round(updatedPlayer.turnover_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
      updatedPlayer.pf_per36 = Math.round(updatedPlayer.pf_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
    }

    //console.log(updatedPlayer)

    playerStats = playerStats.map(s => s.name === playerStat.name ? updatedPlayer : s)
  })
  console.log(playerStats.slice(0, 5))

  response.send('ok')


  //response.json(stats)
})

module.exports = statDBRouter