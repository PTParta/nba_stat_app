import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'
import colors from '../../styling/colors'



const PercentileStats = ({
  //selectedSeason,
  percentileStats,
  selectedPlayersNames,
  postSeasonSelected,
  perGameSelected,
  totalSelected,
  per36Selected,
  pctSelected,
  amountPlayersSelected
}
) => {

  /* console.log('percentileStats')
  console.log(percentileStats) */
  /* console.log('selectedPlayersNames')
  console.log(selectedPlayersNames) */

  const options = {
    legend: {
      /* onClick: (e) => e.stopPropagation(), */
      display: true
    },
    scales: {
      xAxes: [{
        ticks: {
          display: true,
          fontColor: 'white',
          fontSize: 14,
        },
        gridLines: {
          display: false,
          color: "grey"
        },
      }],
      yAxes: [{
        ticks: {
          /* beginAtZero: true, */
          fontColor: 'white',
          fontSize: 14,
        },
        gridLines: {
          display: true,
          color: "grey"
        },
      }]
    }
  }



  const percentileStatsFiltered = percentileStats.filter(playerStat => playerStat.postseason === postSeasonSelected)

  const numberOfPlayers = percentileStatsFiltered.length

  const statsForPtsPerGame = [...percentileStatsFiltered]
  const statsForAstPerGame = [...percentileStatsFiltered]
  const statsForRebPerGame = [...percentileStatsFiltered]
  const statsForBlkPerGame = [...percentileStatsFiltered]
  const statsForStlPerGame = [...percentileStatsFiltered]
  const statsForFgPctPerGame = [...percentileStatsFiltered]
  const statsForFg3PctPerGame = [...percentileStatsFiltered]
  const statsForFtPctPerGame = [...percentileStatsFiltered]

  const statsSortedPtsPerGame = statsForPtsPerGame.sort((a, b) => a.pts_pergame - b.pts_pergame)
  const statsSortedAstPerGame = statsForAstPerGame.sort((a, b) => a.ast_pergame - b.ast_pergame)
  const statsSortedRebPerGame = statsForRebPerGame.sort((a, b) => a.reb_pergame - b.reb_pergame)
  const statsSortedBlkPerGame = statsForBlkPerGame.sort((a, b) => a.blk_pergame - b.blk_pergame)
  const statsSortedStlPerGame = statsForStlPerGame.sort((a, b) => a.stl_pergame - b.stl_pergame)
  const statsSortedFgPctPerGame = statsForFgPctPerGame.sort((a, b) => a.fg_pct - b.fg_pct)
  const statsSortedFg3PctPerGame = statsForFg3PctPerGame.sort((a, b) => a.fg3_pct - b.fg3_pct)
  const statsSortedFtPctPerGame = statsForFtPctPerGame.sort((a, b) => a.ft_pct - b.ft_pct)

  console.log(statsSortedPtsPerGame)

  let percentileStatsToShow = []

  selectedPlayersNames.forEach(playerName => {
    const ptsPerGamePercentile = Math.floor(statsSortedPtsPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const astPerGamePercentile = Math.floor(statsSortedAstPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const rebPerGamePercentile = Math.floor(statsSortedRebPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const blkPerGamePercentile = Math.floor(statsSortedBlkPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const stlPerGamePercentile = Math.floor(statsSortedStlPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const fgPctPercentile = Math.floor(statsSortedFgPctPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const fg3PctPercentile = Math.floor(statsSortedFg3PctPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const ftPctPercentile = Math.floor(statsSortedFtPctPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10

    const newPlayerPercentiles = {
      name: playerName,
      pts_pergame: ptsPerGamePercentile,
      ast_pergame: astPerGamePercentile,
      reb_pergame: rebPerGamePercentile,
      blk_pergame: blkPerGamePercentile,
      stl_pergame: stlPerGamePercentile,
      fg_pct: fgPctPercentile,
      fg3_pct: fg3PctPercentile,
      ft_pct: ftPctPercentile,
    }

    percentileStatsToShow.push(newPlayerPercentiles)
  })
  console.log(percentileStatsToShow)

  //Create datasets for line chart
  let datasets = []
  for (let i = 0; i < percentileStatsToShow.length; i++) {
    let borderColor
    let pointBackgroundColor
    switch (i) {
      case 0:
        borderColor = colors.orangeLine
        pointBackgroundColor = colors.orangeLine
        break
      case 1:
        borderColor = colors.yellowLine
        pointBackgroundColor = colors.yellowLine
        break
      case 2:
        borderColor = colors.greenLine
        pointBackgroundColor = colors.greenLine
        break
      case 3:
        borderColor = colors.magentaLine
        pointBackgroundColor = colors.magentaLine
        break
      case 4:
        borderColor = colors.cyanLine
        pointBackgroundColor = colors.cyanLine
        break
      case 5:
        borderColor = colors.maroonLine
        pointBackgroundColor = colors.maroonLine
        break
      case 6:
        borderColor = colors.oliveLine
        pointBackgroundColor = colors.oliveLine
        break
      case 7:
        borderColor = colors.limeLine
        pointBackgroundColor = colors.limeLine
        break
      case 8:
        borderColor = colors.pinkLine
        pointBackgroundColor = colors.pinkLine
        break
      case 9:
        borderColor = colors.beigeLine
        pointBackgroundColor = colors.beigeLine
        break
      default:
        borderColor = null
        pointBackgroundColor = null
    }

    const dataset = {
      label: percentileStatsToShow[i].name,
      data: [
        percentileStatsToShow[i].pts_pergame,
        percentileStatsToShow[i].ast_pergame,
        percentileStatsToShow[i].reb_pergame,
        percentileStatsToShow[i].blk_pergame,
        percentileStatsToShow[i].stl_pergame,
        percentileStatsToShow[i].fg_pct,
        percentileStatsToShow[i].fg3_pct,
        percentileStatsToShow[i].ft_pct,
      ],
      fill: false,
      borderColor: borderColor,
      pointBackgroundColor: pointBackgroundColor,
      showline: true,
      hidden: false
    }
    datasets.push(dataset)
  }
  const data = {
    labels: ['pts', 'ast', 'reb', 'blk', 'stl', 'fg %', 'fg3 %', 'ft %'],
    datasets: datasets
  }

  return (
    <>
      <div className='chart'>
        <Line
          data={data}
          options={options}
        />
      </div>
    </>
  )
}

export default PercentileStats
