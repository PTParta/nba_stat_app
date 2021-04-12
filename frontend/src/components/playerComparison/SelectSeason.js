import Select from 'react-select'
import playerService from '../../services/players'


const SelectSeason = ({
  selectedSeason,
  setSelectedSeason,
  fetchingData,
  setFetchingData,
  setPlayersForSelectedSeason,
  players
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
    //const searchedTeam = teams.find(team => team.name === selectedTeam)
    playerService.getPlayersForASeason(event.value)
      .then((response) => {
        //console.log(response)
        const filteredPlayers = players.filter(player => response.includes(player.apiId))
        setPlayersForSelectedSeason(filteredPlayers.map(player => ({ ...player, fullName: `${player.firstName} ${player.lastName}` }))
          .sort((a, b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0)))
        setFetchingData(false)
        //console.log('filteredPlayers', filteredPlayers)
      })
  }

  return (
    <>
      <Select
        options={seasonSelectDescending}
        //onChange={(event) => setSelectedSeason(event.value)}
        onChange={(event) => handleSelectedSeasonChange(event)}
        closeMenuOnSelect={true}
        placeholder={selectedSeason}
      />

    </>
  )
}

export default SelectSeason