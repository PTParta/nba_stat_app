const axios = require('axios')
const baseUrl = 'https://www.balldontlie.io/api/v1/players'
const Player = require('../models/player')

const getPlayers = async () => {
  let players = []
  let apiPageNumber = 1
  const apiPerPage = 100
  //let total_pages = 100
  while (apiPageNumber <= 40) {
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
  console.log(players)
  players.forEach(player => console.log(player.first_name, player.last_name))
  return players
}

const putPlayersToDatabase = async (players) => {
  players.forEach(async player => {
    const newPlayer = new Player({
      firstName: player.first_name,
      lastName: player.last_name,
      apiId: player.id
    })
    try {
      const savedPlayer = await newPlayer.save()
      console.log('save to database:', savedPlayer.id, savedPlayer.firstName, savedPlayer.lastName)
    }
    catch (err) {
      next(error)
    }

  })
}

  const players = getPlayers()
  putPlayersToDatabase(players)
  console.log('\n finished saving players to database from api')
