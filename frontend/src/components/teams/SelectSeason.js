import Select from 'react-select'
import playerStatService from '../../services/playerStats'
import ReactGa from 'react-ga'

const SelectSeason = ({
  selectedSeason,
  setSelectedSeason,
  selectedTeam,
  setTeamStats,
  teams,
  fetchingData,
  setFetchingData
}) => {

  let seasonDescending = 2021
  const seasonSelectDescending = []
  while (seasonDescending >= 1983) {
    seasonSelectDescending.push({ label: seasonDescending.toString(), value: seasonDescending.toString() })
    seasonDescending--
  }



  const handleSelectedSeasonChange = (event) => {
		ReactGa.event({
			category:`Teams ${event.value}`,
			action: selectedTeam
		})
    setSelectedSeason(event.value)
    setFetchingData(true)
    const searchedTeam = teams.find(team => team.name === selectedTeam)
    playerStatService.getTeamStatsFromDB(searchedTeam.apiId, event.value)
      .then((response) => {
        setTeamStats(response.data)
        setFetchingData(false)
      })
  }

  return (
    <>
      <Select
        options={seasonSelectDescending}
        //onChange={(event) => setSelectedSeason(event.value)}
        onChange={(event) => handleSelectedSeasonChange(event)}
        closeMenuOnSelect={true}
        placeholder={selectedSeason}
      />

    </>
  )
}

export default SelectSeason