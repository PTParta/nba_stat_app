import axios from 'axios'
const baseUrl = 'https://www.balldontlie.io/api/v1/players'

const getPlayers = async () => {
  let players = []
  let apiPageNumber = 1
  const apiPerPage = 100
  //let total_pages = 100
  while (apiPageNumber <= 10) {
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

const playerService = { getPlayers }

export default playerService