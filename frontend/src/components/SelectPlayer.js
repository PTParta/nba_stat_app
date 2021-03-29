import Select from 'react-select';

const SelectPlayer = ({ players, setSelectedPlayer }) => {

  const playerSelect = players.map(player => ({ label: player.fullName, value: player.fullName }))

  const handleSelectedPlayerChange = (playerFullName) => {
    setSelectedPlayer(playerFullName)
  }
  return (
    <div>

      <table>
        <tbody>
          <tr>
            <td width={'300px'}>
              <Select
                options={playerSelect}
                onChange={(option) => handleSelectedPlayerChange(option.value)}
                placeholder='Select player'
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SelectPlayer