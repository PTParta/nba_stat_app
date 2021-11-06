import React from 'react'
import BarCharts from '../common/BarCharts'
import 'chartjs-plugin-labels'

const TeamStats = (
  {
    teamStats,
    postSeasonSelected,
    perGameSelected,
    totalSelected,
    per36Selected,
    pctSelected
  }
) => {

  const playerAmount = 20

  //filter out bad data where player is not defined
  teamStats = teamStats.filter(teamStat => teamStat.player !== undefined)

  let playerTotalStats = []

  teamStats.forEach(teamStat => {
    if(teamStat.player !== null){
      const playerFullName = `${teamStat.player.first_name} ${teamStat.player.last_name}`
      if (playerTotalStats.find(playerTotalStat => playerTotalStat.name === playerFullName) === undefined) {
        const player = { name: playerFullName }
        playerTotalStats.push(player)
      }
    }
  })


  const teamStatsFiltered = teamStats.filter(teamStat => teamStat.game.postseason === postSeasonSelected && teamStat.player !== null)

  playerTotalStats.forEach(playerStat => {
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
  /* 
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
   */


  return (
    <div>
      <BarCharts
        stats={playerTotalStats}
        pctSelected={pctSelected}
        totalSelected={totalSelected}
        perGameSelected={perGameSelected}
        per36Selected={per36Selected}
        postSeasonSelected={postSeasonSelected}
        playerAmount={playerAmount}
        postSeasonFilteringDone={true}
      />

      {/* <div>
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
    </div > */}
    </div >
  )
}

export default TeamStats