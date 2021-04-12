import Select from 'react-select'
import playerStatService from '../../services/playerStats'
//import { useHistory } from 'react-router-dom'

const SelectPlayer = ({ players,
  setSelectedPlayer,
  setStatsForSelectedPlayers,
  setFetchingData,
  selectedSeason,
  statsForSelectedPlayers }) => {

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
    playerStatService.getPlayerStatsFromDBForASeason(searchedPlayer.apiId, selectedSeason/* , playerFullName */)
      .then((response) => {
        //history.push(`/players/${playerFullName}`)
        let updatedStats = statsForSelectedPlayers
        updatedStats = updatedStats.concat(response.data)
        setStatsForSelectedPlayers(updatedStats)
        //console.log(response.data)
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