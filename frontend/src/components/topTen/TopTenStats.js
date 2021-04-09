import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'
import 'chartjs-plugin-labels'
import colors from '../../styling/colors'

const TopTenStats = (
  {
    topTenStats,
    postSeasonSelected,
    perGameSelected,
    totalSelected,
    per36Selected
  }
) => {

  //filter out bad data where player is not defined
  topTenStats = topTenStats.filter(topTenStat => topTenStat.player !== undefined)

  let playerTopTenStats = []
  topTenStats.forEach(topTenStat => {
    const playerFullName = `${topTenStat.player.first_name} ${topTenStat.player.last_name}`
    if (playerTopTenStats.find(playerTotalStat => playerTotalStat.name === playerFullName) === undefined) {
      const player = { name: playerFullName }
      playerTopTenStats.push(player)
      /* console.log(i, player)
      i++ */
    }
  })

  const topTenStatsFiltered = topTenStats.filter(teamStat => teamStat.game.postseason === postSeasonSelected)

  playerTopTenStats.forEach(playerTotalStat => {
    let playedGames = 0
    const playerStats = topTenStatsFiltered
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

    //Don't calculate per 36 min stats if minutes per game is too low
    if (updatedPlayer.minPer >= 10) {
      updatedPlayer.ptsPer36 = Math.round(updatedPlayer.ptsPer / updatedPlayer.minPer * 36 * 10) / 10
      updatedPlayer.astPer36 = Math.round(updatedPlayer.astPer / updatedPlayer.minPer * 36 * 10) / 10
      updatedPlayer.rebPer36 = Math.round(updatedPlayer.rebPer / updatedPlayer.minPer * 36 * 10) / 10
      updatedPlayer.stlPer36 = Math.round(updatedPlayer.stlPer / updatedPlayer.minPer * 36 * 10) / 10
      updatedPlayer.blkPer36 = Math.round(updatedPlayer.blkPer / updatedPlayer.minPer * 36 * 10) / 10
      updatedPlayer.turnoverPer36 = Math.round(updatedPlayer.turnoverPer / updatedPlayer.minPer * 36 * 10) / 10
      updatedPlayer.pfPer36 = Math.round(updatedPlayer.pfPer / updatedPlayer.minPer * 36 * 10) / 10
    }


    playerTopTenStats = playerTopTenStats.map(s => s.name === playerTotalStat.name ? updatedPlayer : s)
  })


  const legend = {
    labels: {
      fontColor: 'white',
      fontSize: 12
    },
    position: 'right',
    display: false
  }

  const plugins = {
    labels: false
  }

  const scales = {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontColor: 'white',
        fontSize: 14
      }
    }],
    xAxes: [{
      ticks: {
        fontColor: 'white',
        fontSize: 14
      }
    }]
  }

  const backgroundColor =
    [
      colors.orangeLine,
      colors.yellowLine,
      colors.greenLine,
      colors.magentaLine,
      colors.cyanLine,
      colors.orangeLine,
      colors.yellowLine,
      colors.greenLine,
      colors.magentaLine,
      colors.cyanLine,
      colors.orangeLine,
      colors.yellowLine,
      colors.greenLine,
      colors.magentaLine,
      colors.cyanLine,
      colors.orangeLine,
      colors.yellowLine,
      colors.greenLine,
      colors.magentaLine,
      colors.cyanLine,

    ]

  const optionsTotalPoints = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total points',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsTotalAssists = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total assists',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsTotalRebounds = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total rebounds',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsTotalBlocks = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total blocks',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsTotalSteals = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total steals',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsTotalTurnovers = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total turnovers',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsTotalPersonalFouls = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total fouls',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsTotalMinutes = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total minutes',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }

  const dataTotalPoints = {
    labels: playerTopTenStats
      .sort((a, b) => b.pts - a.pts)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total points',
      data: playerTopTenStats
        .sort((a, b) => b.pts - a.pts)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.pts),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataTotalAssists = {
    labels: playerTopTenStats
      .sort((a, b) => b.ast - a.ast)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total assists',
      data: playerTopTenStats
        .sort((a, b) => b.ast - a.ast)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.ast),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataTotalRebounds = {
    labels: playerTopTenStats
      .sort((a, b) => b.reb - a.reb)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total rebounds',
      data: playerTopTenStats
        .sort((a, b) => b.reb - a.reb)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.reb),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataTotalBlocks = {
    labels: playerTopTenStats
      .sort((a, b) => b.blk - a.blk)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total blocks',
      data: playerTopTenStats
        .sort((a, b) => b.blk - a.blk)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.blk),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataTotalSteals = {
    labels: playerTopTenStats
      .sort((a, b) => b.stl - a.stl)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total steals',
      data: playerTopTenStats
        .sort((a, b) => b.stl - a.stl)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.stl),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataTotalTurnovers = {
    labels: playerTopTenStats
      .sort((a, b) => b.turnover - a.turnover)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total turnovers',
      data: playerTopTenStats
        .sort((a, b) => b.turnover - a.turnover)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.turnover),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataTotalPersonalFouls = {
    labels: playerTopTenStats
      .sort((a, b) => b.pf - a.pf)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total personal fouls',
      data: playerTopTenStats
        .sort((a, b) => b.pf - a.pf)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.pf),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataTotalMinutes = {
    labels: playerTopTenStats
      .sort((a, b) => b.min - a.min)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total minutes',
      data: playerTopTenStats
        .sort((a, b) => b.min - a.min)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.min),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }

  //////////////////////////////////////////////////////////////////////

  const optionsPerPoints = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Points per game',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPerAssists = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Assists per game',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPerRebounds = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Rebounds per game',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPerBlocks = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Blocks per game',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPerSteals = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Steals per game',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPerTurnovers = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Turnovers per game',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPerPersonalFouls = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Fouls per game',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPerMinutes = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Minutes per game',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }

  const dataPerPoints = {
    labels: playerTopTenStats
      .sort((a, b) => b.ptsPer - a.ptsPer)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Points per game',
      data: playerTopTenStats
        .sort((a, b) => b.ptsPer - a.ptsPer)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.ptsPer),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPerAssists = {
    labels: playerTopTenStats
      .sort((a, b) => b.astPer - a.astPer)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Assists per game',
      data: playerTopTenStats
        .sort((a, b) => b.astPer - a.astPer)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.astPer),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPerRebounds = {
    labels: playerTopTenStats
      .sort((a, b) => b.rebPer - a.rebPer)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Rebounds per game',
      data: playerTopTenStats
        .sort((a, b) => b.rebPer - a.rebPer)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.rebPer),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPerBlocks = {
    labels: playerTopTenStats
      .sort((a, b) => b.blkPer - a.blkPer)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Blocks per game',
      data: playerTopTenStats
        .sort((a, b) => b.blkPer - a.blkPer)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.blkPer),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPerSteals = {
    labels: playerTopTenStats
      .sort((a, b) => b.stlPer - a.stlPer)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Steals per game',
      data: playerTopTenStats
        .sort((a, b) => b.stlPer - a.stlPer)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.stlPer),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPerTurnovers = {
    labels: playerTopTenStats
      .sort((a, b) => b.turnoverPer - a.turnoverPer)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Turnovers per game',
      data: playerTopTenStats
        .sort((a, b) => b.turnoverPer - a.turnoverPer)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.turnoverPer),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPerPersonalFouls = {
    labels: playerTopTenStats
      .sort((a, b) => b.pfPer - a.pfPer)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Personal fouls per game',
      data: playerTopTenStats
        .sort((a, b) => b.pfPer - a.pfPer)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.pfPer),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPerMinutes = {
    labels: playerTopTenStats
      .sort((a, b) => b.minPer - a.minPer)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Minutes per game',
      data: playerTopTenStats
        .sort((a, b) => b.minPer - a.minPer)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.minPer),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }


  //////////////////////////////////////////////////////////////////////////


  const optionsPer36Points = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Points per 36 min',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPer36Assists = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Assists per 36 min',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPer36Rebounds = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Rebounds per 36 min',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPer36Blocks = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Blocks per 36 min',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPer36Steals = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Steals per 36 min',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPer36Turnovers = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Turnovers per 36 min',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPer36PersonalFouls = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Fouls per 36 min',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }

  const dataPer36Points = {
    labels: playerTopTenStats
      .sort((a, b) => b.ptsPer36 - a.ptsPer36)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Points per 36 min',
      data: playerTopTenStats
        .sort((a, b) => b.ptsPer36 - a.ptsPer36)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.ptsPer36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPer36Assists = {
    labels: playerTopTenStats
      .sort((a, b) => b.astPer36 - a.astPer36)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Assists per 36 min',
      data: playerTopTenStats
        .sort((a, b) => b.astPer36 - a.astPer36)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.astPer36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPer36Rebounds = {
    labels: playerTopTenStats
      .sort((a, b) => b.rebPer36 - a.rebPer36)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Rebounds per 36 min',
      data: playerTopTenStats
        .sort((a, b) => b.rebPer36 - a.rebPer36)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.rebPer36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPer36Blocks = {
    labels: playerTopTenStats
      .sort((a, b) => b.blkPer36 - a.blkPer36)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Blocks per 36 min',
      data: playerTopTenStats
        .sort((a, b) => b.blkPer36 - a.blkPer36)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.blkPer36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPer36Steals = {
    labels: playerTopTenStats
      .sort((a, b) => b.stlPer36 - a.stlPer36)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Steals per 36 min',
      data: playerTopTenStats
        .sort((a, b) => b.stlPer36 - a.stlPer36)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.stlPer36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPer36Turnovers = {
    labels: playerTopTenStats
      .sort((a, b) => b.turnoverPer36 - a.turnoverPer36)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Turnovers per 36 min',
      data: playerTopTenStats
        .sort((a, b) => b.turnoverPer36 - a.turnoverPer36)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.turnoverPer36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPer36PersonalFouls = {
    labels: playerTopTenStats
      .sort((a, b) => b.pfPer36 - a.pfPer36)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Personal fouls per 36 min',
      data: playerTopTenStats
        .sort((a, b) => b.pfPer36 - a.pfPer36)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.pfPer36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }

  return (
    <div>
      <div className='chart'>
        {topTenStats.length > 0 && totalSelected
          ? <>
            <br></br>
            <Row>
              <Col sm={6}>
                <Bar
                  data={dataTotalPoints}
                  options={optionsTotalPoints}
                />
              </Col>
              <Col sm={6}>
                <Bar
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
                <Bar
                  data={dataTotalRebounds}
                  options={optionsTotalRebounds}
                />
              </Col>

              <Col sm={6}>
                <Bar
                  data={dataTotalBlocks}
                  options={optionsTotalBlocks}
                />
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br><Row>
              <Col sm={6}>
                <Bar
                  data={dataTotalSteals}
                  options={optionsTotalSteals}
                />
              </Col>
              <Col sm={6}>
                <Bar
                  data={dataTotalTurnovers}
                  options={optionsTotalTurnovers}
                />
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br><Row>
              <Col sm={6}>
                <Bar
                  data={dataTotalPersonalFouls}
                  options={optionsTotalPersonalFouls}
                />
              </Col>
              <Col sm={6}>
                <Bar
                  data={dataTotalMinutes}
                  options={optionsTotalMinutes}
                />
              </Col>
            </Row>
          </>
          : <></>}


        {topTenStats.length > 0 && perGameSelected
          ? <>
            <br></br>
            <Row>
              <Bar
                data={dataPerPoints}
                options={optionsPerPoints}
              />
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Bar
                data={dataPerAssists}
                options={optionsPerAssists}
              />

            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Bar
                data={dataPerRebounds}
                options={optionsPerRebounds}
              />
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Bar
                data={dataPerBlocks}
                options={optionsPerBlocks}
              />
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Bar
                data={dataPerSteals}
                options={optionsPerSteals}
              />
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Bar
                data={dataPerTurnovers}
                options={optionsPerTurnovers}
              />
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Bar
                data={dataPerPersonalFouls}
                options={optionsPerPersonalFouls}
              />
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Bar
                data={dataPerMinutes}
                options={optionsPerMinutes}
              />
            </Row>
          </>
          : <></>}

        {topTenStats.length > 0 && per36Selected
          ? <>
            <br></br>
            <Row>
              <Col sm={6}>
                <Bar
                  data={dataPer36Points}
                  options={optionsPer36Points}
                />
              </Col>
              <Col sm={6}>
                <Bar
                  data={dataPer36Assists}
                  options={optionsPer36Assists}
                />
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Col sm={6}>
                <Bar
                  data={dataPer36Rebounds}
                  options={optionsPer36Rebounds}
                />
              </Col>

              <Col sm={6}>
                <Bar
                  data={dataPer36Blocks}
                  options={optionsPer36Blocks}
                />
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br><Row>
              <Col sm={6}>
                <Bar
                  data={dataPer36Steals}
                  options={optionsPer36Steals}
                />
              </Col>
              <Col sm={6}>
                <Bar
                  data={dataPer36Turnovers}
                  options={optionsPer36Turnovers}
                />
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br><Row>
              <Col sm={6}>
                <Bar
                  data={dataPer36PersonalFouls}
                  options={optionsPer36PersonalFouls}
                />
              </Col>
            </Row>
          </>
          : <></>}


      </div>
    </div >
  )
}

export default TopTenStats