import { Button } from 'react-bootstrap'
import playerStatService from '../services/playerStats'


const GetStats = ({ selectedPlayer, selectedSeasons, players, setPlayerStats }) => {

  const getPlayerStats = (playerFullName, seasons) => {
    const searchedPlayer = players.find(player => player.fullName === playerFullName)
    playerStatService.getPlayerStatsFromDB(seasons, searchedPlayer.apiId)
      .then((response) => {
        setPlayerStats(response.data.sort((a, b) =>
          new Date(a.game.date).getTime() - new Date(b.game.date).getTime())
        )
      })
  }
  return (
    <Button variant='primary' onClick={() => getPlayerStats(selectedPlayer, selectedSeasons)}>Get stats</Button>
  )
}

export default GetStats