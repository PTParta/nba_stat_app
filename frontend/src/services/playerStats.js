import axios from 'axios'
const baseUrl = 'https://www.balldontlie.io/api/v1/stats'
const baseUrlDB = '/api/statsdb/statsfromdb'
const baseUrlDBTeam = '/api/statsdb/teamstatsfromdb'
const baseUrlDBPlayerStatsForASeason = '/api/statsdb/playerstatsforaseasonfromdb'

const getPlayerStatsFromApi = async (seasons, playerId) => {
  let seasonsVariable = ''
  for (let i = 0; i < seasons.length; i++) {
    seasonsVariable += '&seasons[]='
    seasonsVariable += seasons[i]
  }
  const playerStats = await axios.get(`${baseUrl}?seasons[]=${seasonsVariable}&player_ids[]=${playerId}&per_page=100`)
  const totalPages = playerStats.data.meta.total_pages
  console.log('totalPages', totalPages)

  let playerStatsAllPages = []

  for (let page = 1; page <= totalPages; page++) {
    console.log('getting stats from page', page)
    const playerStatsOnePage = await axios
      .get(`${baseUrl}?seasons[]=${seasonsVariable}&player_ids[]=${playerId}&per_page=100&page=${page}`)
    playerStatsAllPages = playerStatsAllPages.concat(playerStatsOnePage.data.data)
  }
  console.log(playerStatsAllPages)
  return playerStatsAllPages
}

const getPlayerStatsFromDB = async (playerId) => {
  const playerStats = await axios.get(`${baseUrlDB}/${playerId}`)
  return playerStats
}

const getTeamStatsFromDB = async (teamApiId, season) => {
  const playerStats = await axios.get(`${baseUrlDBTeam}/${teamApiId}/${season}`)
  return playerStats
}

const getPlayerStatsFromDBForASeason = async (season) => {
  const playerStats = await axios.get(`${baseUrlDBPlayerStatsForASeason}/${season}`)
  return playerStats
}

const playerStatService = {
  getPlayerStatsFromApi,
  getPlayerStatsFromDB,
  getTeamStatsFromDB,
  getPlayerStatsFromDBForASeason
}

export default playerStatService
