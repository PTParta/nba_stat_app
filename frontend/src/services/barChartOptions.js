
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


// Options pct //////////////////////////////////////////////////////////////////
const fgPct = {
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
const fg3Pct = {
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
const ftPct = {
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

// Options ast/turnover //////////////////////////////////////////////////////////////////
const astToTurnover = {
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

// Options total //////////////////////////////////////////////////////////////////
const totalPoints = {
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
const totalAssists = {
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
const totalRebounds = {
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
const totalBlocks = {
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
const totalSteals = {
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
const totalTurnovers = {
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
const totalPF = {
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
const totalMinutes = {
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

const totalFga = {
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
const totalFgm = {
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
const totalFg3a = {
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
const totalFg3m = {
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
const totalFta = {
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
const totalFtm = {
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


// Options per game //////////////////////////////////////////////////////////////////
const perGamePoints = {
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
const perGameAssists = {
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
const perGameRebounds = {
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
const perGameBlocks = {
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
const perGameSteals = {
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
const perGameTurnovers = {
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
const perGamePF = {
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
const perGameMinutes = {
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
const perGameFga = {
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
const perGameFgm = {
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
const perGameFg3a = {
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
const perGameFg3m = {
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
const perGameFta = {
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
const perGameFtm = {
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


// Options per 36 minutes //////////////////////////////////////////////////////////////////
const per36Points = {
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
const per36Assists = {
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
const per36Rebounds = {
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
const per36Blocks = {
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
const per36Steals = {
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
const per36Turnovers = {
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
const per36PF = {
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
const per36Fga = {
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
const per36Fgm = {
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
const per36Fg3a = {
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
const per36Fg3m = {
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
const per36Fta = {
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
const per36Ftm = {
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

const barChartOptionsService = {
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
  totalFga,
  totalFgm,
  totalFg3a,
  totalFg3m,
  totalFta,
  totalFtm,
  perGamePoints,
  perGameAssists,
  perGameRebounds,
  perGameBlocks,
  perGameSteals,
  perGameTurnovers,
  astToTurnover,
  perGamePF,
  perGameMinutes,
  perGameFga,
  perGameFgm,
  perGameFg3a,
  perGameFg3m,
  perGameFta,
  perGameFtm,
  per36Points,
  per36Assists,
  per36Rebounds,
  per36Blocks,
  per36Steals,
  per36Turnovers,
  per36PF,
  per36Fga,
  per36Fgm,
  per36Fg3a,
  per36Fg3m,
  per36Fta,
  per36Ftm
}

export default barChartOptionsService