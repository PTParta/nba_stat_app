import Select from 'react-select'

const SelectPlayer = ({
  summaryStats,
  selectedPlayersNames,
  setSelectedPlayersNames,
  filteredSummaryStats,
  setFilteredSummaryStats

}) => {

  let playerSelect = summaryStats.map(stat => ({ label: stat.name, value: stat.name }))

  const handleSelectedPlayerChange = (playerFullName) => {
    const updatedSelectedPlayersNames = selectedPlayersNames
    updatedSelectedPlayersNames.push(playerFullName)
    setSelectedPlayersNames(updatedSelectedPlayersNames)
    //console.log(selectedPlayersNames)

    const updatedFilteredSummaryStats = summaryStats.filter(stat => selectedPlayersNames.includes(stat.name))
    setFilteredSummaryStats(updatedFilteredSummaryStats)
    console.log(filteredSummaryStats)
    // playerSelect = playerSelect.filter(player => player.value !== playerFullName)
  }

  return (
    <div>
      <Select
        options={playerSelect}
        onChange={(option) => handleSelectedPlayerChange(option.value)}
        placeholder='Select player'
      />
    </div>
  )
}

export default SelectPlayer