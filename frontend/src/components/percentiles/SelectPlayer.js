import Select from 'react-select'

const SelectPlayer = ({
  percentileStats,
  selectedPlayersNames,
  setSelectedPlayersNames,
  setAmountPlayersSelected,
  amountPlayersSelected
}) => {

  let playerNames = percentileStats.map(stat => stat.name)
  //Remove duplicate names
  playerNames = playerNames.filter((v, i, a) => a.indexOf(v) === i)

  let playerSelect = playerNames.map(stat => ({ label: stat, value: stat }))

  const handleSelectedPlayerChange = (playerFullName) => {
    const updatedSelectedPlayersNames = selectedPlayersNames
    updatedSelectedPlayersNames.push(playerFullName)
    setSelectedPlayersNames(updatedSelectedPlayersNames)
    setAmountPlayersSelected(amountPlayersSelected + 1)
    console.log(selectedPlayersNames.length)
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