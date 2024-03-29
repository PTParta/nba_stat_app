import { Button } from 'react-bootstrap'
import playerStatService from '../../services/playerStats'


const GetStats = ({ selectedPlayer, players, setPlayerStats }) => {

  const getPlayerStats = (playerFullName) => {
    const searchedPlayer = players.find(player => player.fullName === playerFullName)
    console.log('searched player', searchedPlayer)
    playerStatService.getPlayerStatsFromDB(searchedPlayer.apiId)
      .then((response) => {
        setPlayerStats(response.data.sort((a, b) =>
          new Date(a.game.date).getTime() - new Date(b.game.date).getTime())
        )
      })
  }
  return (
    <Button
      style={{ width: '132px' }}
      variant='primary'
      onClick={() => getPlayerStats(selectedPlayer)}>Get stats</Button>
  )
}

export default GetStats