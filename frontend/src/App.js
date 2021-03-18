import React, { useState, useEffect } from 'react'
//import playerService from './services/playerStats'
//import teamService from './services/teams'
import playersService from './services/players'
//import PlayerStats from './components/PlayerStats'
//import Teams from './components/Teams'

const Players = ({ players, playerFilter/* , handleRemove */ }) => {
  const filteredPlayers = players.filter(player =>
    player.fullName.toLowerCase().includes(playerFilter.toLowerCase()))

  return (
    < div >
      {filteredPlayers.map(player =>
        <div key={player.id} >
          <table>
            <tbody>
              <tr>
                <td>{player.apiId} {player.firstName} {player.lastName}</td>
                <td>
                  {/* <button onClick={() => {
                      if (window.confirm(`Delete ${person.name} ?`)) {
                        handleRemove(person.id)
                      }
                    }}>delete</button> */}
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      )}
    </div >
  )
}
const PlayerFilter = ({ handleFilterChange }) => {
  return (
    <div>filter shown with <input onChange={handleFilterChange} /></div>
  )
}




function App() {
  const [players, setPlayers] = useState([])
  const [playerFilter, setPlayerFilter] = useState('')
  //const [playerStats, setPlayerStats] = useState([])
  //const [teams, setTeams] = useState([])

  useEffect(() => {
    /* playerService.getPlayerStats(2020, 237)
      .then((response) => {
        setPlayerStats(response.data.sort((a, b) => a.game.id - b.game.id))
      })
    teamService.getTeams()
      .then((response) => {
        setTeams(response.data)
      }) */
    playersService.getPlayers()
      .then((response) => {
        setPlayers(response.map(player => ({ ...player, fullName: `${player.firstName} ${player.lastName}` }))
          .sort((a, b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0)))
      })
    /*  const playersWithFullNames = players.map(player => ({ ...player, fullName: `${player.firstName} ${player.lastName}` }))
     setPlayers(playersWithFullNames) */

  }, [])
  /* console.log('players')
  console.log(players) */



  /* console.log('playerStats')
  console.log(playerStats)
  console.log()
  console.log()
  console.log('teams')
  console.log(teams)
  console.log()
  console.log() */
  /* console.log('players')
  console.log(players) */



  const handleFilterChange = (event) => {
    //console.log(event.target.value)
    setPlayerFilter(event.target.value)
  }

  return (
    <div className="App">
      {/* {playerStats.map(playerStat =>
        <div key={playerStat.id}>{playerStat.game.date}</div>)} */}
      {/* {teams.length > 0
        ? <Teams teams={teams} />
        : <></>} */}

      {/* {playerStats.length > 0
        ? <PlayerStats playerStats={playerStats} teams={teams} />
        : <></>} */}
      {/* {players.length > 0
        ? <div>{players[0].firstName}</div>
        : <></>
      }
      {players.map(player =>
        <div key={player.id}>
          <p>{player.firstName} {player.lastName}</p>
        </div>)} */}
      <PlayerFilter handleFilterChange={handleFilterChange} />
      <br></br>
      <Players players={players} playerFilter={playerFilter} />
    </div>

  );
}

export default App;
