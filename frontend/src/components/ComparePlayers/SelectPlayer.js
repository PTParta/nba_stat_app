import Select from 'react-select'

const SelectPlayer = ({
  summaryStats,
  selectedPlayersNames,
  setSelectedPlayersNames,
  filteredSummaryStats,
  setFilteredSummaryStats

}) => {

  let playerNames = summaryStats.map(stat => stat.name)
  //Remove duplicate names
  playerNames = playerNames.filter((v, i, a) => a.indexOf(v) === i)

  let playerSelect = playerNames.map(stat => ({ label: stat, value: stat }))

  const handleSelectedPlayerChange = (playerFullName) => {
    const updatedSelectedPlayersNames = selectedPlayersNames
    updatedSelectedPlayersNames.push(playerFullName)
    setSelectedPlayersNames(updatedSelectedPlayersNames)

    const updatedFilteredSummaryStats = summaryStats.filter(stat => selectedPlayersNames.includes(stat.name))
    setFilteredSummaryStats(updatedFilteredSummaryStats)
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