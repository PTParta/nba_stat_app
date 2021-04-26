import Select from 'react-select'

const SelectPlayer = ({
  summaryStats,
  selectedPlayersNames,
  setSelectedPlayersNames,
  filteredSummaryStats,
  setFilteredSummaryStats

}) => {

  let playerSelect = summaryStats.sort((a,b)=>b.split(' ')[1]).map(stat => ({ label: stat.name, value: stat.name }))

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