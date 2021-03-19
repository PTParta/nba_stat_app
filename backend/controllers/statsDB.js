const statDBRouter = require('express').Router()
const Stat = require('../models/stat')
//const axios = require('axios')
//const baseUrl = 'https://www.balldontlie.io/api/v1/stats'

statDBRouter.get('/statsfromdb', async (request, response) => {
  console.log('getting stats from database')
  let startTime = new Date().getTime()
  const stats = await Stat.find({ 'player.id': 237 })
  let endTime = new Date().getTime()
  console.log('finished retrieving data from database')
  console.log(`time ${endTime - startTime} ms`)
  console.log('documents:', stats.length)
  response.json(stats)
})

module.exports = statDBRouter