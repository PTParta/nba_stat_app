import Select from 'react-select'
import playerStatService from '../../services/playerStats'
import ReactGa from 'react-ga'


const SelectSeason = ({
  setSelectedSeason,
  setFetchingData,
  setPercentileStats,
  selectedPlayersNames
}) => {

  let seasonDescending = 2020
  const seasonSelectDescending = []
  while (seasonDescending >= 1983) {
    seasonSelectDescending.push({ label: seasonDescending.toString(), value: seasonDescending.toString() })
    seasonDescending--
  }

  const handleSelectedSeasonChange = (event) => {
		let selectedPlayersGA = ''
		selectedPlayersNames.forEach(s=>{
			selectedPlayersGA += `${s}, ` 
		})
		ReactGa.event({
			category:`Percentiles ${event.value}`,
			action: selectedPlayersGA
		})
    setSelectedSeason(event.value)
    setFetchingData(true)
    playerStatService.getSummaryStatsFromDBForASeason(event.value)
      .then((response) => {
        //console.log(response.data)
        setPercentileStats(response.data
          .filter(stat => stat.name !== undefined)
          .sort((a, b) => (a.name.split(' ')[1] > b.name.split(' ')[1]) ? 1
            : ((b.name.split(' ')[1] > a.name.split(' ')[1]) ? -1
              : 0)))
        setFetchingData(false)
      })
    //console.log(percentileStats)
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