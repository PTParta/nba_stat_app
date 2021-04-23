import React from 'react'
import { Button } from 'react-bootstrap'


const Reset = ({
  setPlayersForSelectedSeason,
  setSelectedSeason,
  setStatsForSelectedPlayers
}) => {
  const resetPlayerComparison = () => {
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
