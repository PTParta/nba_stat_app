import Select from 'react-select'
import playerStatService from '../../services/playerStats'
import ReactGa from 'react-ga'

const SelectSeason = ({
  setSelectedSeason,
  setFetchingData,
  setTopTenStats
}) => {

  let seasonDescending = new Date().getFullYear()
  const seasonSelectDescending = []
  while (seasonDescending >= 1983) {
    seasonSelectDescending.push({ label: seasonDescending.toString(), value: seasonDescending.toString() })
    seasonDescending--
  }

  const handleSelectedSeasonChange = (event) => {
		ReactGa.event({
			category:'Top players',
			action: event.value
		})
    setSelectedSeason(event.value)
    setFetchingData(true)
    playerStatService.getSummaryStatsFromDBForASeason(event.value)
      .then((response) => {
        setTopTenStats(response.data)
        setFetchingData(false)
      })
  }

  return (
    <>
      <Select
        options={seasonSelectDescending}
        onChange={(event) => handleSelectedSeasonChange(event)}
        closeMenuOnSelect={true}
        placeholder='Select season'
      />
    </>
  )
}

export default SelectSeason