import React from 'react'
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
          max: 100,
          beginAtZero: true,
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
  const numberOfPlayersPer36 = percentileStatsFiltered.filter(stat => stat.pts_per36 !== undefined).length

  const statsForPtsPerGame = [...percentileStatsFiltered]
  const statsForAstPerGame = [...percentileStatsFiltered]
  const statsForRebPerGame = [...percentileStatsFiltered]
  const statsForBlkPerGame = [...percentileStatsFiltered]
  const statsForStlPerGame = [...percentileStatsFiltered]
  //const statsForTurnoverPerGame = [...percentileStatsFiltered]
  const statsForAstToTurnover = [...percentileStatsFiltered]

  const statsForFgPctPerGame = [...percentileStatsFiltered]
  const statsForFg3PctPerGame = [...percentileStatsFiltered]
  const statsForFtPctPerGame = [...percentileStatsFiltered]

  const statsForPtsPer36 = [...percentileStatsFiltered]
  const statsForAstPer36 = [...percentileStatsFiltered]
  const statsForRebPer36 = [...percentileStatsFiltered]
  const statsForBlkPer36 = [...percentileStatsFiltered]
  const statsForStlPer36 = [...percentileStatsFiltered]
  //const statsForTurnoverPer36 = [...percentileStatsFiltered]

  const statsForPtsTotal = [...percentileStatsFiltered]
  const statsForAstTotal = [...percentileStatsFiltered]
  const statsForRebTotal = [...percentileStatsFiltered]
  const statsForBlkTotal = [...percentileStatsFiltered]
  const statsForStlTotal = [...percentileStatsFiltered]
  //const statsForTurnoverTotal = [...percentileStatsFiltered]

  const statsSortedPtsPerGame = statsForPtsPerGame.sort((a, b) => a.pts_pergame - b.pts_pergame)
  const statsSortedAstPerGame = statsForAstPerGame.sort((a, b) => a.ast_pergame - b.ast_pergame)
  const statsSortedRebPerGame = statsForRebPerGame.sort((a, b) => a.reb_pergame - b.reb_pergame)
  const statsSortedBlkPerGame = statsForBlkPerGame.sort((a, b) => a.blk_pergame - b.blk_pergame)
  const statsSortedStlPerGame = statsForStlPerGame.sort((a, b) => a.stl_pergame - b.stl_pergame)
  //const statsSortedTurnoverPerGame = statsForTurnoverPerGame.sort((a, b) => b.turnover_pergame - a.turnover_pergame)
  const statsSortedAstToTurnover = statsForAstToTurnover.sort((a, b) => a.ast_to_turnover - b.ast_to_turnover)

  const statsSortedFgPctPerGame = statsForFgPctPerGame.sort((a, b) => a.fg_pct - b.fg_pct)
  const statsSortedFg3PctPerGame = statsForFg3PctPerGame.sort((a, b) => a.fg3_pct - b.fg3_pct)
  const statsSortedFtPctPerGame = statsForFtPctPerGame.sort((a, b) => a.ft_pct - b.ft_pct)

  const statsSortedPtsPer36 = statsForPtsPer36.filter(stat => stat.pts_per36 !== undefined).sort((a, b) => a.pts_per36 - b.pts_per36)
  const statsSortedAstPer36 = statsForAstPer36.filter(stat => stat.pts_per36 !== undefined).sort((a, b) => a.ast_per36 - b.ast_per36)
  const statsSortedRebPer36 = statsForRebPer36.filter(stat => stat.pts_per36 !== undefined).sort((a, b) => a.reb_per36 - b.reb_per36)
  const statsSortedBlkPer36 = statsForBlkPer36.filter(stat => stat.pts_per36 !== undefined).sort((a, b) => a.blk_per36 - b.blk_per36)
  const statsSortedStlPer36 = statsForStlPer36.filter(stat => stat.pts_per36 !== undefined).sort((a, b) => a.stl_per36 - b.stl_per36)
  //const statsSortedTurnoverPer36 = statsForTurnoverPer36.filter(stat => stat.pts_per36 !== undefined).sort((a, b) => b.turnover_per36 - a.turnover_per36)

  const statsSortedPtsTotal = statsForPtsTotal.sort((a, b) => a.pts_total - b.pts_total)
  const statsSortedAstTotal = statsForAstTotal.sort((a, b) => a.ast_total - b.ast_total)
  const statsSortedRebTotal = statsForRebTotal.sort((a, b) => a.reb_total - b.reb_total)
  const statsSortedBlkTotal = statsForBlkTotal.sort((a, b) => a.blk_total - b.blk_total)
  const statsSortedStlTotal = statsForStlTotal.sort((a, b) => a.stl_total - b.stl_total)
  //const statsSortedTurnoverTotal = statsForTurnoverTotal.sort((a, b) => b.turnover_total - a.turnover_total)

  //console.log(statsSortedPtsPerGame)

  let percentileStatsToShowPerGame = []
  let percentileStatsToShowPer36 = []
  let percentileStatsToShowTotal = []
  let percentileStatsToShowPct = []

  selectedPlayersNames.forEach(playerName => {
    const ptsPerGamePercentile = Math.floor(statsSortedPtsPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const astPerGamePercentile = Math.floor(statsSortedAstPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const rebPerGamePercentile = Math.floor(statsSortedRebPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const blkPerGamePercentile = Math.floor(statsSortedBlkPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const stlPerGamePercentile = Math.floor(statsSortedStlPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    //const turnoverPerGamePercentile = Math.floor(statsSortedTurnoverPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const astToTurnoverPercentile = Math.floor(statsSortedAstToTurnover.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10

    const fgPctPercentile = Math.floor(statsSortedFgPctPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const fg3PctPercentile = Math.floor(statsSortedFg3PctPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const ftPctPercentile = Math.floor(statsSortedFtPctPerGame.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10

    const ptsPer36Percentile = Math.floor(statsSortedPtsPer36.findIndex(stat => stat.name === playerName) / numberOfPlayersPer36 * 100 * 10) / 10
    const astPer36Percentile = Math.floor(statsSortedAstPer36.findIndex(stat => stat.name === playerName) / numberOfPlayersPer36 * 100 * 10) / 10
    const rebPer36Percentile = Math.floor(statsSortedRebPer36.findIndex(stat => stat.name === playerName) / numberOfPlayersPer36 * 100 * 10) / 10
    const blkPer36Percentile = Math.floor(statsSortedBlkPer36.findIndex(stat => stat.name === playerName) / numberOfPlayersPer36 * 100 * 10) / 10
    const stlPer36Percentile = Math.floor(statsSortedStlPer36.findIndex(stat => stat.name === playerName) / numberOfPlayersPer36 * 100 * 10) / 10
    //const turnoverPer36Percentile = Math.floor(statsSortedTurnoverPer36.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10

    const ptsTotalPercentile = Math.floor(statsSortedPtsTotal.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const astTotalPercentile = Math.floor(statsSortedAstTotal.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const rebTotalPercentile = Math.floor(statsSortedRebTotal.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const blkTotalPercentile = Math.floor(statsSortedBlkTotal.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    const stlTotalPercentile = Math.floor(statsSortedStlTotal.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10
    //const turnoverTotalPercentile = Math.floor(statsSortedTurnoverTotal.findIndex(stat => stat.name === playerName) / numberOfPlayers * 100 * 10) / 10

    const newPlayerPercentilesPerGame = {
      name: playerName,
      pts_pergame: ptsPerGamePercentile,
      ast_pergame: astPerGamePercentile,
      reb_pergame: rebPerGamePercentile,
      blk_pergame: blkPerGamePercentile,
      stl_pergame: stlPerGamePercentile,
      //turnover_pergame: turnoverPerGamePercentile,
      ast_to_turnover: astToTurnoverPercentile,
      fg_pct: fgPctPercentile,
      fg3_pct: fg3PctPercentile,
      ft_pct: ftPctPercentile
    }
    percentileStatsToShowPerGame.push(newPlayerPercentilesPerGame)

    const newPlayerPercentilesPer36 = {
      name: playerName,
      pts_per36: ptsPer36Percentile,
      ast_per36: astPer36Percentile,
      reb_per36: rebPer36Percentile,
      blk_per36: blkPer36Percentile,
      stl_per36: stlPer36Percentile,
      //turnover_per36: turnoverPer36Percentile,
      ast_to_turnover: astToTurnoverPercentile
    }
    percentileStatsToShowPer36.push(newPlayerPercentilesPer36)

    const newPlayerPercentilesTotal = {
      name: playerName,
      pts_total: ptsTotalPercentile,
      ast_total: astTotalPercentile,
      reb_total: rebTotalPercentile,
      blk_total: blkTotalPercentile,
      stl_total: stlTotalPercentile,
      //turnover_total: turnoverTotalPercentile,
      ast_to_turnover: astToTurnoverPercentile
    }
    percentileStatsToShowTotal.push(newPlayerPercentilesTotal)

    const newPlayerPercentilesPct = {
      name: playerName,
      fg_pct: fgPctPercentile,
      fg3_pct: fg3PctPercentile,
      ft_pct: ftPctPercentile
    }
    percentileStatsToShowPct.push(newPlayerPercentilesPct)
  })

  let datasetsPerGame = []
  for (let i = 0; i < percentileStatsToShowPerGame.length; i++) {
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

    const datasetPerGame = {
      label: percentileStatsToShowPerGame[i].name,
      data: [
        percentileStatsToShowPerGame[i].pts_pergame,
        percentileStatsToShowPerGame[i].ast_pergame,
        percentileStatsToShowPerGame[i].reb_pergame,
        percentileStatsToShowPerGame[i].blk_pergame,
        percentileStatsToShowPerGame[i].stl_pergame,
        percentileStatsToShowPerGame[i].ast_to_turnover
        //percentileStatsToShowPerGame[i].turnover_pergame
      ],
      fill: false,
      borderColor: borderColor,
      pointBackgroundColor: pointBackgroundColor,
      showline: true,
      hidden: false
    }
    datasetsPerGame.push(datasetPerGame)
  }
  const dataPerGame = {
    labels: ['pts', 'ast', 'reb', 'blk', 'stl', 'ast/to'/* , 'turnover' */],
    datasets: datasetsPerGame
  }

  let datasetsPer36 = []
  for (let i = 0; i < percentileStatsToShowPer36.length; i++) {
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

    const datasetPer36 = {
      label: percentileStatsToShowPer36[i].name,
      data: [
        percentileStatsToShowPer36[i].pts_per36,
        percentileStatsToShowPer36[i].ast_per36,
        percentileStatsToShowPer36[i].reb_per36,
        percentileStatsToShowPer36[i].blk_per36,
        percentileStatsToShowPer36[i].stl_per36,
        percentileStatsToShowPer36[i].ast_to_turnover
        //percentileStatsToShowPer36[i].turnover_per36

      ],
      fill: false,
      borderColor: borderColor,
      pointBackgroundColor: pointBackgroundColor,
      showline: true,
      hidden: false
    }
    datasetsPer36.push(datasetPer36)
  }
  const dataPer36 = {
    labels: ['pts', 'ast', 'reb', 'blk', 'stl', 'ast/to'/* , 'turnover' */],
    datasets: datasetsPer36
  }


  let datasetsTotal = []
  for (let i = 0; i < percentileStatsToShowTotal.length; i++) {
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

    const datasetTotal = {
      label: percentileStatsToShowTotal[i].name,
      data: [
        percentileStatsToShowTotal[i].pts_total,
        percentileStatsToShowTotal[i].ast_total,
        percentileStatsToShowTotal[i].reb_total,
        percentileStatsToShowTotal[i].blk_total,
        percentileStatsToShowTotal[i].stl_total,
        percentileStatsToShowTotal[i].ast_to_turnover,
        //percentileStatsToShowTotal[i].turnover_total
      ],
      fill: false,
      borderColor: borderColor,
      pointBackgroundColor: pointBackgroundColor,
      showline: true,
      hidden: false
    }
    datasetsTotal.push(datasetTotal)
  }
  const dataTotal = {
    labels: ['pts', 'ast', 'reb', 'blk', 'stl', 'ast/to'/* , 'turnover' */],
    datasets: datasetsTotal
  }

  let datasetsPct = []
  for (let i = 0; i < percentileStatsToShowPct.length; i++) {
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

    const datasetPct = {
      label: percentileStatsToShowPct[i].name,
      data: [
        percentileStatsToShowPct[i].fg_pct,
        percentileStatsToShowPct[i].fg3_pct,
        percentileStatsToShowPct[i].ft_pct,
      ],
      fill: false,
      borderColor: borderColor,
      pointBackgroundColor: pointBackgroundColor,
      showline: true,
      hidden: false
    }
    datasetsPct.push(datasetPct)
  }
  const dataPct = {
    labels: ['fg %', 'fg3 %', 'ft %'],
    datasets: datasetsPct
  }

  return (
    <>
      <div className='chart'>
        {perGameSelected
          ? <Line
            data={dataPerGame}
            options={options}
          />
          : <></>}
        {per36Selected
          ? <Line
            data={dataPer36}
            options={options}
          />
          : <></>}
        {totalSelected
          ? <Line
            data={dataTotal}
            options={options}
          />
          : <></>}
        {pctSelected
          ? <Line
            data={dataPct}
            options={options}
          />
          : <></>}
      </div>
    </>
  )
}

export default PercentileStats
