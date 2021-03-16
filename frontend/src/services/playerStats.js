import axios from 'axios'
const baseUrl = 'https://www.balldontlie.io/api/v1/stats'

const getPlayerStats = async (season, playerId) => {
  const playerStats = await axios.get(`${baseUrl}?seasons[]=${season}&player_ids[]=${playerId}&per_page=100`)
  //playerStats.sort((a, b) => a.game.date - b.game.date)
  return playerStats.data
}

const playerStatsService = {getPlayerStats}

export default playerStatsService