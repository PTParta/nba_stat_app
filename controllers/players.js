const playersRouter = require('express').Router()
const Player = require('../models/player')
const Stat = require('../models/stat')
const Visitor = require('../models/visitor')
const axios = require('axios')
const baseUrl = 'https://www.balldontlie.io/api/v1/players'

playersRouter.get('/playersfromapitodatabase', async (_request, _response) => {
  const getPlayers = async () => {
    let players = []
    let apiPageNumber = 1
    const apiPerPage = 100
    const total_pages = 40
    while (apiPageNumber <= total_pages) {
      console.log(`getting players, page ${apiPageNumber}`)
      let playersOnOnePage = await axios.get(`${baseUrl}?per_page=${apiPerPage}&page=${apiPageNumber}`)
      players = players.concat(playersOnOnePage.data.data)
      apiPageNumber = apiPageNumber + 1
      //timer to prevent status code 429 (Too Many Requests)
      setTimeout(() => 100)
    }
    return players
  }
  const putPlayersToDatabase = async (players) => {
    const newPlayers = players.map(({ first_name: firstName, last_name: lastName, id: apiId, team: team }) =>
      ({ firstName, lastName, apiId, team }))
    console.log('saving players to database...')
    await Player.insertMany(newPlayers)
    console.log('finished saving players to database')
  }
  const players = await getPlayers()
  await putPlayersToDatabase(players)
})

playersRouter.get('/', async (request, response) => {
  const players = await Player.find({})
  response.json(players)

  try {
    const ipAddress = `${request.ip}`
    console.log("IP address:")
    console.log(request.ip)
    const filter = { ipAddress: ipAddress }
    const options = { upsert: true }
    const updateDoc = { $inc:{visitCount:1} }
    await Visitor.updateOne(filter, updateDoc, options)
    //await Visitor.create({ ipAddress: ipAddress })
  } catch (err) {
    console.log("Error in IP address handling", err)
  }

})

playersRouter.get('/:season', async (request, response) => {
  const distinctPlayerIds = await Stat.distinct(
    'player.id',
    {
      'game.season': request.params.season,
      'min': { $ne: null }
    }
  )
  response.json(distinctPlayerIds)
})


module.exports = playersRouter