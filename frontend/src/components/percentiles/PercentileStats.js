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

  const statsSortedPtsPerGame = statsForPtsPerGame.sort((a, b) => a.pts_pergame - b.pts_pergame)
  const statsSortedAstPerGame = statsForAstPerGame.sort((a, b) => a.ast_pergame - b.ast_pergame)
  const statsSortedRebPerGame = statsForRebPerGame.sort((a, b) => a.reb_pergame - b.reb_pergame)
  const statsSortedBlkPerGame = statsForBlkPerGame.sort((a, b) => a.blk_pergame - b.blk_pergame)
  const statsSortedStlPerGame = statsForStlPerGame.sort((a, b) => a.stl_pergame - b.stl_pergame)

  console.log(statsSortedPtsPerGame)

  let percentileStatsToShow = []

  selectedPlayersNames.forEach(playerName => {
    const ptsPerGamePercentile = Math.floor(statsSortedPtsPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const astPerGamePercentile = Math.floor(statsSortedAstPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const rebPerGamePercentile = Math.floor(statsSortedRebPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const blkPerGamePercentile = Math.floor(statsSortedBlkPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const stlPerGamePercentile = Math.floor(statsSortedStlPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10

    const newPlayerPercentiles = {
      name: playerName,
      pts_pergame: ptsPerGamePercentile,
      ast_pergame: astPerGamePercentile,
      reb_pergame: rebPerGamePercentile,
      blk_pergame: blkPerGamePercentile,
      stl_pergame: stlPerGamePercentile,
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
        percentileStatsToShow[i].stl_pergame
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
    labels: ['pts', 'ast', 'reb', 'blk', 'stl'/* , 'turnover', 'pf', 'min' */],
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



 /*  {
         label: 'LeBron James',
         //data: [20, 10, 12, 2, 2],
         data: [percentileStats.find(s => s.name === 'LeBron James').pts_pergame,
         percentileStats.find(s => s.name === 'LeBron James').ast_pergame],
         fill: false,
         borderColor: colors.lightGreyLine,
         pointBackgroundColor: colors.lightGreyLine,
         showLine: true,
         hidden: false
       }, */
      /* {
        label: player0.name,
        data: [
          player0.pts_pergame,
          player0.ast_pergame,
          player0.reb_pergame,
          player0.blk_pergame,
          player0.stl_pergame
        ],
        fill: false,
        borderColor: colors.lightGreyLine,
        pointBackgroundColor: colors.lightGreyLine,
        showLine: true,
        hidden: false
      },
  
      {
        label: player1.name,
        data: [
          player1.pts_pergame,
          player1.ast_pergame,
          player1.reb_pergame,
          player1.blk_pergame,
          player1.stl_pergame
        ],
        fill: false,
        borderColor: colors.brownLine,
        pointBackgroundColor: colors.brownLine,
        showLine: true,
        hidden: false
      }
  */