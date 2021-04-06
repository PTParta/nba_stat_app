import Select from 'react-select'
import playerStatService from '../../services/playerStats'

const SelectTeam = ({ teams, setSelectedTeam, setFetchingData }) => {

  //const playerSelect = players.map(player => ({ label: player.fullName, value: player.fullName }))

  const teamSelect = teams.map(team => ({ label: `${team.city} ${team.name}`, value: team.name }))

  const handleSelectedTeamChange = (playerFullName) => {
    setSelectedTeam(playerFullName)
   // getPlayerStats(playerFullName)
  }

  /* const getPlayerStats = (playerFullName) => {
    setFetchingData(true)
    const searchedPlayer = players.find(player => player.fullName === playerFullName)
    playerStatService.getPlayerStatsFromDB(searchedPlayer.apiId)
      .then((response) => {
        setPlayerStats(response.data.sort((a, b) =>
          new Date(a.game.date).getTime() - new Date(b.game.date).getTime())
        )
        setFetchingData(false)
      })

  } */
  return (
    <div>
      
      <Select
        options={teamSelect}
        onChange={(option) => handleSelectedTeamChange(option.value)}
        placeholder='Select team'
      />
    </div>
  )
}

export default SelectTeam