
const countTrailingMean = (playerStats, statCategory, trailingGames) => {
  let trailingAverage = []
  for (let i = 0; i < trailingGames; i++) {
    trailingAverage[i] = null
  }
  for (let i = trailingGames; i < playerStats.length; i++) {
    let statsInTrailingGames = 0
    for (let j = 1; j <= trailingGames; j++) {
      statsInTrailingGames += playerStats[i - trailingGames + j][statCategory];
    }
    const mean = Math.floor(statsInTrailingGames / trailingGames * 10) / 10
    trailingAverage.push(mean)
  }
  return trailingAverage
}

const countTrailingMeanPct = (playerStats, statCategory, attemptsInStatCategory, trailingGames) => {
  let percentages = []
  for (let i = 0; i < trailingGames; i++) {
    percentages[i] = null
  }

  for (let i = trailingGames; i < playerStats.length; i++) {
    let totalMadeBaskets = 0
    let totalAttemptedBaskets = 0
    if (playerStats[i][attemptsInStatCategory] === 0) {
      percentages.push(percentages[i - 1])
      //playerStats[i][statCategory] = percentages[i - 1]
    } else {
      for (let j = 1; j <= trailingGames; j++) {
        if (playerStats[i - trailingGames + j][attemptsInStatCategory] === 0
          || playerStats[i - trailingGames + j][attemptsInStatCategory] < playerStats[i - trailingGames + j][statCategory]) {
          continue
        }
        totalMadeBaskets += playerStats[i - trailingGames + j][statCategory]
        totalAttemptedBaskets += playerStats[i - trailingGames + j][attemptsInStatCategory]
      }
      const trailingPercentage = Math.floor(totalMadeBaskets / totalAttemptedBaskets * 100 * 10) / 10
      percentages.push(trailingPercentage)
    }

  }
  return percentages
}

const pts = (playerStats, trailingGames) => {
  return countTrailingMean(playerStats, 'pts', trailingGames)
}
const ast = (playerStats, trailingGames) => {
  return countTrailingMean(playerStats, 'ast', trailingGames)
}
const reb = (playerStats, trailingGames) => {
  return countTrailingMean(playerStats, 'reb', trailingGames)
}
const blk = (playerStats, trailingGames) => {
  return countTrailingMean(playerStats, 'blk', trailingGames)
}
const stl = (playerStats, trailingGames) => {
  return countTrailingMean(playerStats, 'stl', trailingGames)
}
const turnover = (playerStats, trailingGames) => {
  return countTrailingMean(playerStats, 'turnover', trailingGames)
}
const min = (playerStats, trailingGames) => {
  playerStats = playerStats.map(playerStat => ({ ...playerStat, min: playerStat.min ? Number(playerStat.min.split(':')[0]) : null }))
  return countTrailingMean(playerStats, 'min', trailingGames)
}
const pf = (playerStats, trailingGames) => {
  return countTrailingMean(playerStats, 'pf', trailingGames)
}
const dreb = (playerStats, trailingGames) => {
  return countTrailingMean(playerStats, 'dreb', trailingGames)
}
const oreb = (playerStats, trailingGames) => {
  return countTrailingMean(playerStats, 'oreb', trailingGames)
}
const fg_pct = (playerStats, trailingGames) => {
  return countTrailingMeanPct(playerStats, 'fgm', 'fga', trailingGames)
}
const fg3_pct = (playerStats, trailingGames) => {
  return countTrailingMeanPct(playerStats, 'fg3m', 'fg3a', trailingGames)
}
const ft_pct = (playerStats, trailingGames) => {
  return countTrailingMeanPct(playerStats, 'ftm', 'fta', trailingGames)
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
const fga = (playerStats, trailingGames) => {
  return countTrailingMean(playerStats, 'fga', trailingGames)
}
const fgm = (playerStats, trailingGames) => {
  return countTrailingMean(playerStats, 'fgm', trailingGames)
}
const fg3a = (playerStats, trailingGames) => {
  return countTrailingMean(playerStats, 'fg3a', trailingGames)
}
const fg3m = (playerStats, trailingGames) => {
  return countTrailingMean(playerStats, 'fg3m', trailingGames)
}
const fta = (playerStats, trailingGames) => {
  return countTrailingMean(playerStats, 'fta', trailingGames)
}
const ftm = (playerStats, trailingGames) => {
  return countTrailingMean(playerStats, 'ftm', trailingGames)
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