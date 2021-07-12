import Select from 'react-select'
import playerStatService from '../../services/playerStats'
import ReactGa from 'react-ga'

const SelectTeam = ({ teams, setSelectedTeam, setTeamStats, setFetchingData, selectedSeason }) => {

  //const playerSelect = players.map(player => ({ label: player.fullName, value: player.fullName }))

  const teamSelect = teams.map(team => ({ label: `${team.city} ${team.name}`, value: team.name }))

  const handleSelectedTeamChange = (teamName) => {
		ReactGa.event({
			category:`Teams ${selectedSeason}`,
			action: teamName
		})
    setSelectedTeam(teamName)
    getTeamStats(teamName)
  }

  const getTeamStats = (teamName) => {
    setFetchingData(true)
    const searchedTeam = teams.find(team => team.name === teamName)
    playerStatService.getTeamStatsFromDB(searchedTeam.apiId, selectedSeason)
      .then((response) => {
        setTeamStats(response.data)
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