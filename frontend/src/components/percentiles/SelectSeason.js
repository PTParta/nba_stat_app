import Select from 'react-select'
import playerStatService from '../../services/playerStats'


const SelectSeason = ({
  setSelectedSeason,
  setFetchingData,
  setPercentileStats,
  percentileStats
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
        //console.log(response.data)
        setPercentileStats(response.data
          .filter(stat => stat.name !== undefined)
          .sort((a, b) => (a.name.split(' ')[1] > b.name.split(' ')[1]) ? 1 : ((b.name.split(' ')[1] > a.name.split(' ')[1]) ? -1 : 0)))
        setFetchingData(false)
      })
      console.log(percentileStats)
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