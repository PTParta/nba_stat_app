import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavigationBar from './components/NavigationBar'
import Players from './components/players/Players'
import Teams from './components/teams/Teams'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  /* Link,
  Redirect,
  useRouteMatch,
  Redirect,
  useHistory */
} from 'react-router-dom'
import ReactGa from 'react-ga'
require('dotenv').config()


function App() {

  const [fetchingData, setFetchingData] = useState(false)

  useEffect(() => {

    ReactGa.initialize(process.env.GA_TRACKING_CODE)
    ReactGa.pageview(window.location.pathname/*  + window.location.search */)

  }, [])



  return (
    <Router>
      <div style={{
        backgroundColor: "#17202A",
        height: '300vh',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center'/* ,
        textAlign: 'center' */
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
            <br></br>
            <Switch>
              <Route path='/players'>
                <Players
                  fetchingData={fetchingData}
                  setFetchingData={setFetchingData}
                />
              </Route>
              <Route path='/teams'>
                <Teams
                  fetchingData={fetchingData}
                  setFetchingData={setFetchingData}
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
