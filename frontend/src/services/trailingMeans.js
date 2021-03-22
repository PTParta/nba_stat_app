
const trailingGames = 10

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
const trailingMeanService = { pts, ast, reb, blk, stl, turnover }

export default trailingMeanService