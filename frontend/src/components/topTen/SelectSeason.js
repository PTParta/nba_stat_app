import Select from 'react-select'
import playerStatService from '../../services/playerStats'


const SelectSeason = ({
  setSelectedSeason,
  setFetchingData,
  setTopTenStats
}) => {

  let seasonDescending = 2020
  const seasonSelectDescending = []
  while (seasonDescending >= 1983) {
    seasonSelectDescending.push({ label: seasonDescending.toString(), value: seasonDescending.toString() })
    seasonDescending--
  }

  const handleSelectedSeasonChange = (event) => {
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