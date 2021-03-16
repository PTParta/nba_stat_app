import React, { useState, useEffect } from 'react'
import playerService from './services/playerStats'
import teamService from './services/teams'
import playersService from './services/players'
import PlayerStats from './components/PlayerStats'
import Teams from './components/Teams'

function App() {
  const [players, setPlayers] = useState([])
  const [playerStats, setPlayerStats] = useState([])
  const [teams, setTeams] = useState([])

  useEffect(() => {
    playerService.getPlayerStats(2020, 237)
      .then((response) => {
        setPlayerStats(response.data.sort((a, b) => a.game.id - b.game.id))
      })
    teamService.getTeams()
      .then((response) => {
        setTeams(response.data)
      })
      playersService.getPlayers()
      .then((response) => {
        setPlayers(response)
      })

  }, [])
  /* console.log('players')
  console.log(players) */



  console.log('playerStats')
  console.log(playerStats)
  console.log()
  console.log()
  console.log('teams')
  console.log(teams)
  console.log()
  console.log()
  console.log('players')
  console.log(players)

  return (
    <div className="App">
      {/* {playerStats.map(playerStat =>
        <div key={playerStat.id}>{playerStat.game.date}</div>)} */}
      {/* {teams.length > 0
        ? <Teams teams={teams} />
        : <></>} */}

      {playerStats.length > 0
        ? <PlayerStats playerStats={playerStats} teams={teams} />
        : <></>}
    </div>
  );
}

export default App;
