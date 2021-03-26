
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
  return countTrailingMean(playerStats, 'fg_pct')
}
const fg3_pct = (playerStats) => {
  return countTrailingMean(playerStats, 'fg3_pct')
}
const ft_pct = (playerStats) => {
  return countTrailingMean(playerStats, 'ft_pct')
}
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