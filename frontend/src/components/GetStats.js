import { Button } from 'react-bootstrap'
import playerStatService from '../services/playerStats'


const GetStats = ({ selectedPlayer, selectedSeasons, players, setPlayerStats, regularSeasonSelected, postSeasonSelected }) => {

  const getPlayerStats = (playerFullName, seasons, regularSeasonSelected, postSeasonSelected) => {
    const searchedPlayer = players.find(player => player.fullName === playerFullName)
    playerStatService.getPlayerStatsFromDB(seasons, searchedPlayer.apiId, regularSeasonSelected, postSeasonSelected)
      .then((response) => {
        setPlayerStats(response.data.sort((a, b) =>
          new Date(a.game.date).getTime() - new Date(b.game.date).getTime())
        )
      })
  }
  return (
    <Button variant='primary'
      onClick={() => getPlayerStats(selectedPlayer, selectedSeasons, regularSeasonSelected, postSeasonSelected)}>Get stats</Button>
  )
}

export default GetStats