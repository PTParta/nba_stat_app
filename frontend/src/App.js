import React, { useState, useEffect } from 'react'
import playerStatService from './services/playerStats'
import teamService from './services/teams'
import playerService from './services/players'
import PlayerStats from './components/PlayerStats'
import Teams from './components/Teams'
import Select from 'react-select';
import { Button, Navbar, Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  /*Switch,
  Route, */
  Link,
  /* Redirect,
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

    playerStatService.getPlayerStatsFromDB(seasons, searchedPlayer.apiId)
      .then((response) => {
        setPlayerStats(response.data.sort((a, b) =>
          new Date(a.game.date).getTime() - new Date(b.game.date).getTime())
        )
      })
  }
  const playerSelect = players.map(player => ({ label: player.fullName, value: player.fullName }))

  let season = 2020
  const seasonSelect = []
  while (season >= 1980) {
    seasonSelect.push({ label: season.toString(), value: season.toString() })
    season--
  }

  const handleSelectedPlayerChange = (playerFullName) => {
    setSelectedPlayer(playerFullName)
  }

  const handleSelectedSeasonsChange = (selectedSeasons) => {
    setSelectedSeasons(selectedSeasons)
  }

  const padding = {
    padding: 5
  }

  return (
    <Router>
      <div className="container">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#" as="span">
                <Link style={padding} to="/playerstats">player stats</Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link style={padding} to="/compareplayers">compare players</Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link style={padding} to="/teamstats">team stats</Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link style={padding} to="/compareteams">compare teams</Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <Link style={padding} to="/teamstatsdistribution">team stats distribution</Link>
              </Nav.Link>
              {/* <Nav.Link href="#" as="span">
              {user
                ? <em>{user} logged in</em>
                : <Link to="/login">login</Link>
              }
            </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {playerStats.length > 0
          ? <PlayerStats playerStats={playerStats} teams={teams} selectedSeasons={selectedSeasons} />
          : <></>}
        <br></br>
        <Select
          options={playerSelect}
          onChange={(option) => handleSelectedPlayerChange(option.value)}
          placeholder='Select player'
        />
        <br></br>
        <Select
          isMulti
          options={seasonSelect}
          onChange={(options) => handleSelectedSeasonsChange(options.map(option => option.value))}
          closeMenuOnSelect={false}
          placeholder='Select season(s)'
        />
        <br></br>
        <Button variant='primary' onClick={() => getPlayerStats(selectedPlayer, selectedSeasons)}>Get stats</Button>
        <br></br>
        <br></br>
        {/* <div>selectedPlayer: {selectedPlayer}</div>
        <br></br>
        <div>selectedSeasons: {selectedSeasons.map(season =>
          <div key={season}>
            <p>{season}</p>
          </div>)}
        </div> */}
      </div>
    </Router>
  );
}

export default App;
