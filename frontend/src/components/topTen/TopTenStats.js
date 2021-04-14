import React from 'react'
import { Row } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'
import 'chartjs-plugin-labels'
import colors from '../../styling/colors'

const TopTenStats = (
  {
    topTenStats,
    postSeasonSelected,
    perGameSelected,
    totalSelected,
    per36Selected,
    pctSelected
  }
) => {

  //console.log(topTenStats)
  const topTenStatsFiltered = topTenStats.filter(stat => stat.postseason === postSeasonSelected)
  //filter out bad data where player is not defined
  /* topTenStatsFiltered = topTenStatsFiltered.filter(topTenStat => topTenStat.player !== undefined)

  let topTenStatsFiltered = []
  topTenStatsFiltered.forEach(topTenStat => {
    const playerFullName = `${topTenStat.player.first_name} ${topTenStat.player.last_name}`
    if (topTenStatsFiltered.find(playerTotalStat => playerTotalStat.name === playerFullName) === undefined) {
      const player = { name: playerFullName }
      topTenStatsFiltered.push(player)
      //console.log(i, player)
      //i++
    }
  })

  const topTenStatsFilteredFiltered = topTenStatsFiltered.filter(teamStat => teamStat.game.postseason === postSeasonSelected)

  topTenStatsFiltered.forEach(playerTotalStat => {
    let playedGames = 0
    const playerStats = topTenStatsFilteredFiltered
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


    topTenStatsFiltered = topTenStatsFiltered.map(s => s.name === playerTotalStat.name ? updatedPlayer : s)
  }) */


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

  const optionsFgPct = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Fg %',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsFg3Pct = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Fg3 %',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsFtPct = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Ft %',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsAstToTurnover = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Assists to turnovers',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const dataFgPct = {
    labels: topTenStatsFiltered
      .filter(s => s.fgm_pergame >= 5)
      .sort((a, b) => b.fg_pct - a.fg_pct)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Fg %',
      data: topTenStatsFiltered
        .filter(s => s.fga_pergame >= 5)
        .sort((a, b) => b.fg_pct - a.fg_pct)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.fg_pct),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataFg3Pct = {
    labels: topTenStatsFiltered
      .filter(s => s.fg3m_pergame >= 2)
      .sort((a, b) => b.fg3_pct - a.fg3_pct)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Fg3 %',
      data: topTenStatsFiltered
        .filter(s => s.fg3m_pergame >= 2)
        .sort((a, b) => b.fg3_pct - a.fg3_pct)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.fg3_pct),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataFtPct = {
    labels: topTenStatsFiltered
      .filter(s => s.ftm_pergame >= 2 && s.fta_total >= 30)
      .sort((a, b) => b.ft_pct - a.ft_pct)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Ft %',
      data: topTenStatsFiltered
        .filter(s => s.ftm_pergame >= 2 && s.fta_total >= 30)
        .sort((a, b) => b.ft_pct - a.ft_pct)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.ft_pct),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataAstToTurnover = {
    labels: topTenStatsFiltered
      .filter(s => s.ast_total >= 200 || s.ast_pergame >= 3)
      .sort((a, b) => b.ast_to_turnover - a.ast_to_turnover)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Ast/Turnover ratio',
      data: topTenStatsFiltered
        .filter(s => s.ast_total >= 200 || s.ast_pergame >= 3)
        .sort((a, b) => b.ast_to_turnover - a.ast_to_turnover)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.ast_to_turnover),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }

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

  const optionsTotalFga = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total fga',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsTotalFgm = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total fgm',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsTotalFg3a = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total fg3a',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsTotalFg3m = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total fg3m',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsTotalFta = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total fta',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsTotalFtm = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Total ftm',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }





  const dataTotalPoints = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.pts_total - a.pts_total)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total points',
      data: topTenStatsFiltered
        .sort((a, b) => b.pts_total - a.pts_total)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.pts_total),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataTotalAssists = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.ast_total - a.ast_total)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total assists',
      data: topTenStatsFiltered
        .sort((a, b) => b.ast_total - a.ast_total)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.ast_total),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataTotalRebounds = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.reb_total - a.reb_total)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total rebounds',
      data: topTenStatsFiltered
        .sort((a, b) => b.reb_total - a.reb_total)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.reb_total),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataTotalBlocks = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.blk_total - a.blk_total)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total blocks',
      data: topTenStatsFiltered
        .sort((a, b) => b.blk_total - a.blk_total)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.blk_total),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataTotalSteals = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.stl_total - a.stl_total)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total steals',
      data: topTenStatsFiltered
        .sort((a, b) => b.stl_total - a.stl_total)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.stl_total),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataTotalTurnovers = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.turnover_total - a.turnover_total)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total turnovers',
      data: topTenStatsFiltered
        .sort((a, b) => b.turnover_total - a.turnover_total)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.turnover_total),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataTotalPersonalFouls = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.pf_total - a.pf_total)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total personal fouls',
      data: topTenStatsFiltered
        .sort((a, b) => b.pf_total - a.pf_total)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.pf_total),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataTotalMinutes = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.min_total - a.min_total)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Total minutes',
      data: topTenStatsFiltered
        .sort((a, b) => b.min_total - a.min_total)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.min_total),
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
  const optionsPerFga = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Fga per game',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPerFgm = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Fgm per game',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPerFg3a = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Fg3a per game',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPerFg3m = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Fg3m per game',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPerFta = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Fta per game',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPerFtm = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Ftm per game',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }

  const dataPerPoints = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.pts_pergame - a.pts_pergame)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Points per game',
      data: topTenStatsFiltered
        .sort((a, b) => b.pts_pergame - a.pts_pergame)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.pts_pergame),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPerAssists = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.ast_pergame - a.ast_pergame)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Assists per game',
      data: topTenStatsFiltered
        .sort((a, b) => b.ast_pergame - a.ast_pergame)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.ast_pergame),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPerRebounds = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.reb_pergame - a.reb_pergame)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Rebounds per game',
      data: topTenStatsFiltered
        .sort((a, b) => b.reb_pergame - a.reb_pergame)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.reb_pergame),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPerBlocks = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.blk_pergame - a.blk_pergame)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Blocks per game',
      data: topTenStatsFiltered
        .sort((a, b) => b.blk_pergame - a.blk_pergame)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.blk_pergame),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPerSteals = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.stl_pergame - a.stl_pergame)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Steals per game',
      data: topTenStatsFiltered
        .sort((a, b) => b.stl_pergame - a.stl_pergame)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.stl_pergame),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPerTurnovers = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.turnover_pergame - a.turnover_pergame)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Turnovers per game',
      data: topTenStatsFiltered
        .sort((a, b) => b.turnover_pergame - a.turnover_pergame)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.turnover_pergame),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPerPersonalFouls = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.pf_pergame - a.pf_pergame)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Personal fouls per game',
      data: topTenStatsFiltered
        .sort((a, b) => b.pf_pergame - a.pf_pergame)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.pf_pergame),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPerMinutes = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.min_pergame - a.min_pergame)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Minutes per game',
      data: topTenStatsFiltered
        .sort((a, b) => b.min_pergame - a.min_pergame)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.min_pergame),
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
  const optionsPer36Fga = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Fga per 36 min',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPer36Fgm = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Fgm per 36 min',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPer36Fg3a = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Fg3a per 36 min',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPer36Fg3m = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Fg3m per 36 min',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPer36Fta = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Fta per 36 min',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }
  const optionsPer36Ftm = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Ftm per 36 min',
      fontSize: 16,
      fontColor: 'white'
    },
    scales: scales
  }

  const dataPer36Points = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.pts_per36 - a.pts_per36)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Points per 36 min',
      data: topTenStatsFiltered
        .sort((a, b) => b.pts_per36 - a.pts_per36)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.pts_per36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPer36Assists = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.ast_per36 - a.ast_per36)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Assists per 36 min',
      data: topTenStatsFiltered
        .sort((a, b) => b.ast_per36 - a.ast_per36)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.ast_per36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPer36Rebounds = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.reb_per36 - a.reb_per36)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Rebounds per 36 min',
      data: topTenStatsFiltered
        .sort((a, b) => b.reb_per36 - a.reb_per36)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.reb_per36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPer36Blocks = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.blk_per36 - a.blk_per36)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Blocks per 36 min',
      data: topTenStatsFiltered
        .sort((a, b) => b.blk_per36 - a.blk_per36)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.blk_per36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPer36Steals = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.stl_per36 - a.stl_per36)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Steals per 36 min',
      data: topTenStatsFiltered
        .sort((a, b) => b.stl_per36 - a.stl_per36)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.stl_per36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPer36Turnovers = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.turnover_per36 - a.turnover_per36)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Turnovers per 36 min',
      data: topTenStatsFiltered
        .sort((a, b) => b.turnover_per36 - a.turnover_per36)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.turnover_per36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  const dataPer36PersonalFouls = {
    labels: topTenStatsFiltered
      .sort((a, b) => b.pf_per36 - a.pf_per36)
      .slice(0, 20)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Personal fouls per 36 min',
      data: topTenStatsFiltered
        .sort((a, b) => b.pf_per36 - a.pf_per36)
        .slice(0, 20)
        .map(playerTotalStat => playerTotalStat.pf_per36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }

  return (
    <div>
      <div className='chart'>
        {topTenStatsFiltered.length > 0 && pctSelected
          ? <>
            <Row>
              <Bar
                data={dataFgPct}
                options={optionsFgPct}
              />
            </Row>
            <Row>
              <Bar
                data={dataFg3Pct}
                options={optionsFg3Pct}
              />
            </Row>
            <Row>
              <Bar
                data={dataFtPct}
                options={optionsFtPct}
              />
            </Row>
          </>
          : <></>}

        {topTenStatsFiltered.length > 0 && totalSelected
          ? <>
            <br></br>
            <Row>
              <Bar
                data={dataTotalPoints}
                options={optionsTotalPoints}
              />
            </Row>
            <Row>
              <br></br>
              <br></br>
              <br></br>
              <Bar
                data={dataTotalAssists}
                options={optionsTotalAssists}
              />
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Bar
                data={dataTotalRebounds}
                options={optionsTotalRebounds}
              />
            </Row>
            <Row>
              <br></br>
              <br></br>
              <br></br>
              <Bar
                data={dataTotalBlocks}
                options={optionsTotalBlocks}
              />
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Bar
                data={dataTotalSteals}
                options={optionsTotalSteals}
              />
            </Row>
            <Row>
              <br></br>
              <br></br>
              <br></br>
              <Bar
                data={dataTotalTurnovers}
                options={optionsTotalTurnovers}
              />
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Bar
                data={dataTotalPersonalFouls}
                options={optionsTotalPersonalFouls}
              />
            </Row>
            <Row>
              <br></br>
              <br></br>
              <br></br>
              <Bar
                data={dataTotalMinutes}
                options={optionsTotalMinutes}
              />
            </Row>
          </>
          : <></>}


        {topTenStatsFiltered.length > 0 && perGameSelected
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
                data={dataAstToTurnover}
                options={optionsAstToTurnover}
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

        {topTenStatsFiltered.length > 0 && per36Selected
          ? <>
            <br></br>
            <Row>
              <Bar
                data={dataPer36Points}
                options={optionsPer36Points}
              />
            </Row>
            <Row>
              <br></br>
              <br></br>
              <br></br>
              <Bar
                data={dataPer36Assists}
                options={optionsPer36Assists}
              />
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Bar
                data={dataPer36Rebounds}
                options={optionsPer36Rebounds}
              />
            </Row>
            <Row>
              <br></br>
              <br></br>
              <br></br>
              <Bar
                data={dataPer36Blocks}
                options={optionsPer36Blocks}
              />
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Bar
                data={dataPer36Steals}
                options={optionsPer36Steals}
              />
            </Row>
            <Row>
              <br></br>
              <br></br>
              <br></br>
              <Bar
                data={dataPer36Turnovers}
                options={optionsPer36Turnovers}
              />
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Bar
                data={dataPer36PersonalFouls}
                options={optionsPer36PersonalFouls}
              />
            </Row>
          </>
          : <></>}


      </div>
    </div >
  )
}

export default TopTenStats