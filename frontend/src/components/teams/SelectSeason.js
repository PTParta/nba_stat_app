import Select from 'react-select'
import playerStatService from '../../services/playerStats'
import { /* Container,  */Row, Col } from 'react-bootstrap'


const SelectSeason = ({
  selectedSeason,
  setSelectedSeason,
  selectedTeam,
  setTeamStats,
  teams,
  fetchingData,
  setFetchingData
}) => {

  let seasonDescending = 2020
  const seasonSelectDescending = []
  while (seasonDescending >= 1979) {
    seasonSelectDescending.push({ label: seasonDescending.toString(), value: seasonDescending.toString() })
    seasonDescending--
  }



  const handleSelectedSeasonChange = (event) => {
    setSelectedSeason(event.value)
    setFetchingData(true)
    const searchedTeam = teams.find(team => team.name === selectedTeam)
    playerStatService.getTeamStatsFromDB(searchedTeam.id, event.value)
      .then((response) => {
        setTeamStats(response.data.sort((a, b) =>
          new Date(a.game.date).getTime() - new Date(b.game.date).getTime())
        )
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