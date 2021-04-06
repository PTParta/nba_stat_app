const statDBRouter = require('express').Router()
const Stat = require('../models/stat')
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
  //console.log(':playerid', request.params.playerid)

  let startTime = new Date().getTime()

  const stats = await Stat.find({
    '$or': [
      { 'game.home_team_id': request.params.teamid },
      { 'game.visitor_team_id': request.params.teamid }
    ],
    'game.season': request.params.season
  })

  /* const statsHomeTeam = await Stat.find({
    'game.home_team_id': request.params.teamid,
    'game.season': request.params.season
  })
  const statsVisitorTeam = await Stat.find({
    'game.visitor_team_id': request.params.teamid,
    'game.season': request.params.season
  })

  const stats = statsHomeTeam.concat(statsVisitorTeam) */

  let endTime = new Date().getTime()
  console.log('finished retrieving data from database')
  console.log(`time ${endTime - startTime} ms`)
  console.log('documents:', stats.length)

  response.json(stats)
})

module.exports = statDBRouter