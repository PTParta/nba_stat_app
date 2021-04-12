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

statDBRouter.get('/playerstatsforaseasonfromdb/:season', async (request, response) => {
  console.log('getting season stats from database')
  console.log(':season', request.params.season)

  let startTime = new Date().getTime()

  const stats = await Stat.find({
    'game.season': request.params.season,
    'min': { $ne: null }
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

module.exports = statDBRouter