import React from 'react'
import { /* Row, Col,  */Button } from 'react-bootstrap'
/* import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useRouteMatch,
  useHistory
} from 'react-router-dom' */

const Reset = ({
  setPlayersForSelectedSeason,
  setSelectedSeason,
  setStatsForSelectedPlayers
}) => {
  //const history = useHistory()
  const resetPlayerComparison = () => {
    //history.push('/compareplayers')
    setPlayersForSelectedSeason([])
    setSelectedSeason('')
    setStatsForSelectedPlayers([])


  }

  return (
    <div>
      <Button onClick={() => resetPlayerComparison()}>
      Reset

      </Button>
    </div>
  )
}

export default Reset
