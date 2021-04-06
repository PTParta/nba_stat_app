import React from 'react'
/* import { Container, Row, Col } from 'react-bootstrap' */
import { Doughnut } from 'react-chartjs-2'
/* import trailingMeanService from '../../services/trailingMeans'
import colors from '../../styling/colors'
import Loader from 'react-loader-spinner' */
//import Logo from '../components/Logo'

const TeamStats = (
  {
    selectedTeam,
    teamStats
  }
) => {

  let playerTotalStats = []

  let players = []
  let totalPoints = []

  teamStats.forEach(teamStat => {
    const playerFullName = `${teamStat.player.first_name} ${teamStat.player.last_name}`
    if (playerTotalStats.find(playerTotalStat => playerTotalStat.name === playerFullName) === undefined) {
      const player = { name: playerFullName }
      playerTotalStats.push(player)
    }

  })

  playerTotalStats.forEach(playerTotalStat => {
    const playerStats = teamStats.filter(teamStat => `${teamStat.player.first_name} ${teamStat.player.last_name}` === playerTotalStat.name)

    const totalPts = playerStats.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.pts
    }, 0)
    const totalAst = playerStats.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.ast
    }, 0)
    const totalReb = playerStats.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.reb
    }, 0)
    const totalStl = playerStats.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.stl
    }, 0)
    const totalBlk = playerStats.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.blk
    }, 0)
    const totalTurnover = playerStats.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.turnover
    }, 0)
    const totalPf = playerStats.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.pf
    }, 0)
    const totalMin = playerStats.reduce((accumulator, currentValue) => {
      const timeSplit = currentValue.min.split(':')
      const seconds = Number(timeSplit[0]) * 60 + Number(timeSplit[1])
      let minutes = Math.floor(seconds / 60)
      if (isNaN(minutes)) {
        minutes = 0
      }
      return accumulator + minutes
    }, 0)

    const updatedPlayer = playerTotalStat
    updatedPlayer.pts = totalPts
    updatedPlayer.ast = totalAst
    updatedPlayer.reb = totalReb
    updatedPlayer.stl = totalStl
    updatedPlayer.blk = totalBlk
    updatedPlayer.turnover = totalTurnover
    updatedPlayer.pf = totalPf
    updatedPlayer.min = totalMin

    playerTotalStats = playerTotalStats.map(s => s.name === playerTotalStat.name ? updatedPlayer : s)
    playerTotalStats = playerTotalStats.sort((a, b) => b.pts - a.pts)
  })
  console.log('playerTotalStats', playerTotalStats)

  players.forEach(player => {
    const playerStats = teamStats.filter(teamStat => `${teamStat.player.first_name} ${teamStat.player.last_name}` === player)
    let totalPointsOnePlayer = 0
    playerStats.forEach(playerStat => {
      totalPointsOnePlayer += playerStat.pts
    })
    totalPoints.push(totalPointsOnePlayer)
  })

  const getPlayerTotalPoints = (player) => {
    const playerStats = teamStats.filter(teamStat => `${teamStat.player.first_name} ${teamStat.player.last_name}` === player)
    let totalPointsOnePlayer = 0
    playerStats.forEach(playerStat => {
      totalPointsOnePlayer += playerStat.pts
    })
    totalPoints.push(totalPointsOnePlayer)
    return totalPointsOnePlayer
  }

  const data = {
    labels: ['Jayson Tatum', 'Tristan Thompson', 'Daniel Theis'],
    datasets: [{
      label: 'My First Dataset',
      data: [1109, 286, 397],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  }

  return (
    <div>
      <br></br>
      {players.map(player =>
        <div key={player} style={{ color: 'white', textAlign: 'center' }}>{player} {getPlayerTotalPoints(player)}</div>)}
      <br></br>
      <div className='chart'>
        <Doughnut
          data={data}
        /* options={options} */
        />
      </div>

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