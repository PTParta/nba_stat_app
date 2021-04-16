import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'
import 'chartjs-plugin-labels'
//import colors from '../../styling/colors'
import barChartDataService from '../../services/barChartData'
import barChartOptionsService from '../../services/barChartOptions'

const TeamStats = (
  {
    teamStats,
    postSeasonSelected,
    perGameSelected,
    totalSelected,
    per36Selected
  }
) => {

  const playerAmount = 20

  //filter out bad data where player is not defined
  teamStats = teamStats.filter(teamStat => teamStat.player !== undefined)

  let playerTotalStats = []

  teamStats.forEach(teamStat => {
    const playerFullName = `${teamStat.player.first_name} ${teamStat.player.last_name}`
    if (playerTotalStats.find(playerTotalStat => playerTotalStat.name === playerFullName) === undefined) {
      const player = { name: playerFullName }
      playerTotalStats.push(player)
    }
  })

  const teamStatsFiltered = teamStats.filter(teamStat => teamStat.game.postseason === postSeasonSelected)

  /* playerTotalStats.forEach(playerTotalStat => {
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


    playerTotalStats = playerTotalStats.map(s => s.name === playerTotalStat.name ? updatedPlayer : s)
  })
 */
  playerTotalStats.forEach(playerStat => {
    /* console.log(j)
    j++ */
    let playedGames = 0
    const playerStatsHelper = teamStatsFiltered
      .filter(teamStat => `${teamStat.player.first_name} ${teamStat.player.last_name}` === playerStat.name)

    const totalPts = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.pts
    }, 0)
    const totalAst = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.ast
    }, 0)
    const totalReb = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.reb
    }, 0)
    const totalStl = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.stl
    }, 0)
    const totalBlk = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.blk
    }, 0)
    const totalTurnover = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.turnover
    }, 0)
    const totalPf = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.pf
    }, 0)
    const totalMin = playerStatsHelper.reduce((accumulator, currentValue) => {
      let minutes = 0
      const timeSplit = currentValue.min.split(':')
      if (timeSplit.length === 1) {
        minutes = Number(currentValue.min)
      } else {
        const seconds = Number(timeSplit[0]) * 60 + Number(timeSplit[1])
        //minutes = Math.floor(seconds / 60)
        minutes = Math.round(seconds / 60 * 10) / 10
      }
      if (isNaN(minutes)) {
        minutes = 0
      }
      if (minutes !== 0) {
        playedGames++
      }
      return accumulator + minutes
    }, 0)
    const totalFga = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.fga
    }, 0)
    const totalFgm = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.fgm
    }, 0)
    const totalFg3a = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.fg3a
    }, 0)
    const totalFg3m = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.fg3m
    }, 0)
    const totalFta = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.fta
    }, 0)
    const totalFtm = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.ftm
    }, 0)
    const totalOreb = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.oreb
    }, 0)
    const totalDreb = playerStatsHelper.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.dreb
    }, 0)

    //console.log(playerStat/* .playerId */)
    let updatedPlayer = {}
    if (playedGames > 0) {
      //const updatedPlayer = playerStat


      //updatedPlayer.playerId = playerStat.player.id
      updatedPlayer.name = playerStat.name
      updatedPlayer.playerId = playerStat.playerId
      /* updatedPlayer.postseason = postseason
      updatedPlayer.season = Number(season) */

      updatedPlayer.pts_total = totalPts
      updatedPlayer.ast_total = totalAst
      updatedPlayer.reb_total = totalReb
      updatedPlayer.stl_total = totalStl
      updatedPlayer.blk_total = totalBlk
      updatedPlayer.turnover_total = totalTurnover
      updatedPlayer.pf_total = totalPf
      updatedPlayer.min_total = Math.floor(totalMin)

      updatedPlayer.fga_total = totalFga
      updatedPlayer.fgm_total = totalFgm
      updatedPlayer.fg3a_total = totalFg3a
      updatedPlayer.fg3m_total = totalFg3m
      updatedPlayer.fta_total = totalFta
      updatedPlayer.ftm_total = totalFtm

      updatedPlayer.oreb_total = totalOreb
      updatedPlayer.dreb_total = totalDreb

      if (totalFga > 0) {
        updatedPlayer.fg_pct = Math.floor(totalFgm / totalFga * 100 * 10) / 10
      } else {
        updatedPlayer.fg_pct = 0
      }
      if (totalFg3a > 0) {
        updatedPlayer.fg3_pct = Math.floor(totalFg3m / totalFg3a * 100 * 10) / 10
      } else {
        updatedPlayer.fg3_pct = 0
      }
      if (totalFta > 0) {
        updatedPlayer.ft_pct = Math.floor(totalFtm / totalFta * 100 * 10) / 10
      } else {
        updatedPlayer.ft_pct = 0
      }
      if (totalTurnover > 0) {
        updatedPlayer.ast_to_turnover = Math.floor(totalAst / totalTurnover * 10) / 10
      } else {
        updatedPlayer.ast_to_turnover = 0
      }
      updatedPlayer.pts_pergame = Math.round(totalPts / playedGames * 10) / 10
      updatedPlayer.ast_pergame = Math.round(totalAst / playedGames * 10) / 10
      updatedPlayer.reb_pergame = Math.round(totalReb / playedGames * 10) / 10
      updatedPlayer.stl_pergame = Math.round(totalStl / playedGames * 10) / 10
      updatedPlayer.blk_pergame = Math.round(totalBlk / playedGames * 10) / 10
      updatedPlayer.turnover_pergame = Math.round(totalTurnover / playedGames * 10) / 10
      updatedPlayer.pf_pergame = Math.round(totalPf / playedGames * 10) / 10
      updatedPlayer.min_pergame = Math.round(totalMin / playedGames * 10) / 10

      updatedPlayer.fga_pergame = Math.round(totalFga / playedGames * 10) / 10
      updatedPlayer.fgm_pergame = Math.round(totalFgm / playedGames * 10) / 10
      updatedPlayer.fg3a_pergame = Math.round(totalFg3a / playedGames * 10) / 10
      updatedPlayer.fg3m_pergame = Math.round(totalFg3m / playedGames * 10) / 10
      updatedPlayer.fta_pergame = Math.round(totalFta / playedGames * 10) / 10
      updatedPlayer.ftm_pergame = Math.round(totalFtm / playedGames * 10) / 10

      updatedPlayer.oreb_pergame = Math.round(totalOreb / playedGames * 10) / 10
      updatedPlayer.dreb_pergame = Math.round(totalDreb / playedGames * 10) / 10

      //Don't calculate per 36 min stats if minutes per game is too low
      if (updatedPlayer.min_pergame >= 10) {
        updatedPlayer.pts_per36 = Math.round(updatedPlayer.pts_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
        updatedPlayer.ast_per36 = Math.round(updatedPlayer.ast_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
        updatedPlayer.reb_per36 = Math.round(updatedPlayer.reb_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
        updatedPlayer.stl_per36 = Math.round(updatedPlayer.stl_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
        updatedPlayer.blk_per36 = Math.round(updatedPlayer.blk_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
        updatedPlayer.turnover_per36 = Math.round(updatedPlayer.turnover_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
        updatedPlayer.pf_per36 = Math.round(updatedPlayer.pf_pergame / updatedPlayer.min_pergame * 36 * 10) / 10

        updatedPlayer.fga_per36 = Math.round(updatedPlayer.fga_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
        updatedPlayer.fgm_per36 = Math.round(updatedPlayer.fgm_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
        updatedPlayer.fg3a_per36 = Math.round(updatedPlayer.fg3a_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
        updatedPlayer.fg3m_per36 = Math.round(updatedPlayer.fg3m_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
        updatedPlayer.fta_per36 = Math.round(updatedPlayer.fta_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
        updatedPlayer.ftm_per36 = Math.round(updatedPlayer.ftm_pergame / updatedPlayer.min_pergame * 36 * 10) / 10

        updatedPlayer.oreb_per36 = Math.round(updatedPlayer.oreb_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
        updatedPlayer.dreb_per36 = Math.round(updatedPlayer.dreb_pergame / updatedPlayer.min_pergame * 36 * 10) / 10
      }
    } else {
      updatedPlayer.playerId = playerStat.playerId
    }
    updatedPlayer.played_games = playedGames
    playerTotalStats = playerTotalStats.map(s => s.name === playerStat.name ? updatedPlayer : s)
  })
  //Pct
  /* const dataFgPct = barChartDataService.fgPct(playerTotalStats, playerAmount)
  const dataFg3Pct = barChartDataService.fg3Pct(playerTotalStats, playerAmount)
  const dataFtPct = barChartDataService.ftPct(playerTotalStats, playerAmount)
  const optionsFgPct = barChartOptionsService.fgPct
  const optionsFg3Pct = barChartOptionsService.fg3Pct
  const optionsFtPct = barChartOptionsService.ftPct */

  //Total
  const dataTotalPoints = barChartDataService.totalPoints(playerTotalStats, playerAmount)
  const dataTotalAssists = barChartDataService.totalAssists(playerTotalStats, playerAmount)
  const dataTotalRebounds = barChartDataService.totalRebounds(playerTotalStats, playerAmount)
  const dataTotalBlocks = barChartDataService.totalBlocks(playerTotalStats, playerAmount)
  const dataTotalSteals = barChartDataService.totalSteals(playerTotalStats, playerAmount)
  const dataTotalTurnovers = barChartDataService.totalTurnovers(playerTotalStats, playerAmount)
  const dataTotalPersonalFouls = barChartDataService.totalPF(playerTotalStats, playerAmount)
  const dataTotalMinutes = barChartDataService.totalMinutes(playerTotalStats, playerAmount)
  const optionsTotalPoints = barChartOptionsService.totalPoints
  const optionsTotalAssists = barChartOptionsService.totalAssists
  const optionsTotalRebounds = barChartOptionsService.totalRebounds
  const optionsTotalBlocks = barChartOptionsService.totalBlocks
  const optionsTotalSteals = barChartOptionsService.totalSteals
  const optionsTotalTurnovers = barChartOptionsService.totalTurnovers
  const optionsTotalPersonalFouls = barChartOptionsService.totalPF
  const optionsTotalMinutes = barChartOptionsService.totalMinutes

  //Per game
  const dataPerGamePoints = barChartDataService.perGamePoints(playerTotalStats, playerAmount)
  const dataPerGameAssists = barChartDataService.perGameAssists(playerTotalStats, playerAmount)
  const dataPerGameRebounds = barChartDataService.perGameRebounds(playerTotalStats, playerAmount)
  const dataPerGameBlocks = barChartDataService.perGameBlock(playerTotalStats, playerAmount)
  const dataPerGameSteals = barChartDataService.perGameSteals(playerTotalStats, playerAmount)
  const dataPerGameTurnovers = barChartDataService.perGameTurnovers(playerTotalStats, playerAmount)
  const dataAstToTurnover = barChartDataService.astToTurnover(playerTotalStats, playerAmount)
  const dataPerGamePersonalFouls = barChartDataService.perGamePF(playerTotalStats, playerAmount)
  const dataPerGameMinutes = barChartDataService.perGameMinutes(playerTotalStats, playerAmount)
  const optionsPerGamePoints = barChartOptionsService.perGamePoints
  const optionsPerGameAssists = barChartOptionsService.perGameAssists
  const optionsPerGameRebounds = barChartOptionsService.perGameRebounds
  const optionsPerGameBlocks = barChartOptionsService.perGameBlocks
  const optionsPerGameSteals = barChartOptionsService.perGameSteals
  const optionsPerGameTurnovers = barChartOptionsService.perGameTurnovers
  const optionsAstToTurnover = barChartOptionsService.astToTurnover
  const optionsPerGamePersonalFouls = barChartOptionsService.perGamePF
  const optionsPerGameMinutes = barChartOptionsService.perGameMinutes

  //Per 36 minutes
  const dataPer36Points = barChartDataService.per36Points(playerTotalStats, playerAmount)
  const dataPer36Assists = barChartDataService.per36Assists(playerTotalStats, playerAmount)
  const dataPer36Rebounds = barChartDataService.per36Rebounds(playerTotalStats, playerAmount)
  const dataPer36Blocks = barChartDataService.per36Blocks(playerTotalStats, playerAmount)
  const dataPer36Steals = barChartDataService.per36Steals(playerTotalStats, playerAmount)
  const dataPer36Turnovers = barChartDataService.per36Turnovers(playerTotalStats, playerAmount)
  const dataPer36PersonalFouls = barChartDataService.per36PF(playerTotalStats, playerAmount)
  const optionsPer36Points = barChartOptionsService.per36Points
  const optionsPer36Assists = barChartOptionsService.per36Assists
  const optionsPer36Rebounds = barChartOptionsService.per36Rebounds
  const optionsPer36Blocks = barChartOptionsService.per36Blocks
  const optionsPer36Steals = barChartOptionsService.per36Steals
  const optionsPer36Turnovers = barChartOptionsService.per36Turnovers
  const optionsPer36PersonalFouls = barChartOptionsService.per36PF

  /* const legend = {
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

  //////////////////////////////////////////////////////////////////////

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


  //////////////////////////////////////////////////////////////////////////


  const optionsPer36Points = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Points per 36 min',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsPer36Assists = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Assists per 36 min',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsPer36Rebounds = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Rebounds per 36 min',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsPer36Blocks = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Blocks per 36 min',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsPer36Steals = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Steals per 36 min',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsPer36Turnovers = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Turnovers per 36 min',
      fontSize: 16,
      fontColor: 'white'
    }
  }
  const optionsPer36PersonalFouls = {
    legend: legend,
    plugins: plugins,
    title: {
      display: true,
      text: 'Fouls per 36 min',
      fontSize: 16,
      fontColor: 'white'
    }
  }

  const dataPer36Points = {
    labels: playerTotalStats
      .sort((a, b) => b.ptsPer36 - a.ptsPer36)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Points per 36 min',
      data: playerTotalStats
        .sort((a, b) => b.ptsPer36 - a.ptsPer36)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.ptsPer36),
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
  const dataPer36Assists = {
    labels: playerTotalStats
      .sort((a, b) => b.astPer36 - a.astPer36)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Assists per 36 min',
      data: playerTotalStats
        .sort((a, b) => b.astPer36 - a.astPer36)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.astPer36),
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
  const dataPer36Rebounds = {
    labels: playerTotalStats
      .sort((a, b) => b.rebPer36 - a.rebPer36)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Rebounds per 36 min',
      data: playerTotalStats
        .sort((a, b) => b.rebPer36 - a.rebPer36)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.rebPer36),
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
  const dataPer36Blocks = {
    labels: playerTotalStats
      .sort((a, b) => b.blkPer36 - a.blkPer36)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Blocks per 36 min',
      data: playerTotalStats
        .sort((a, b) => b.blkPer36 - a.blkPer36)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.blkPer36),
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
  const dataPer36Steals = {
    labels: playerTotalStats
      .sort((a, b) => b.stlPer36 - a.stlPer36)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Steals per 36 min',
      data: playerTotalStats
        .sort((a, b) => b.stlPer36 - a.stlPer36)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.stlPer36),
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
  const dataPer36Turnovers = {
    labels: playerTotalStats
      .sort((a, b) => b.turnoverPer36 - a.turnoverPer36)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Turnovers per 36 min',
      data: playerTotalStats
        .sort((a, b) => b.turnoverPer36 - a.turnoverPer36)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.turnoverPer36),
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
  const dataPer36PersonalFouls = {
    labels: playerTotalStats
      .sort((a, b) => b.pfPer36 - a.pfPer36)
      .slice(0, 5)
      .map(playerTotalStat => playerTotalStat.name),
    datasets: [{
      label: 'Personal fouls per 36 min',
      data: playerTotalStats
        .sort((a, b) => b.pfPer36 - a.pfPer36)
        .slice(0, 5)
        .map(playerTotalStat => playerTotalStat.pfPer36),
      backgroundColor: [
        colors.orangeLine,
        colors.yellowLine,
        colors.greenLine,
        colors.magentaLine,
        colors.cyanLine,
      ],
      hoverOffset: 4
    }]
  } */

  return (
    <div>
      <div className='chart'>
        {teamStats.length > 0 && totalSelected
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


        {teamStats.length > 0 && perGameSelected
          ? <>
            <br></br>
            <Row>
              <Col sm={6}>
                <Bar
                  data={dataPerGamePoints}
                  options={optionsPerGamePoints}
                />
              </Col>
              <Col sm={6}>
                <Bar
                  data={dataPerGameAssists}
                  options={optionsPerGameAssists}
                />
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br>
            <Row>
              <Col sm={6}>
                <Bar
                  data={dataPerGameRebounds}
                  options={optionsPerGameRebounds}
                />
              </Col>

              <Col sm={6}>
                <Bar
                  data={dataPerGameBlocks}
                  options={optionsPerGameBlocks}
                />
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br><Row>
              <Col sm={6}>
                <Bar
                  data={dataPerGameSteals}
                  options={optionsPerGameSteals}
                />
              </Col>
              <Col sm={6}>
                <Bar
                  data={dataPerGameTurnovers}
                  options={optionsPerGameTurnovers}
                />
              </Col>
            </Row>
            <br></br>
            <br></br>
            <br></br><Row>
              <Col sm={6}>
                <Bar
                  data={dataPerGamePersonalFouls}
                  options={optionsPerGamePersonalFouls}
                />
              </Col>
              <Col sm={6}>
                <Bar
                  data={dataPerGameMinutes}
                  options={optionsPerGameMinutes}
                />
              </Col>
            </Row>
          </>
          : <></>}

        {teamStats.length > 0 && per36Selected
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

export default TeamStats