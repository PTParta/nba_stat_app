const statDBRouter = require('express').Router()
const Stat = require('../models/stat')
//const axios = require('axios')
//const baseUrl = 'https://www.balldontlie.io/api/v1/stats'

statDBRouter.get('/statsfromdb/:playerid/:seasons/:regularseason/:postseason', async (request, response) => {
  console.log('getting stats from database')
  console.log(':playerid', request.params.playerid)
  console.log(':seasons', request.params.seasons)
  console.log(':regularseason', request.params.regularseason)
  console.log(':postseason', request.params.postseason)
  const seasonsArray = request.params.seasons.split(",")
  console.log('seasonsArray', seasonsArray)
  const isRegularSeasonSelected = (request.params.regularseason === 'true')
  const isPostSeasonSelected = (request.params.postseason === 'true')

  let startTime = new Date().getTime()
  let stats
  if (isRegularSeasonSelected && isPostSeasonSelected) {
    stats = await Stat.find({
      'player.id': request.params.playerid,
      'game.season': { $in: seasonsArray },
      'min': { $ne: null }
    })

  } else if (isRegularSeasonSelected && !isPostSeasonSelected) {
    stats = await Stat.find({
      'player.id': request.params.playerid,
      'game.season': { $in: seasonsArray },
      'min': { $ne: null },
      'game.postseason': false
    })
  } else {
    stats = await Stat.find({
      'player.id': request.params.playerid,
      'game.season': { $in: seasonsArray },
      'min': { $ne: null },
      'game.postseason': true
    })
  }
  let endTime = new Date().getTime()
  console.log('finished retrieving data from database')
  console.log(`time ${endTime - startTime} ms`)
  console.log('documents:', stats.length)


  response.json(stats)
})

module.exports = statDBRouter