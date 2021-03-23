const statDBRouter = require('express').Router()
const Stat = require('../models/stat')
//const axios = require('axios')
//const baseUrl = 'https://www.balldontlie.io/api/v1/stats'

statDBRouter.get('/statsfromdb/:playerid/:seasons', async (request, response) => {
  console.log('getting stats from database')
  console.log(':playerid', request.params.playerid)
  console.log(':seasons', request.params.seasons)
  const seasonsArray = request.params.seasons.split(",")
  console.log('seasonsArray', seasonsArray)
  let startTime = new Date().getTime()
  const stats = await Stat.find({ 'player.id': request.params.playerid, 'game.season': { $in: seasonsArray }, 'min': { $ne: null } })
  let endTime = new Date().getTime()
  console.log('finished retrieving data from database')
  console.log(`time ${endTime - startTime} ms`)
  console.log('documents:', stats.length)
  response.json(stats)
})

module.exports = statDBRouter