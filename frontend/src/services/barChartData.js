import colors from '../styling/colors'

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


// Pct //////////////////////////////////////////////////////////
const fgPct = (stats) => {
  const dataFgPct = {
    labels: stats
      .filter(stat => stat.fgm_pergame >= 5)
      .sort((a, b) => b.fg_pct - a.fg_pct)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Fg %',
      data: stats
        .filter(stat => stat.fga_pergame >= 5)
        .sort((a, b) => b.fg_pct - a.fg_pct)
        .slice(0, 20)
        .map(stat => stat.fg_pct),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataFgPct
}

const fg3Pct = (stats) => {
  const dataFg3Pct = {
    labels: stats
      .filter(stat => stat.fg3m_pergame >= 2)
      .sort((a, b) => b.fg3_pct - a.fg3_pct)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Fg3 %',
      data: stats
        .filter(stat => stat.fg3m_pergame >= 2)
        .sort((a, b) => b.fg3_pct - a.fg3_pct)
        .slice(0, 20)
        .map(stat => stat.fg3_pct),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataFg3Pct
}

const ftPct = (stats) => {
  const dataFtPct = {
    labels: stats
      .filter(stat => stat.ftm_pergame >= 2 && stat.fta_total >= 30)
      .sort((a, b) => b.ft_pct - a.ft_pct)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Ft %',
      data: stats
        .filter(stat => stat.ftm_pergame >= 2 && stat.fta_total >= 30)
        .sort((a, b) => b.ft_pct - a.ft_pct)
        .slice(0, 20)
        .map(stat => stat.ft_pct),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataFtPct
}

// Ast/turnover //////////////////////////////////////////////////////////
const astToTurnover = (stats) => {
  const dataAstToTurnover = {
    labels: stats
      .filter(stat => stat.ast_total >= 200 || stat.ast_pergame >= 3)
      .sort((a, b) => b.ast_to_turnover - a.ast_to_turnover)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Ast/Turnover ratio',
      data: stats
        .filter(stat => stat.ast_total >= 200 || stat.ast_pergame >= 3)
        .sort((a, b) => b.ast_to_turnover - a.ast_to_turnover)
        .slice(0, 20)
        .map(stat => stat.ast_to_turnover),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataAstToTurnover
}

// Total //////////////////////////////////////////////////////////
const totalPoints = (stats) => {
  const dataTotalPoints = {
    labels: stats
      .sort((a, b) => b.pts_total - a.pts_total)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Total points',
      data: stats
        .sort((a, b) => b.pts_total - a.pts_total)
        .slice(0, 20)
        .map(stat => stat.pts_total),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataTotalPoints
}

const totalAssists = (stats) => {
  const dataTotalAssists = {
    labels: stats
      .sort((a, b) => b.ast_total - a.ast_total)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Total assists',
      data: stats
        .sort((a, b) => b.ast_total - a.ast_total)
        .slice(0, 20)
        .map(stat => stat.ast_total),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataTotalAssists
}

const totalRebounds = (stats) => {
  const dataTotalRebounds = {
    labels: stats
      .sort((a, b) => b.reb_total - a.reb_total)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Total rebounds',
      data: stats
        .sort((a, b) => b.reb_total - a.reb_total)
        .slice(0, 20)
        .map(stat => stat.reb_total),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataTotalRebounds
}

const totalBlocks = (stats) => {
  const dataTotalBlocks = {
    labels: stats
      .sort((a, b) => b.blk_total - a.blk_total)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Total blocks',
      data: stats
        .sort((a, b) => b.blk_total - a.blk_total)
        .slice(0, 20)
        .map(stat => stat.blk_total),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataTotalBlocks
}

const totalSteals = (stats) => {
  const dataTotalSteals = {
    labels: stats
      .sort((a, b) => b.stl_total - a.stl_total)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Total steals',
      data: stats
        .sort((a, b) => b.stl_total - a.stl_total)
        .slice(0, 20)
        .map(stat => stat.stl_total),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataTotalSteals
}

const totalTurnovers = (stats) => {
  const dataTotalTurnovers = {
    labels: stats
      .sort((a, b) => b.turnover_total - a.turnover_total)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Total turnovers',
      data: stats
        .sort((a, b) => b.turnover_total - a.turnover_total)
        .slice(0, 20)
        .map(stat => stat.turnover_total),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataTotalTurnovers
}

const totalPF = (stats) => {
  const dataTotalPF = {
    labels: stats
      .sort((a, b) => b.pf_total - a.pf_total)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Total personal fouls',
      data: stats
        .sort((a, b) => b.pf_total - a.pf_total)
        .slice(0, 20)
        .map(stat => stat.pf_total),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataTotalPF
}

const totalMinutes = (stats) => {
  const dataTotalMinutes = {
    labels: stats
      .sort((a, b) => b.min_total - a.min_total)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Total minutes',
      data: stats
        .sort((a, b) => b.min_total - a.min_total)
        .slice(0, 20)
        .map(stat => stat.min_total),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataTotalMinutes
}




// Per game //////////////////////////////////////////////////////////
const perGamePoints = (stats) => {
  const dataPerGamePoints = {
    labels: stats
      .sort((a, b) => b.pts_pergame - a.pts_pergame)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Points per game',
      data: stats
        .sort((a, b) => b.pts_pergame - a.pts_pergame)
        .slice(0, 20)
        .map(stat => stat.pts_pergame),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataPerGamePoints
}

const perGameAssists = (stats) => {
  const dataPerGameAssists = {
    labels: stats
      .sort((a, b) => b.ast_pergame - a.ast_pergame)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Assists per game',
      data: stats
        .sort((a, b) => b.ast_pergame - a.ast_pergame)
        .slice(0, 20)
        .map(stat => stat.ast_pergame),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataPerGameAssists
}

const perGameRebounds = (stats) => {
  const dataPerGameRebounds = {
    labels: stats
      .sort((a, b) => b.reb_pergame - a.reb_pergame)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Rebounds per game',
      data: stats
        .sort((a, b) => b.reb_pergame - a.reb_pergame)
        .slice(0, 20)
        .map(stat => stat.reb_pergame),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataPerGameRebounds
}

const perGameBlock = (stats) => {
  const dataPerGameBlocks = {
    labels: stats
      .sort((a, b) => b.blk_pergame - a.blk_pergame)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Blocks per game',
      data: stats
        .sort((a, b) => b.blk_pergame - a.blk_pergame)
        .slice(0, 20)
        .map(stat => stat.blk_pergame),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataPerGameBlocks
}

const perGameSteals = (stats) => {
  const dataPerGameSteals = {
    labels: stats
      .sort((a, b) => b.stl_pergame - a.stl_pergame)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Steals per game',
      data: stats
        .sort((a, b) => b.stl_pergame - a.stl_pergame)
        .slice(0, 20)
        .map(stat => stat.stl_pergame),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataPerGameSteals
}

const perGameTurnovers = (stats) => {
  const dataPerGameTurnovers = {
    labels: stats
      .sort((a, b) => b.turnover_pergame - a.turnover_pergame)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Turnovers per game',
      data: stats
        .sort((a, b) => b.turnover_pergame - a.turnover_pergame)
        .slice(0, 20)
        .map(stat => stat.turnover_pergame),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataPerGameTurnovers
}

const perGamePF = (stats) => {
  const dataPerGamePF = {
    labels: stats
      .sort((a, b) => b.pf_pergame - a.pf_pergame)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Personal fouls per game',
      data: stats
        .sort((a, b) => b.pf_pergame - a.pf_pergame)
        .slice(0, 20)
        .map(stat => stat.pf_pergame),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataPerGamePF
}

const perGameMinutes = (stats) => {
  const dataPerGameMinutes = {
    labels: stats
      .sort((a, b) => b.min_pergame - a.min_pergame)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Minutes per game',
      data: stats
        .sort((a, b) => b.min_pergame - a.min_pergame)
        .slice(0, 20)
        .map(stat => stat.min_pergame),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataPerGameMinutes
}

// Per 36 minutes //////////////////////////////////////////////////////////
const per36Points = (stats) => {
  const dataPer36Points = {
    labels: stats
      .sort((a, b) => b.pts_per36 - a.pts_per36)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Points per 36 min',
      data: stats
        .sort((a, b) => b.pts_per36 - a.pts_per36)
        .slice(0, 20)
        .map(stat => stat.pts_per36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataPer36Points
}

const per36Assists = (stats) => {
  const dataPer36Assists = {
    labels: stats
      .sort((a, b) => b.ast_per36 - a.ast_per36)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Assists per 36 min',
      data: stats
        .sort((a, b) => b.ast_per36 - a.ast_per36)
        .slice(0, 20)
        .map(stat => stat.ast_per36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataPer36Assists
}

const per36Rebounds = (stats) => {
  const dataPer36Rebounds = {
    labels: stats
      .sort((a, b) => b.reb_per36 - a.reb_per36)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Rebounds per 36 min',
      data: stats
        .sort((a, b) => b.reb_per36 - a.reb_per36)
        .slice(0, 20)
        .map(stat => stat.reb_per36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataPer36Rebounds
}

const per36Blocks = (stats) => {
  const dataPer36Blocks = {
    labels: stats
      .sort((a, b) => b.blk_per36 - a.blk_per36)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Blocks per 36 min',
      data: stats
        .sort((a, b) => b.blk_per36 - a.blk_per36)
        .slice(0, 20)
        .map(stat => stat.blk_per36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataPer36Blocks
}

const per36Steals = (stats) => {
  const dataPer36Steals = {
    labels: stats
      .sort((a, b) => b.stl_per36 - a.stl_per36)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Steals per 36 min',
      data: stats
        .sort((a, b) => b.stl_per36 - a.stl_per36)
        .slice(0, 20)
        .map(stat => stat.stl_per36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataPer36Steals
}

const per36Turnovers = (stats) => {
  const dataPer36Turnovers = {
    labels: stats
      .sort((a, b) => b.turnover_per36 - a.turnover_per36)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Turnovers per 36 min',
      data: stats
        .sort((a, b) => b.turnover_per36 - a.turnover_per36)
        .slice(0, 20)
        .map(stat => stat.turnover_per36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataPer36Turnovers
}

const per36PF = (stats) => {
  const dataPer36PF = {
    labels: stats
      .sort((a, b) => b.pf_per36 - a.pf_per36)
      .slice(0, 20)
      .map(stat => stat.name),
    datasets: [{
      label: 'Personal fouls per 36 min',
      data: stats
        .sort((a, b) => b.pf_per36 - a.pf_per36)
        .slice(0, 20)
        .map(stat => stat.pf_per36),
      backgroundColor: backgroundColor,
      hoverOffset: 4
    }]
  }
  return dataPer36PF
}



const barChartDataService = {
  fgPct,
  fg3Pct,
  ftPct,
  totalPoints,
  totalAssists,
  totalRebounds,
  totalBlocks,
  totalSteals,
  totalTurnovers,
  totalPF,
  totalMinutes,
  perGamePoints,
  perGameAssists,
  perGameRebounds,
  perGameBlock,
  perGameSteals,
  perGameTurnovers,
  astToTurnover,
  perGamePF,
  perGameMinutes,
  per36Points,
  per36Assists,
  per36Rebounds,
  per36Blocks,
  per36Steals,
  per36Turnovers,
  per36PF
}

export default barChartDataService