import Select from 'react-select'
import playerStatService from '../../services/playerStats'

const SelectTeam = ({ teams, setSelectedTeam, setTeamStats, setFetchingData, selectedSeason }) => {

  //const playerSelect = players.map(player => ({ label: player.fullName, value: player.fullName }))

  const teamSelect = teams.map(team => ({ label: `${team.city} ${team.name}`, value: team.name }))

  const handleSelectedTeamChange = (teamName) => {
    setSelectedTeam(teamName)
    getTeamStats(teamName)
  }

  const getTeamStats = (teamName) => {
    setFetchingData(true)
    const searchedTeam = teams.find(team => team.name === teamName)
    playerStatService.getTeamStatsFromDB(searchedTeam.id, selectedSeason)
      .then((response) => {
        setTeamStats(response.data.sort((a, b) =>
          new Date(a.game.date).getTime() - new Date(b.game.date).getTime())
        )
        setFetchingData(false)
      })

  }
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