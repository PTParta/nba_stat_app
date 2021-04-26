import Select from 'react-select'

const SelectPlayer = ({
  percentileStats,
  selectedPlayersNames,
  setSelectedPlayersNames,
}) => {

  let playerSelect = percentileStats.map(stat => ({ label: stat.name, value: stat.name }))

  const handleSelectedPlayerChange = (playerFullName) => {
    const updatedSelectedPlayersNames = selectedPlayersNames
    updatedSelectedPlayersNames.push(playerFullName)
    setSelectedPlayersNames(updatedSelectedPlayersNames)
    console.log(selectedPlayersNames)
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