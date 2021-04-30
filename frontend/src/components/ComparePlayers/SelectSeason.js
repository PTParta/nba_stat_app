import Select from 'react-select'
import playerStatService from '../../services/playerStats'


const SelectSeason = ({
  setSelectedSeason,
  setFetchingData,
  setSummaryStats,
  selectedPlayersNames,
  setFilteredSummaryStats,
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
        setSummaryStats(response.data
          .filter(stat => stat.name !== undefined)
          .sort((a, b) => (a.name.split(' ')[1] > b.name.split(' ')[1]) ? 1
            : ((b.name.split(' ')[1] > a.name.split(' ')[1]) ? -1
              : 0)))

        const updatedFilteredSummaryStats = response.data.filter(stat => selectedPlayersNames.includes(stat.name))
        setFilteredSummaryStats(updatedFilteredSummaryStats)
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