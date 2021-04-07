import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Doughnut } from 'react-chartjs-2'
/* import trailingMeanService from '../../services/trailingMeans'
import colors from '../../styling/colors'
import Loader from 'react-loader-spinner' */
//import Logo from '../components/Logo'
import 'chartjs-plugin-labels'
import colors from '../../styling/colors'

const TeamStats = (
  {
    selectedTeam,
    teamStats,
    postSeasonSelected,
    perGameSelected,
    totalSelected
  }
) => {

  let playerTotalStats = []

  teamStats.forEach(teamStat => {
    const playerFullName = `${teamStat.player.first_name} ${teamStat.player.last_name}`
    if (playerTotalStats.find(playerTotalStat => playerTotalStat.name === playerFullName) === undefined) {
      const player = { name: playerFullName }
      playerTotalStats.push(player)
    }

  })

  const teamStatsFiltered = teamStats.filter(teamStat => teamStat.game.postseason === postSeasonSelected)

  playerTotalStats.forEach(playerTotalStat => {
    let playedGames = 0
    const playerStats = teamStatsFiltered
      .filter(teamStat => `${teamStat.player.first_name} ${teamStat.player.last_name}` === playerTotalStat.name)

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
      /* if (currentValue === null) {
        currentValue = 0
      } */
      let minutes = 0
      const timeSplit = currentValue.min.split(':')
      if (timeSplit.length === 1) {
        minutes = Number(currentValue.min)
      } else {
        const seconds = Number(timeSplit[0]) * 60 + Number(timeSplit[1])
        minutes = Math.floor(seconds / 60)
      }
      if (isNaN(minutes)) {
        minutes = 0
      }
      if (minutes !== 0) {
        playedGames++
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

    updatedPlayer.ptsPer = Math.round(totalPts / playedGames * 10) / 10
    updatedPlayer.astPer = Math.round(totalAst / playedGames * 10) / 10
    updatedPlayer.rebPer = Math.round(totalReb / playedGames * 10) / 10
    updatedPlayer.stlPer = Math.round(totalStl / playedGames * 10) / 10
    updatedPlayer.blkPer = Math.round(totalBlk / playedGames * 10) / 10
    updatedPlayer.turnoverPer = Math.round(totalTurnover / playedGames * 10) / 10
    updatedPlayer.pfPer = Math.round(totalPf / playedGames * 10) / 10
    updatedPlayer.minPer = Math.round(totalMin / playedGames * 10) / 10

    playerTotalStats = playerTotalStats.map(s => s.name === playerTotalStat.name ? updatedPlayer : s)
    //playerTotalStats = playerTotalStats.sort((a, b) => b.pts - a.pts)
  })
  //console.log('playerTotalStats', playerTotalStats.slice(0, 5)/* .map(playerTotalStat => playerTotalStat.name) */)


  const legend = {
    labels: {
      fontColor: 'white',
      fontSize: 12
    },
    position: 'right'
  }

  const plugins = {
    labels: {
      render: 'value',
      fontSize: 14,
      fontColor: 'black'
    }
  }

  const optionsTotalPoints = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total points',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsTotalAssists = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total assists',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsTotalRebounds = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total rebounds',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsTotalBlocks = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total blocks',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsTotalSteals = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total steals',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsTotalTurnovers = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total turnovers',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsTotalPersonalFouls = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total fouls',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsTotalMinutes = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total minutes',
      fontSize: 16,
      fontColor: 'white'
    }
  }

  const dataTotalPoints = {
    labels: playerTotalStats
      .sort((a, b) => b.pts - a.pts)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total points',
      data: playerTotalStats
        .sort((a, b) => b.pts - a.pts)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.pts),
      backgroundColor: [
        colors.orangeLine,
        colors.yellowLine,
        colors.greenLine,
        colors.magentaLine,
        colors.cyanLine,
      ],
      hoverOffset: 4
    }]
  }
  const dataTotalAssists = {
    labels: playerTotalStats
      .sort((a, b) => b.ast - a.ast)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total assists',
      data: playerTotalStats
        .sort((a, b) => b.ast - a.ast)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.ast),
      backgroundColor: [
        colors.orangeLine,
        colors.yellowLine,
        colors.greenLine,
        colors.magentaLine,
        colors.cyanLine,
      ],
      hoverOffset: 4
    }]
  }
  const dataTotalRebounds = {
    labels: playerTotalStats
      .sort((a, b) => b.reb - a.reb)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total rebounds',
      data: playerTotalStats
        .sort((a, b) => b.reb - a.reb)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.reb),
      backgroundColor: [
        colors.orangeLine,
        colors.yellowLine,
        colors.greenLine,
        colors.magentaLine,
        colors.cyanLine,
      ],
      hoverOffset: 4
    }]
  }
  const dataTotalBlocks = {
    labels: playerTotalStats
      .sort((a, b) => b.blk - a.blk)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total blocks',
      data: playerTotalStats
        .sort((a, b) => b.blk - a.blk)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.blk),
      backgroundColor: [
        colors.orangeLine,
        colors.yellowLine,
        colors.greenLine,
        colors.magentaLine,
        colors.cyanLine,
      ],
      hoverOffset: 4
    }]
  }
  const dataTotalSteals = {
    labels: playerTotalStats
      .sort((a, b) => b.stl - a.stl)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total steals',
      data: playerTotalStats
        .sort((a, b) => b.stl - a.stl)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.stl),
      backgroundColor: [
        colors.orangeLine,
        colors.yellowLine,
        colors.greenLine,
        colors.magentaLine,
        colors.cyanLine,
      ],
      hoverOffset: 4
    }]
  }
  const dataTotalTurnovers = {
    labels: playerTotalStats
      .sort((a, b) => b.turnover - a.turnover)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total turnovers',
      data: playerTotalStats
        .sort((a, b) => b.turnover - a.turnover)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.turnover),
      backgroundColor: [
        colors.orangeLine,
        colors.yellowLine,
        colors.greenLine,
        colors.magentaLine,
        colors.cyanLine,
      ],
      hoverOffset: 4
    }]
  }
  const dataTotalPersonalFouls = {
    labels: playerTotalStats
      .sort((a, b) => b.pf - a.pf)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total personal fouls',
      data: playerTotalStats
        .sort((a, b) => b.pf - a.pf)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.pf),
      backgroundColor: [
        colors.orangeLine,
        colors.yellowLine,
        colors.greenLine,
        colors.magentaLine,
        colors.cyanLine,
      ],
      hoverOffset: 4
    }]
  }
  const dataTotalMinutes = {
    labels: playerTotalStats
      .sort((a, b) => b.min - a.min)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total minutes',
      data: playerTotalStats
        .sort((a, b) => b.min - a.min)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.min),
      backgroundColor: [
        colors.orangeLine,
        colors.yellowLine,
        colors.greenLine,
        colors.magentaLine,
        colors.cyanLine,
      ],
      hoverOffset: 4
    }]
  }










  const optionsPerPoints = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Points per game',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsPerAssists = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Assists per game',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsPerRebounds = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Rebounds per game',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsPerBlocks = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Blocks per game',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsPerSteals = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Steals per game',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsPerTurnovers = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Turnovers per game',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsPerPersonalFouls = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Fouls per game',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsPerMinutes = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Minutes per game',
      fontSize: 16,
      fontColor: 'white'
    }
  }

  const dataPerPoints = {
    labels: playerTotalStats
      .sort((a, b) => b.ptsPer - a.ptsPer)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Points per game',
      data: playerTotalStats
        .sort((a, b) => b.ptsPer - a.ptsPer)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.ptsPer),
      backgroundColor: [
        colors.orangeLine,
        colors.yellowLine,
        colors.greenLine,
        colors.magentaLine,
        colors.cyanLine,
      ],
      hoverOffset: 4
    }]
  }
  const dataPerAssists = {
    labels: playerTotalStats
      .sort((a, b) => b.astPer - a.astPer)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Assists per game',
      data: playerTotalStats
        .sort((a, b) => b.astPer - a.astPer)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.astPer),
      backgroundColor: [
        colors.orangeLine,
        colors.yellowLine,
        colors.greenLine,
        colors.magentaLine,
        colors.cyanLine,
      ],
      hoverOffset: 4
    }]
  }
  const dataPerRebounds = {
    labels: playerTotalStats
      .sort((a, b) => b.rebPer - a.rebPer)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Rebounds per game',
      data: playerTotalStats
        .sort((a, b) => b.rebPer - a.rebPer)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.rebPer),
      backgroundColor: [
        colors.orangeLine,
        colors.yellowLine,
        colors.greenLine,
        colors.magentaLine,
        colors.cyanLine,
      ],
      hoverOffset: 4
    }]
  }
  const dataPerBlocks = {
    labels: playerTotalStats
      .sort((a, b) => b.blkPer - a.blkPer)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Blocks per game',
      data: playerTotalStats
        .sort((a, b) => b.blkPer - a.blkPer)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.blkPer),
      backgroundColor: [
        colors.orangeLine,
        colors.yellowLine,
        colors.greenLine,
        colors.magentaLine,
        colors.cyanLine,
      ],
      hoverOffset: 4
    }]
  }
  const dataPerSteals = {
    labels: playerTotalStats
      .sort((a, b) => b.stlPer - a.stlPer)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Steals per game',
      data: playerTotalStats
        .sort((a, b) => b.stlPer - a.stlPer)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.stlPer),
      backgroundColor: [
        colors.orangeLine,
        colors.yellowLine,
        colors.greenLine,
        colors.magentaLine,
        colors.cyanLine,
      ],
      hoverOffset: 4
    }]
  }
  const dataPerTurnovers = {
    labels: playerTotalStats
      .sort((a, b) => b.turnoverPer - a.turnoverPer)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Turnovers per game',
      data: playerTotalStats
        .sort((a, b) => b.turnoverPer - a.turnoverPer)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.turnoverPer),
      backgroundColor: [
        colors.orangeLine,
        colors.yellowLine,
        colors.greenLine,
        colors.magentaLine,
        colors.cyanLine,
      ],
      hoverOffset: 4
    }]
  }
  const dataPerPersonalFouls = {
    labels: playerTotalStats
      .sort((a, b) => b.pfPer - a.pfPer)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Personal fouls per game',
      data: playerTotalStats
        .sort((a, b) => b.pfPer - a.pfPer)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.pfPer),
      backgroundColor: [
        colors.orangeLine,
        colors.yellowLine,
        colors.greenLine,
        colors.magentaLine,
        colors.cyanLine,
      ],
      hoverOffset: 4
    }]
  }
  const dataPerMinutes = {
    labels: playerTotalStats
      .sort((a, b) => b.minPer - a.minPer)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Minutes per game',
      data: playerTotalStats
        .sort((a, b) => b.minPer - a.minPer)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.minPer),
      backgroundColor: [
        colors.orangeLine,
        colors.yellowLine,
        colors.greenLine,
        colors.magentaLine,
        colors.cyanLine,
      ],
      hoverOffset: 4
    }]
  }







  return (
    <div>
      <div className='chart'>
        {teamStats.length > 0 && totalSelected
          ? <>
            <Row>
              <Col sm={4}>
              </Col>
              {/* <br></br> */}
              <Col sm={4}>
              </Col>
              <Col sm={4}>
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Col sm={6}>
                <Doughnut
                  data={dataTotalPoints}
                  options={optionsTotalPoints}
                />
              </Col>
              <Col sm={6}>
                <Doughnut
                  data={dataTotalAssists}
                  options={optionsTotalAssists}
                />
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Col sm={6}>
                <Doughnut
                  data={dataTotalRebounds}
                  options={optionsTotalRebounds}
                />
              </Col>

              <Col sm={6}>
                <Doughnut
                  data={dataTotalBlocks}
                  options={optionsTotalBlocks}
                />
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br><Row>
              <Col sm={6}>
                <Doughnut
                  data={dataTotalSteals}
                  options={optionsTotalSteals}
                />
              </Col>
              <Col sm={6}>
                <Doughnut
                  data={dataTotalTurnovers}
                  options={optionsTotalTurnovers}
                />
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br><Row>
              <Col sm={6}>
                <Doughnut
                  data={dataTotalPersonalFouls}
                  options={optionsTotalPersonalFouls}
                />
              </Col>
              <Col sm={6}>
                <Doughnut
                  data={dataTotalMinutes}
                  options={optionsTotalMinutes}
                />
              </Col>
            </Row>
          </>
          : <></>}


        {teamStats.length > 0 && perGameSelected
          ? <>
            <Row>
              <Col sm={4}>
              </Col>
              {/* <br></br> */}
              <Col sm={4}>
              </Col>
              <Col sm={4}>
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Col sm={6}>
                <Doughnut
                  data={dataPerPoints}
                  options={optionsPerPoints}
                />
              </Col>
              <Col sm={6}>
                <Doughnut
                  data={dataPerAssists}
                  options={optionsPerAssists}
                />
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Col sm={6}>
                <Doughnut
                  data={dataPerRebounds}
                  options={optionsPerRebounds}
                />
              </Col>

              <Col sm={6}>
                <Doughnut
                  data={dataPerBlocks}
                  options={optionsPerBlocks}
                />
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br><Row>
              <Col sm={6}>
                <Doughnut
                  data={dataPerSteals}
                  options={optionsPerSteals}
                />
              </Col>
              <Col sm={6}>
                <Doughnut
                  data={dataPerTurnovers}
                  options={optionsPerTurnovers}
                />
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br><Row>
              <Col sm={6}>
                <Doughnut
                  data={dataPerPersonalFouls}
                  options={optionsPerPersonalFouls}
                />
              </Col>
              <Col sm={6}>
                <Doughnut
                  data={dataPerMinutes}
                  options={optionsPerMinutes}
                />
              </Col>
            </Row>
          </>
          : <></>}




      </div>
    </div >
  )
}

export default TeamStats