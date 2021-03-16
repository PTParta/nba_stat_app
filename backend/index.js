require('dotenv').config()
const { response } = require('express') // eslint-disable-line no-unused-vars
const express = require('express')
//const morgan = require('morgan')
const app = express()
const Player = require('./models/player')
const axios = require('axios')
const baseUrl = 'https://www.balldontlie.io/api/v1/players'

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.static('build'))

app.get('/health', (_req, res) => {
  res.send('ok')
})

app.get('/playersfromapitodatabase', async (_req, _res) => {
  const getPlayers = async () => {
    let players = []
    let apiPageNumber = 1
    const apiPerPage = 100
    //let total_pages = 100
    while (apiPageNumber <= 2) {
      console.log(`getting players, page ${apiPageNumber}`)
      let playersOnOnePage = await axios.get(`${baseUrl}?per_page=${apiPerPage}&page=${apiPageNumber}`)
      //total_pages = playersOnOnePage.meta.total_pages
  
      /* if (playersOnOnePage.data.length === 0) {
        break
      } */
  
      players = players.concat(playersOnOnePage.data.data)
      //players.push(playersOnOnePage.data)
  
      apiPageNumber = apiPageNumber + 1
      setTimeout(() => console.log(`getting players, page ${apiPageNumber}`), 100)
    }
    //console.log(players)
    //players.forEach(player => console.log(player.first_name, player.last_name))
    return players
  }
  
  const putPlayersToDatabase = async (players) => {
    const newPlayers = players.map(({ first_name: firstName, last_name: lastName, id: apiId }) => ({ firstName, lastName, apiId }))
    console.log('saving players to database...')
    await Player.insertMany(newPlayers)
    console.log('finished saving players to database')
    /* players.forEach(player => {
      const newPlayer = new Player({
        firstName: player.first_name,
        lastName: player.last_name,
        apiId: player.id
      })
      try {
        const savedPlayer = newPlayer.save()
        console.log('saved to database:', savedPlayer.id, savedPlayer.firstName, savedPlayer.lastName)
      }
      catch (err) {
        next(error)
      }
  
    }) */
  }
  
    const players = await getPlayers()
    await putPlayersToDatabase(players)
    console.log('\n finished saving players to database from api')
})

// olemattomien osoitteiden käsittely
const unknownEndpoint = (_req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }
  next(error)
}
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})