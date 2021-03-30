import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import teamService from './services/teams'
import playerService from './services/players'
import PlayerStats from './components/PlayerStats'
import SelectPlayer from './components/SelectPlayer'
import SelectSeasons from './components/SelectSeasons'
//import NavigationBar from './components/NavigationBar'
import GetStats from './components/GetStats'
import SelectRegularPost from './components/SelectRegularPost'
import SelectStats from './components/SelectStats'
import Logo from './components/Logo'


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
  const [selectedFirstSeason, setSelectedFirstSeason] = useState(1980)
  const [selectedLastSeason, setSelectedLastSeason] = useState(2020)
  const [regularSeasonSelected, setRegularSeasonSelected] = useState(true)
  const [postSeasonSelected, setPostSeasonSelected] = useState(false)

  const [ptsSelected, setPtsSelected] = useState(false)
  const [astSelected, setAstSelected] = useState(false)
  const [rebSelected, setRebSelected] = useState(false)
  const [drebSelected, setDrebSelected] = useState(false)
  const [orebSelected, setOrebSelected] = useState(false)
  const [blkSelected, setBlkSelected] = useState(false)
  const [stlSelected, setStlSelected] = useState(false)
  const [turnoverSelected, setTurnoverSelected] = useState(false)
  const [fgaSelected, setFgaSelected] = useState(false)
  const [fgmSelected, setFgmSelected] = useState(false)
  const [fg_pctSelected, setFg_pctSelected] = useState(false)
  const [fg3aSelected, setFg3aSelected] = useState(false)
  const [fg3mSelected, setFg3mSelected] = useState(false)
  const [fg3_pctSelected, setFg3_pctSelected] = useState(false)
  const [ftaSelected, setFtaSelected] = useState(false)
  const [ftmSelected, setFtmSelected] = useState(false)
  const [ft_pctSelected, setFt_pctSelected] = useState(false)
  const [pfSelected, setPfSelected] = useState(false)
  const [minSelected, setMinSelected] = useState(false)

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
      <div style={{
        backgroundColor: "#17202A",
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        textAlign: 'center'
      }}>
        <div className="container" style={{ /* display: 'flex' *//* , alignContent: 'center' */ paddingTop: '2vh', backgroundColor: "#17202A" }} >
          <Container>
            <Row>
              <Col>
                {playerStats.length === 0
                  ? <Logo />
                  : <></>}
              </Col>
            </Row>
            <br></br>
            <Row className="justify-content-md-center">
              <Col>{/* <NavigationBar /> */}
                {playerStats.length > 0
                  ? <PlayerStats
                    playerStats={playerStats}
                    teams={teams}
                    regularSeasonSelected={regularSeasonSelected}
                    postSeasonSelected={postSeasonSelected}
                    ptsSelected={ptsSelected}
                    astSelected={astSelected}
                    rebSelected={rebSelected}
                    drebSelected={drebSelected}
                    orebSelected={orebSelected}
                    blkSelected={blkSelected}
                    stlSelected={stlSelected}
                    turnoverSelected={turnoverSelected}
                    fgaSelected={fgaSelected}
                    fgmSelected={fgmSelected}
                    fg_pctSelected={fg_pctSelected}
                    fg3aSelected={fg3aSelected}
                    fg3mSelected={fg3mSelected}
                    fg3_pctSelected={fg3_pctSelected}
                    ftaSelected={ftaSelected}
                    ftmSelected={ftmSelected}
                    ft_pctSelected={ft_pctSelected}
                    pfSelected={pfSelected}
                    minSelected={minSelected}
                    selectedFirstSeason={selectedFirstSeason}
                    selectedLastSeason={selectedLastSeason}
                  />
                  : <></>}</Col>
            </Row>
            <br></br>
            <Row>
              <Col sm={2}></Col>
              <Col sm={4}>
                <SelectPlayer
                  players={players}
                  setSelectedPlayer={setSelectedPlayer}
                />
              </Col>
              <Col sm={4}>
                <GetStats
                  selectedPlayer={selectedPlayer}
                  players={players}
                  setPlayerStats={setPlayerStats}
                  regularSeasonSelected={regularSeasonSelected}
                  postSeasonSelected={postSeasonSelected}
                />
              </Col>
              <Col sm={2}></Col>
            </Row>
            <br></br>
            <Row>
              <Col sm={2}></Col>
              <SelectSeasons
                setSelectedFirstSeason={setSelectedFirstSeason}
                setSelectedLastSeason={setSelectedLastSeason}
                selectedFirstSeason={selectedFirstSeason}
                selectedLastSeason={selectedLastSeason}
              />
              <SelectRegularPost
                regularSeasonSelected={regularSeasonSelected}
                postSeasonSelected={postSeasonSelected}
                setRegularSeasonSelected={setRegularSeasonSelected}
                setPostSeasonSelected={setPostSeasonSelected}
              />
              <Col sm={2}></Col>
            </Row>
            <br></br>
            <Row>
              <Col sm={2}></Col>
              <Col sm={8}>
                <SelectStats
                  ptsSelected={ptsSelected}
                  setPtsSelected={setPtsSelected}
                  astSelected={astSelected}
                  setAstSelected={setAstSelected}
                  rebSelected={rebSelected}
                  setRebSelected={setRebSelected}
                  drebSelected={drebSelected}
                  setDrebSelected={setDrebSelected}
                  orebSelected={orebSelected}
                  setOrebSelected={setOrebSelected}
                  blkSelected={blkSelected}
                  setBlkSelected={setBlkSelected}
                  stlSelected={stlSelected}
                  setStlSelected={setStlSelected}
                  turnoverSelected={turnoverSelected}
                  setTurnoverSelected={setTurnoverSelected}
                  fgaSelected={fgaSelected}
                  setFgaSelected={setFgaSelected}
                  fgmSelected={fgmSelected}
                  setFgmSelected={setFgmSelected}
                  fg_pctSelected={fg_pctSelected}
                  setFg_pctSelected={setFg_pctSelected}
                  fg3aSelected={fg3aSelected}
                  setFg3aSelected={setFg3aSelected}
                  fg3mSelected={fg3mSelected}
                  setFg3mSelected={setFg3mSelected}
                  fg3_pctSelected={fg3_pctSelected}
                  setFg3_pctSelected={setFg3_pctSelected}
                  ftaSelected={ftaSelected}
                  setFtaSelected={setFtaSelected}
                  ftmSelected={ftmSelected}
                  setFtmSelected={setFtmSelected}
                  ft_pctSelected={ft_pctSelected}
                  setFt_pctSelected={setFt_pctSelected}
                  pfSelected={pfSelected}
                  setPfSelected={setPfSelected}
                  minSelected={minSelected}
                  setMinSelected={setMinSelected} />
              </Col>
              <Col sm={2}></Col>
            </Row>
          </Container>
        </div>
      </div >
    </Router >


  )
}

export default App;
