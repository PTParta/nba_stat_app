import axios from 'axios'
const baseUrl = 'https://www.balldontlie.io/api/v1/stats'
const baseUrlDB = '/api/statsdb/statsfromdb'

const getPlayerStatsFromApi = async (seasons, playerId) => {
  //console.log('seasons to api', seasons)
  let seasonsVariable = ''

  for (let i = 0; i < seasons.length; i++) {
    seasonsVariable += '&seasons[]='
    seasonsVariable += seasons[i]

  }
  //console.log('seasonsVariable', seasonsVariable)

  const playerStats = await axios.get(`${baseUrl}?seasons[]=${seasonsVariable}&player_ids[]=${playerId}&per_page=100`)
  //playerStats.sort((a, b) => a.game.date - b.game.date)
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
  //return playerStats.data
  return playerStatsAllPages
}

const getPlayerStatsFromDB = async (seasons, playerId) => {
  let seasonHelper = ''
  seasons.forEach(season => {
    seasonHelper += `${season},`
  })
  
  console.log('seasonHelper', seasonHelper)
  const playerStats = await axios.get(`${baseUrlDB}/${playerId}/${seasonHelper}`)
  return playerStats
}

const playerStatService = { getPlayerStatsFromApi, getPlayerStatsFromDB }

export default playerStatService
