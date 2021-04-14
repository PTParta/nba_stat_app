import Select from 'react-select'
import playerStatService from '../../services/playerStats'


const SelectSeason = ({
  selectedSeason,
  setSelectedSeason,
  setFetchingData,
  setTopTenStats
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
        //onChange={(event) => setSelectedSeason(event.value)}
        onChange={(event) => handleSelectedSeasonChange(event)}
        closeMenuOnSelect={true}
        placeholder='Select season'
      />

    </>
  )
}

export default SelectSeason