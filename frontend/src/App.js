import React, { useState, useEffect } from 'react'
import teamService from './services/teams'
import playerService from './services/players'
import PlayerStats from './components/PlayerStats'
import SelectPlayer from './components/SelectPlayer'
import SelectSeasons from './components/SelectSeasons'
import NavigationBar from './components/NavigationBar'
import GetStats from './components/GetStats'
import SelectRegularPost from './components/SelectRegularPost'
//import Teams from './components/Teams'

import {
  BrowserRouter as Router,
  /*Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  Redirect,
  useHistory */
} from 'react-router-dom'

function App() {
  const [players, setPlayers] = useState([])
  const [playerStats, setPlayerStats] = useState([])
  const [teams, setTeams] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState('')
  const [selectedSeasons, setSelectedSeasons] = useState([])
  const [regularSeasonSelected, setRegularSeasonSelected] = useState(false)
  const [postSeasonSelected, setPostSeasonSelected] = useState(false)

  useEffect(() => {
    teamService.getTeams()
      .then((response) => {
        setTeams(response.data)
      })
    //Player sorting should be done in the database query?
    playerService.getPlayers()
      .then((response) => {
        setPlayers(response.map(player => ({ ...player, fullName: `${player.firstName} ${player.lastName}` }))
          .sort((a, b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0)))
      })
  }, [])

  return (
    <Router>
      <div style={{ backgroundColor: "#17202A" }}>
        <div className="container" style={{ backgroundColor: "#17202A" }} >
          <NavigationBar />
          {playerStats.length > 0
            ? <PlayerStats
              playerStats={playerStats}
              teams={teams}
              selectedSeasons={selectedSeasons}
              regularSeasonSelected={regularSeasonSelected}
              postSeasonSelected={postSeasonSelected}
            />
            : <></>}
          <br></br>
          <SelectPlayer
            players={players}
            setSelectedPlayer={setSelectedPlayer}
          />
          <br></br>
          <SelectSeasons
            setSelectedSeasons={setSelectedSeasons}
          />
          <br></br>
          <SelectRegularPost
            regularSeasonSelected={regularSeasonSelected}
            postSeasonSelected={postSeasonSelected}
            setRegularSeasonSelected={setRegularSeasonSelected}
            setPostSeasonSelected={setPostSeasonSelected}
          />
          <br></br>
          <GetStats
            selectedPlayer={selectedPlayer}
            selectedSeasons={selectedSeasons}
            players={players}
            setPlayerStats={setPlayerStats}
            regularSeasonSelected={regularSeasonSelected}
            postSeasonSelected={postSeasonSelected}
          />
          <br></br>
          <br></br>
        </div>
      </div>
    </Router>
  );
}

export default App;
