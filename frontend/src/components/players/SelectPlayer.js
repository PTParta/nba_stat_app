import Select from 'react-select'
import playerStatService from '../../services/playerStats'
//import { useHistory } from 'react-router-dom'

const SelectPlayer = ({ players, setSelectedPlayer, setPlayerStats, setFetchingData }) => {

  //const history = useHistory()
  const playerSelect = players.map(player => ({ label: player.fullName, value: player.fullName }))

  const handleSelectedPlayerChange = (playerFullName) => {
    setSelectedPlayer(playerFullName)
    getPlayerStats(playerFullName)
  }

  const getPlayerStats = (playerFullName) => {
    setFetchingData(true)
    const searchedPlayer = players.find(player => player.fullName === playerFullName)
    //console.log('searched player', searchedPlayer)
    playerStatService.getPlayerStatsFromDB(searchedPlayer.apiId, playerFullName)
      .then((response) => {
        //history.push(`/players/${playerFullName}`)
        setPlayerStats(response.data.filter(stat => stat.min !== '0' && stat.min !== '').sort((a, b) =>
          new Date(a.game.date).getTime() - new Date(b.game.date).getTime())
        )
        setFetchingData(false)
      })

  }
  return (
    <div>
      <Select
        options={playerSelect}
        onChange={(option) => handleSelectedPlayerChange(option.value)}
        placeholder='Select player'
      />
    </div>
  )
}

export default SelectPlayer