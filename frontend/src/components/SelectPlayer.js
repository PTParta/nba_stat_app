import Select from 'react-select';

const SelectPlayer = ({ players, setSelectedPlayer }) => {

  const playerSelect = players.map(player => ({ label: player.fullName, value: player.fullName }))

  const handleSelectedPlayerChange = (playerFullName) => {
    setSelectedPlayer(playerFullName)
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