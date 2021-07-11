import Select from 'react-select'
import playerStatService from '../../services/playerStats'
import ReactGa from 'react-ga'

const SelectPlayer = ({ players, setSelectedPlayer, setPlayerStats, setFetchingData }) => {

  const playerSelect = players.map(player => ({ label: player.fullName, value: player.fullName }))

  const handleSelectedPlayerChange = (playerFullName) => {
		ReactGa.event({
			category:'Selected player',
			action: `${playerFullName}`
		})
    setSelectedPlayer(playerFullName)
    getPlayerStats(playerFullName)
  }

  const getPlayerStats = (playerFullName) => {
    setFetchingData(true)
    const searchedPlayer = players.find(player => player.fullName === playerFullName)
    playerStatService.getPlayerStatsFromDB(searchedPlayer.apiId, playerFullName)
      .then((response) => {
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