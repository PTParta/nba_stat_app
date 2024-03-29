import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavigationBar from './components/common/NavigationBar'
import Players from './components/players/Players'
import Teams from './components/teams/Teams'
import TopTen from './components/topTen/TopTen'
import Contact from './components/contact/Contact'
import ComparePlayers from './components/ComparePlayers/ComparePlayers'
import Percentiles from './components/percentiles/Percentiles'
import playerService from './services/players'
import teamService from './services/teams'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  /*Link
    Redirect,
   useRouteMatch,
   Redirect,
   useHistory */
} from 'react-router-dom'

function App() {

  const [fetchingData, setFetchingData] = useState(false)
  const [players, setPlayers] = useState([])
  const [teams, setTeams] = useState([])

  useEffect(() => {
    //Player sorting should be done in the database query?
    playerService.getPlayers()
      .then((response) => {
        setPlayers(response.map(player => ({ ...player, fullName: `${player.firstName} ${player.lastName}` }))
          .sort((a, b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0)))
      })
    teamService.getTeamsFromDatabase()
      .then((response) => {
        setTeams(response.sort((a, b) => (a.city > b.city) ? 1 : ((b.city > a.city) ? -1 : 0)))
      })
  }, [])


  return (
    <Router>
      <div style={{
        backgroundColor: "#17202A",
        /* height: '1500vh', */
        minHeight: '100vh',
        display: 'flex',
        /* flexDirection: 'column', */
        alignContent: 'center'
      }}>
        <div className="container" style={{ paddingTop: '2vh', backgroundColor: "#17202A" }} >
          <Container>
            <Row>
              <Col sm={2}></Col>
              <Col sm={8}>
                <NavigationBar />
              </Col>
              <Col sm={2}></Col>
            </Row>
            {/* <div style={{ backgroundColor:'white' }}> */}
            {/*  <Row align="left">
              <Col sm={2}></Col>
              <Col sm={2} xs={3}>
                <Link to='/players'>player career</Link>
              </Col>

              <Col sm={2} xs={3}>
                <Link to='/topplayers'>top players</Link>
              </Col>
              <Col sm={2} xs={3}>
                <Link to='/compareplayers'>compare players</Link>
              </Col>
              <Col sm={2} xs={3} align="left">
                <Link to='/teams'>teams</Link>
              </Col>

              <Col sm={2} xs={3} align="left">
                <Link to='/contactus'>contact us</Link>
              </Col>
              <Col sm={2}></Col>
            </Row> */}
            {/* </div> */}
            <br></br>
            <Switch>
              <Route path='/playercareer'>
                <Players
                  fetchingData={fetchingData}
                  setFetchingData={setFetchingData}
                  players={players}
                  setPlayers={setPlayers}
                  teams={teams}
                />
              </Route>
              <Route path='/teams'>
                <Teams
                  fetchingData={fetchingData}
                  setFetchingData={setFetchingData}
                  teams={teams}
                />
              </Route>
              <Route path='/topplayers'>
                <TopTen
                  fetchingData={fetchingData}
                  setFetchingData={setFetchingData}
                />
              </Route>
              <Route path='/contactus'>
                <Contact
                  fetchingData={fetchingData}
                  setFetchingData={setFetchingData}
                />
              </Route>
              <Route path='/compareplayers'>
                <ComparePlayers
                  fetchingData={fetchingData}
                  setFetchingData={setFetchingData}
                  players={players}
                />
              </Route>
              <Route path='/percentiles'>
                <Percentiles
                  fetchingData={fetchingData}
                  setFetchingData={setFetchingData}
                />
              </Route>
              <Route path='/'>
                <Redirect to='/playercareer' />
              </Route>
            </Switch>
            <br></br>

          </Container>
        </div>
      </div >
    </Router >
  )
}

export default App;
