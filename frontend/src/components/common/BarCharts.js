import React from 'react'
import { Row } from 'react-bootstrap'
import barChartDataService from '../../services/barChartData'
import barChartOptionsService from '../../services/barChartOptions'
import { Bar } from 'react-chartjs-2'

const BarCharts = (
  {
    stats,
    pctSelected,
    totalSelected,
    perGameSelected,
    per36Selected,
    postSeasonSelected,
    playerAmount,
    postSeasonFilteringDone
  }) => {

  //console.log(topTenStats)
  let statsFilteredByPostseason = []
  if (!postSeasonFilteringDone) {
    statsFilteredByPostseason = stats.filter(stat => stat.postseason === postSeasonSelected)
  } else {
    statsFilteredByPostseason = stats
  }

  //filter out bad data where player is not defined
  //topTenStatsFiltered = topTenStatsFiltered.filter(topTenStat => topTenStat.player !== undefined)

  //Pct
  const dataFgPct = barChartDataService.fgPct(statsFilteredByPostseason, playerAmount)
  const dataFg3Pct = barChartDataService.fg3Pct(statsFilteredByPostseason, playerAmount)
  const dataFtPct = barChartDataService.ftPct(statsFilteredByPostseason, playerAmount)
  const optionsFgPct = barChartOptionsService.fgPct
  const optionsFg3Pct = barChartOptionsService.fg3Pct
  const optionsFtPct = barChartOptionsService.ftPct

  //Total
  const dataTotalPoints = barChartDataService.totalPoints(statsFilteredByPostseason, playerAmount)
  const dataTotalAssists = barChartDataService.totalAssists(statsFilteredByPostseason, playerAmount)
  const dataTotalRebounds = barChartDataService.totalRebounds(statsFilteredByPostseason, playerAmount)
  const dataTotalBlocks = barChartDataService.totalBlocks(statsFilteredByPostseason, playerAmount)
  const dataTotalSteals = barChartDataService.totalSteals(statsFilteredByPostseason, playerAmount)
  const dataTotalTurnovers = barChartDataService.totalTurnovers(statsFilteredByPostseason, playerAmount)
  const dataTotalPersonalFouls = barChartDataService.totalPF(statsFilteredByPostseason, playerAmount)
  const dataTotalMinutes = barChartDataService.totalMinutes(statsFilteredByPostseason, playerAmount)
  const dataTotalFga = barChartDataService.totalFga(statsFilteredByPostseason, playerAmount)
  const dataTotalFgm = barChartDataService.totalFgm(statsFilteredByPostseason, playerAmount)
  const dataTotalFg3a = barChartDataService.totalFg3a(statsFilteredByPostseason, playerAmount)
  const dataTotalFg3m = barChartDataService.totalFg3m(statsFilteredByPostseason, playerAmount)
  const dataTotalFta = barChartDataService.totalFta(statsFilteredByPostseason, playerAmount)
  const dataTotalFtm = barChartDataService.totalFtm(statsFilteredByPostseason, playerAmount)
  const optionsTotalPoints = barChartOptionsService.totalPoints
  const optionsTotalAssists = barChartOptionsService.totalAssists
  const optionsTotalRebounds = barChartOptionsService.totalRebounds
  const optionsTotalBlocks = barChartOptionsService.totalBlocks
  const optionsTotalSteals = barChartOptionsService.totalSteals
  const optionsTotalTurnovers = barChartOptionsService.totalTurnovers
  const optionsTotalPersonalFouls = barChartOptionsService.totalPF
  const optionsTotalMinutes = barChartOptionsService.totalMinutes
  const optionsTotalFga = barChartOptionsService.totalFga
  const optionsTotalFgm = barChartOptionsService.totalFgm
  const optionsTotalFg3a = barChartOptionsService.totalFg3a
  const optionsTotalFg3m = barChartOptionsService.totalFg3m
  const optionsTotalFta = barChartOptionsService.totalFta
  const optionsTotalFtm = barChartOptionsService.totalFtm

  //Per game
  const dataPerGamePoints = barChartDataService.perGamePoints(statsFilteredByPostseason, playerAmount)
  const dataPerGameAssists = barChartDataService.perGameAssists(statsFilteredByPostseason, playerAmount)
  const dataPerGameRebounds = barChartDataService.perGameRebounds(statsFilteredByPostseason, playerAmount)
  const dataPerGameBlocks = barChartDataService.perGameBlock(statsFilteredByPostseason, playerAmount)
  const dataPerGameSteals = barChartDataService.perGameSteals(statsFilteredByPostseason, playerAmount)
  const dataPerGameTurnovers = barChartDataService.perGameTurnovers(statsFilteredByPostseason, playerAmount)
  const dataAstToTurnover = barChartDataService.astToTurnover(statsFilteredByPostseason, playerAmount)
  const dataPerGamePersonalFouls = barChartDataService.perGamePF(statsFilteredByPostseason, playerAmount)
  const dataPerGameMinutes = barChartDataService.perGameMinutes(statsFilteredByPostseason, playerAmount)
  const dataPerGameFga = barChartDataService.perGameFga(statsFilteredByPostseason, playerAmount)
  const dataPerGameFgm = barChartDataService.perGameFgm(statsFilteredByPostseason, playerAmount)
  const dataPerGameFg3a = barChartDataService.perGameFg3a(statsFilteredByPostseason, playerAmount)
  const dataPerGameFg3m = barChartDataService.perGameFg3m(statsFilteredByPostseason, playerAmount)
  const dataPerGameFta = barChartDataService.perGameFta(statsFilteredByPostseason, playerAmount)
  const dataPerGameFtm = barChartDataService.perGameFtm(statsFilteredByPostseason, playerAmount)
  const optionsPerGamePoints = barChartOptionsService.perGamePoints
  const optionsPerGameAssists = barChartOptionsService.perGameAssists
  const optionsPerGameRebounds = barChartOptionsService.perGameRebounds
  const optionsPerGameBlocks = barChartOptionsService.perGameBlocks
  const optionsPerGameSteals = barChartOptionsService.perGameSteals
  const optionsPerGameTurnovers = barChartOptionsService.perGameTurnovers
  const optionsAstToTurnover = barChartOptionsService.astToTurnover
  const optionsPerGamePersonalFouls = barChartOptionsService.perGamePF
  const optionsPerGameMinutes = barChartOptionsService.perGameMinutes
  const optionsPerGameFga = barChartOptionsService.perGameFga
  const optionsPerGameFgm = barChartOptionsService.perGameFgm
  const optionsPerGameFg3a = barChartOptionsService.perGameFg3a
  const optionsPerGameFg3m = barChartOptionsService.perGameFg3m
  const optionsPerGameFta = barChartOptionsService.perGameFta
  const optionsPerGameFtm = barChartOptionsService.perGameFtm


  //Per 36 minutes
  const dataPer36Points = barChartDataService.per36Points(statsFilteredByPostseason, playerAmount)
  const dataPer36Assists = barChartDataService.per36Assists(statsFilteredByPostseason, playerAmount)
  const dataPer36Rebounds = barChartDataService.per36Rebounds(statsFilteredByPostseason, playerAmount)
  const dataPer36Blocks = barChartDataService.per36Blocks(statsFilteredByPostseason, playerAmount)
  const dataPer36Steals = barChartDataService.per36Steals(statsFilteredByPostseason, playerAmount)
  const dataPer36Turnovers = barChartDataService.per36Turnovers(statsFilteredByPostseason, playerAmount)
  const dataPer36PersonalFouls = barChartDataService.per36PF(statsFilteredByPostseason, playerAmount)
  const dataPer36Fga = barChartDataService.per36Fga(statsFilteredByPostseason, playerAmount)
  const dataPer36Fgm = barChartDataService.per36Fgm(statsFilteredByPostseason, playerAmount)
  const dataPer36Fg3a = barChartDataService.per36Fg3a(statsFilteredByPostseason, playerAmount)
  const dataPer36Fg3m = barChartDataService.per36Fg3m(statsFilteredByPostseason, playerAmount)
  const dataPer36Fta = barChartDataService.per36Fta(statsFilteredByPostseason, playerAmount)
  const dataPer36Ftm = barChartDataService.per36Ftm(statsFilteredByPostseason, playerAmount)
  const optionsPer36Points = barChartOptionsService.per36Points
  const optionsPer36Assists = barChartOptionsService.per36Assists
  const optionsPer36Rebounds = barChartOptionsService.per36Rebounds
  const optionsPer36Blocks = barChartOptionsService.per36Blocks
  const optionsPer36Steals = barChartOptionsService.per36Steals
  const optionsPer36Turnovers = barChartOptionsService.per36Turnovers
  const optionsPer36PersonalFouls = barChartOptionsService.per36PF
  const optionsPer36Fga = barChartOptionsService.per36Fga
  const optionsPer36Fgm = barChartOptionsService.per36Fgm
  const optionsPer36Fg3a = barChartOptionsService.per36Fg3a
  const optionsPer36Fg3m = barChartOptionsService.per36Fg3m
  const optionsPer36Fta = barChartOptionsService.per36Fta
  const optionsPer36Ftm = barChartOptionsService.per36Ftm

  return (
    <div className='chart'>
      {statsFilteredByPostseason.length > 0 && pctSelected
        ? <>
          <br></br>
          <Row>
            <Bar
              data={dataFgPct}
              options={optionsFgPct}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataFg3Pct}
              options={optionsFg3Pct}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataFtPct}
              options={optionsFtPct}
            />
          </Row>
        </>
        : <></>}

      {statsFilteredByPostseason.length > 0 && totalSelected
        ? <>
          <br></br>
          <Row>
            <Bar
              data={dataTotalPoints}
              options={optionsTotalPoints}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
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
          <br></br>
          <br></br>
          <br></br>
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
          <br></br>
          <br></br>
          <br></br>
          <Row>
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
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataTotalMinutes}
              options={optionsTotalMinutes}
            />
          </Row>

          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataTotalFga}
              options={optionsTotalFga}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataTotalFgm}
              options={optionsTotalFgm}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataTotalFg3a}
              options={optionsTotalFg3a}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataTotalFg3m}
              options={optionsTotalFg3m}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataTotalFta}
              options={optionsTotalFta}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataTotalFtm}
              options={optionsTotalFtm}
            />
          </Row>
        </>
        : <></>}


      {statsFilteredByPostseason.length > 0 && perGameSelected
        ? <>
          <br></br>
          <Row>
            <Bar
              data={dataPerGamePoints}
              options={optionsPerGamePoints}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataPerGameAssists}
              options={optionsPerGameAssists}
            />

          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataPerGameRebounds}
              options={optionsPerGameRebounds}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataPerGameBlocks}
              options={optionsPerGameBlocks}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataPerGameSteals}
              options={optionsPerGameSteals}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataPerGameTurnovers}
              options={optionsPerGameTurnovers}
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
              data={dataPerGamePersonalFouls}
              options={optionsPerGamePersonalFouls}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataPerGameMinutes}
              options={optionsPerGameMinutes}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataPerGameFga}
              options={optionsPerGameFga}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataPerGameFgm}
              options={optionsPerGameFgm}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataPerGameFg3a}
              options={optionsPerGameFg3a}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataPerGameFg3m}
              options={optionsPerGameFg3m}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataPerGameFta}
              options={optionsPerGameFta}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataPerGameFtm}
              options={optionsPerGameFtm}
            />
          </Row>
        </>
        : <></>}

      {statsFilteredByPostseason.length > 0 && per36Selected
        ? <>
          <br></br>
          <Row>
            <Bar
              data={dataPer36Points}
              options={optionsPer36Points}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>

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
          <br></br>
          <br></br>
          <br></br>
          <Row>
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
          <br></br>
          <br></br>
          <br></br>
          <Row>
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
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataPer36Fga}
              options={optionsPer36Fga}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataPer36Fgm}
              options={optionsPer36Fgm}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataPer36Fg3a}
              options={optionsPer36Fg3a}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataPer36Fg3m}
              options={optionsPer36Fg3m}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataPer36Fta}
              options={optionsPer36Fta}
            />
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Bar
              data={dataPer36Ftm}
              options={optionsPer36Ftm}
            />
          </Row>
        </>
        : <></>}


    </div>
  )
}

export default BarCharts
