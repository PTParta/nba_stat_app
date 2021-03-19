import React, { useState, useEffect } from 'react'
import playerStatService from './services/playerStats'
import teamService from './services/teams'
import playerService from './services/players'
import PlayerStats from './components/PlayerStats'
import Teams from './components/Teams'
import Select from 'react-select';

function App() {
  const [players, setPlayers] = useState([])
  const [playerStats, setPlayerStats] = useState([])
  const [teams, setTeams] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState('')
  const [selectedSeasons, setSelectedSeasons] = useState([])

  useEffect(() => {
    teamService.getTeams()
      .then((response) => {
        setTeams(response.data)
      })
    playerService.getPlayers()
      .then((response) => {
        setPlayers(response.map(player => ({ ...player, fullName: `${player.firstName} ${player.lastName}` }))
          .sort((a, b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0)))
      })
  }, [])

  const getPlayerStats = (playerFullName, seasons) => {

    const searchedPlayer = players.find(player => player.fullName === playerFullName)
    //console.log('searched player: ', searchedPlayer)
    //console.log('getting stats for', playerFullName)
    playerStatService.getPlayerStatsFromApi(seasons, searchedPlayer.apiId)
      .then((response) => {
        setPlayerStats(response.sort((a, b) =>
          new Date(a.game.date).getTime() - new Date(b.game.date).getTime())
        )
      })
  }
  //(Date(a.game.date) > Date(b.game.date)) ? 1 : (Date(b.game.date) > Date(a.game.date)) ? -1 : 0
  /* setPlayerStats(response.sort((a, b) => a.game.id - b.game.id */
  const playerSelect = players.map(player => ({ label: player.fullName, value: player.fullName }))

  let season = 2020
  const seasonSelect = []
  while (season >= 1980) {
    seasonSelect.push({ label: season.toString(), value: season.toString() })
    season--
  }

  //console.log('seasonSelect', seasonSelect)

  const handleSelectedPlayerChange = (playerFullName) => {
    //console.log('playerFullName', playerFullName)
    setSelectedPlayer(playerFullName)
    //console.log('selectedPlayer', selectedPlayer)
  }

  const handleSelectedSeasonsChange = (selectedSeasons) => {
    //console.log('selectedSeasons', selectedSeasons)
    setSelectedSeasons(selectedSeasons)
    //console.log('selectedSeasons state', selectedSeasons)
    //event.preventDefault()
    /* console.log('season', season)
    const newSelectedSeasons = selectedSeasons
    newSelectedSeasons.push(season)
    setSelectedSeasons(newSelectedSeasons)
    console.log('selectedSeasons', selectedSeasons) */
  }

  return (
    <div className="App">
      {playerStats.length > 0
        ? <PlayerStats playerStats={playerStats} teams={teams} />
        : <></>}
      <br></br>
      <Select
        options={playerSelect}
        onChange={(option) => handleSelectedPlayerChange(option.value)}
        //onChange={(option) => getPlayerStats(option.value)}
        placeholder='Select player'
      />
      <br></br>
      <Select
        isMulti
        options={seasonSelect}
        onChange={(options) => handleSelectedSeasonsChange(options.map(option => option.value))}
        //value={selectedSeason}
        closeMenuOnSelect={false}
        placeholder='Select season(s)'
      />
      <br></br>
      <div>selectedPlayer: {selectedPlayer}</div>
      <br></br>
      <div>selectedSeasons: {selectedSeasons.map(season =>
        <div key={season}>
          <p>{season}</p>
        </div>)}

      </div>
      <br></br>
      <button onClick={() => getPlayerStats(selectedPlayer, selectedSeasons)}>Get stats</button>
    </div>


  );
}

export default App;
