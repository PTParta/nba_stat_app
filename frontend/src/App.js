import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavigationBar from './components/NavigationBar'
import Players from './components/players/Players'
import Teams from './components/teams/Teams'

import {
  BrowserRouter as Router,
  Switch,
  Route
  /* Link,
  Redirect,
  useRouteMatch,
  Redirect,
  useHistory */
} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div style={{
        backgroundColor: "#17202A",
        height: '150vh',
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
              <Route path = '/players'>
                <Players />
              </Route>
              <Route path='/teams'>
                <Teams/>
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
