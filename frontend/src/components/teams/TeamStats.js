import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'
import trailingMeanService from '../../services/trailingMeans'
import colors from '../../styling/colors'
import Loader from 'react-loader-spinner'
//import Logo from '../components/Logo'

const TeamStats = (
  {
    selectedTeam,
    teamStats
  }
) => {

  let players = []

  teamStats.forEach(teamStat => {
    const playerFullName = `${teamStat.player.first_name} ${teamStat.player.last_name}`
    if (!players.includes(playerFullName)) {
      players.push(playerFullName)
    }
  })

  return (
    <div>
      {players.map(player =>
        <div key={player} style={{color:'white'}}>{player}</div>)}
      {/* <Container style={{ color: 'white', paddingLeft: '30px' }}>
        <Row>
          {fetchingData
            ? <Col>
              <Loader type="Grid" color="white" height="25" width="25" />
              <br></br>
            </Col>
            : <>
              <Col>
                <div>
                  {playerStats[0].player.first_name} {playerStats[0].player.last_name}, {startSeasonToShow} - {endSeasonToShow}, {games} games
              </div>
              </Col>
            </>}
        </Row>
      </Container>
      <div className='chart'>
        <Line
          data={data}
          options={options}
        />
      </div> */}
    </div>
  )
}

export default TeamStats