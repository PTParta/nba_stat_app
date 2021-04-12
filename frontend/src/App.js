import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
//import NavigationBar from './components/NavigationBar'
import Players from './components/players/Players'
import Teams from './components/teams/Teams'
import TopTen from './components/topTen/TopTen'
import PlayerComparison from './components/playerComparison/PlayerComparison'
import playerService from './services/players'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
  /*  Redirect,
   useRouteMatch,
   Redirect,
   useHistory */
} from 'react-router-dom'

function App() {

  const [fetchingData, setFetchingData] = useState(false)
  const [players, setPlayers] = useState([])

  useEffect(() => {

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
        height: '400vh',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center'/* ,
        textAlign: 'center' */
      }}>
        <div className="container" style={{ paddingTop: '2vh', backgroundColor: "#17202A" }} >
          <Container>
            {/* <Row>
              <Col sm={2}></Col>
              <Col sm={8}>
                <NavigationBar />
              </Col>
              <Col sm={2}></Col>
            </Row> */}
            {/* <div style={{ backgroundColor:'white' }}> */}
              <Row >
                <Col sm={2}></Col>
                <Col sm={1} xs={3}>
                  <Link to='/players'>players</Link>
                </Col>
                <Col sm={1} xs={3}>
                  <Link to='/teams'>teams</Link>
                </Col>
                <Col sm={3} xs={3}>
                  <Link to='/compareplayers'>compare players</Link>
                </Col>
                <Col sm={4}></Col>
              </Row>
            {/* </div> */}
            <br></br>
            <Switch>
              <Route path='/players'>
                <Players
                  fetchingData={fetchingData}
                  setFetchingData={setFetchingData}
                  players={players}
                  setPlayers={setPlayers}
                />
              </Route>
              <Route path='/teams'>
                <Teams
                  fetchingData={fetchingData}
                  setFetchingData={setFetchingData}
                />
              </Route>
              <Route path='/topten'>
                <TopTen
                  fetchingData={fetchingData}
                  setFetchingData={setFetchingData}
                />
              </Route>
              <Route path='/compareplayers'>
                <PlayerComparison
                  fetchingData={fetchingData}
                  setFetchingData={setFetchingData}
                  players={players}
                />
              </Route>
              <Route path='/'>
                <Redirect to='/players' />
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
