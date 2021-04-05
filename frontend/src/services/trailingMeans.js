
const trailingGames = 20

const countTrailingMean = (playerStats, statCategory) => {
  let trailingAverage = []
  for (let i = 0; i < trailingGames; i++) {
    trailingAverage[i] = null
  }
  for (let i = trailingGames; i < playerStats.length; i++) {
    let statsInTrailingGames = 0
    for (let j = 1; j <= trailingGames; j++) {
      statsInTrailingGames += playerStats[i - trailingGames + j][statCategory];
    }
    const mean = statsInTrailingGames / trailingGames
    trailingAverage.push(mean)
  }
  return trailingAverage
}

const countTrailingMeanPct = (playerStats, statCategory, attemptsInStatCategory) => {
  let percentages = []
  for (let i = 0; i < trailingGames; i++) {
    percentages[i] = null
  }
  for (let i = trailingGames; i < playerStats.length; i++) {
    let totalMadeBaskets = 0
    let totalAttemptedBaskets = 0

    for (let j = 1; j <= trailingGames; j++) {
      totalMadeBaskets += playerStats[i - trailingGames + j][statCategory]
      totalAttemptedBaskets += playerStats[i - trailingGames + j][attemptsInStatCategory]
    }
    const trailingPercentage = totalMadeBaskets / totalAttemptedBaskets * 100
    percentages.push(trailingPercentage)
  }
  return percentages
}
/* 
const countPct = (playerStats, statCategory, attemptsInStatCategory) => {

  let totalMadeBaskets = 0
  let totalAttemptedBaskets = 0
  let percentages = []

  playerStats.forEach(playerStat => {
    totalMadeBaskets += playerStat[statCategory]
    totalAttemptedBaskets += playerStat[attemptsInStatCategory]
    percentages.push(totalMadeBaskets / totalAttemptedBaskets * 100)
  })
  return percentages
} */

const pts = (playerStats) => {
  return countTrailingMean(playerStats, 'pts')
}
const ast = (playerStats) => {
  return countTrailingMean(playerStats, 'ast')
}
const reb = (playerStats) => {
  return countTrailingMean(playerStats, 'reb')
}
const blk = (playerStats) => {
  return countTrailingMean(playerStats, 'blk')
}
const stl = (playerStats) => {
  return countTrailingMean(playerStats, 'stl')
}
const turnover = (playerStats) => {
  return countTrailingMean(playerStats, 'turnover')
}
const min = (playerStats) => {
  playerStats = playerStats.map(playerStat => ({ ...playerStat, min: playerStat.min ? Number(playerStat.min.split(':')[0]) : null }))
  return countTrailingMean(playerStats, 'min')
}
const pf = (playerStats) => {
  return countTrailingMean(playerStats, 'pf')
}
const dreb = (playerStats) => {
  return countTrailingMean(playerStats, 'dreb')
}
const oreb = (playerStats) => {
  return countTrailingMean(playerStats, 'oreb')
}
const fg_pct = (playerStats) => {
  return countTrailingMeanPct(playerStats, 'fgm', 'fga')
}
const fg3_pct = (playerStats) => {
  return countTrailingMeanPct(playerStats, 'fg3m', 'fg3a')
}
const ft_pct = (playerStats) => {
  return countTrailingMeanPct(playerStats, 'ftm', 'fta')
}
/* const fg_pct = (playerStats) => {
  return countPct(playerStats, 'fgm', 'fga')
}
const fg3_pct = (playerStats) => {
  return countPct(playerStats, 'fg3m', 'fg3a')
}
const ft_pct = (playerStats) => {
  return countPct(playerStats, 'ftm', 'fta')
} */
const fga = (playerStats) => {
  return countTrailingMean(playerStats, 'fga')
}
const fgm = (playerStats) => {
  return countTrailingMean(playerStats, 'fgm')
}
const fg3a = (playerStats) => {
  return countTrailingMean(playerStats, 'fg3a')
}
const fg3m = (playerStats) => {
  return countTrailingMean(playerStats, 'fg3m')
}
const fta = (playerStats) => {
  return countTrailingMean(playerStats, 'fta')
}
const ftm = (playerStats) => {
  return countTrailingMean(playerStats, 'ftm')
}


const trailingMeanService = {
  pts,
  ast,
  reb,
  blk,
  stl,
  turnover,
  min,
  pf,
  dreb,
  oreb,
  fg_pct,
  fg3_pct,
  ft_pct,
  fga,
  fgm,
  fg3a,
  fg3m,
  fta,
  ftm
}

export default trailingMeanService