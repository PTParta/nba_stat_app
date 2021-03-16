const playersRouter = require('express').Router()
const Player = require('../models/player')
const axios = require('axios')
const baseUrl = 'https://www.balldontlie.io/api/v1/players'

playersRouter.get('/playersfromapitodatabase', async (_req, _res) => {
  const getPlayers = async () => {
    let players = []
    let apiPageNumber = 1
    const apiPerPage = 100
    const total_pages = 35
    while (apiPageNumber <= total_pages) {
      console.log(`getting players, page ${apiPageNumber}`)
      let playersOnOnePage = await axios.get(`${baseUrl}?per_page=${apiPerPage}&page=${apiPageNumber}`)
      players = players.concat(playersOnOnePage.data.data)
      //timer to prevent status code 429 (Too Many Requests)
      apiPageNumber = apiPageNumber + 1
      setTimeout(() => 100)
    }
    return players
  }
  const putPlayersToDatabase = async (players) => {
    const newPlayers = players.map(({ first_name: firstName, last_name: lastName, id: apiId }) => ({ firstName, lastName, apiId }))
    console.log('saving players to database...')
    await Player.insertMany(newPlayers)
    console.log('finished saving players to database')
  }
  const players = await getPlayers()
  await putPlayersToDatabase(players)
})



module.exports = playersRouter