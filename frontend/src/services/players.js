import axios from 'axios'
//const baseUrl = 'https://www.balldontlie.io/api/v1/players'
const baseUrl = '/api/players'

const getPlayers = async () => {
  const players = await axios.get(baseUrl)
  
  return players.data
}

const playerService = { getPlayers }

export default playerService