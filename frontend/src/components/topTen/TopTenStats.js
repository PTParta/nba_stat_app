import React from 'react'
import { Row } from 'react-bootstrap'
import { Bar } from 'react-chartjs-2'
import 'chartjs-plugin-labels'
import barChartDataService from '../../services/barChartData'
import barChartOptionsService from '../../services/barChartOptions'

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
  const topTenStatsFilteredByPostseason = topTenStats.filter(stat => stat.postseason === postSeasonSelected)
  //filter out bad data where player is not defined
  //topTenStatsFiltered = topTenStatsFiltered.filter(topTenStat => topTenStat.player !== undefined)

  //Pct
  const dataFgPct = barChartDataService.fgPct(topTenStatsFilteredByPostseason)
  const dataFg3Pct = barChartDataService.fg3Pct(topTenStatsFilteredByPostseason)
  const dataFtPct = barChartDataService.ftPct(topTenStatsFilteredByPostseason)
  const optionsFgPct = barChartOptionsService.fgPct
  const optionsFg3Pct = barChartOptionsService.fg3Pct
  const optionsFtPct = barChartOptionsService.ftPct

  //Total
  const dataTotalPoints = barChartDataService.totalPoints(topTenStatsFilteredByPostseason)
  const dataTotalAssists = barChartDataService.totalAssists(topTenStatsFilteredByPostseason)
  const dataTotalRebounds = barChartDataService.totalRebounds(topTenStatsFilteredByPostseason)
  const dataTotalBlocks = barChartDataService.totalBlocks(topTenStatsFilteredByPostseason)
  const dataTotalSteals = barChartDataService.totalSteals(topTenStatsFilteredByPostseason)
  const dataTotalTurnovers = barChartDataService.totalTurnovers(topTenStatsFilteredByPostseason)
  const dataTotalPersonalFouls = barChartDataService.totalPF(topTenStatsFilteredByPostseason)
  const dataTotalMinutes = barChartDataService.totalMinutes(topTenStatsFilteredByPostseason)
  const optionsTotalPoints = barChartOptionsService.totalPoints
  const optionsTotalAssists = barChartOptionsService.totalAssists
  const optionsTotalRebounds = barChartOptionsService.totalRebounds
  const optionsTotalBlocks = barChartOptionsService.totalBlocks
  const optionsTotalSteals = barChartOptionsService.totalSteals
  const optionsTotalTurnovers = barChartOptionsService.totalTurnovers
  const optionsTotalPersonalFouls = barChartOptionsService.totalPF
  const optionsTotalMinutes = barChartOptionsService.totalMinutes

  //Per game
  const dataPerGamePoints = barChartDataService.perGamePoints(topTenStatsFilteredByPostseason)
  const dataPerGameAssists = barChartDataService.perGameAssists(topTenStatsFilteredByPostseason)
  const dataPerGameRebounds = barChartDataService.perGameRebounds(topTenStatsFilteredByPostseason)
  const dataPerGameBlocks = barChartDataService.perGameBlock(topTenStatsFilteredByPostseason)
  const dataPerGameSteals = barChartDataService.perGameSteals(topTenStatsFilteredByPostseason)
  const dataPerGameTurnovers = barChartDataService.perGameTurnovers(topTenStatsFilteredByPostseason)
  const dataAstToTurnover = barChartDataService.astToTurnover(topTenStatsFilteredByPostseason)
  const dataPerGamePersonalFouls = barChartDataService.perGamePF(topTenStatsFilteredByPostseason)
  const dataPerGameMinutes = barChartDataService.perGameMinutes(topTenStatsFilteredByPostseason)
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
  const dataPer36Points = barChartDataService.per36Points(topTenStatsFilteredByPostseason)
  const dataPer36Assists = barChartDataService.per36Assists(topTenStatsFilteredByPostseason)
  const dataPer36Rebounds = barChartDataService.per36Rebounds(topTenStatsFilteredByPostseason)
  const dataPer36Blocks = barChartDataService.per36Blocks(topTenStatsFilteredByPostseason)
  const dataPer36Steals = barChartDataService.per36Steals(topTenStatsFilteredByPostseason)
  const dataPer36Turnovers = barChartDataService.per36Turnovers(topTenStatsFilteredByPostseason)
  const dataPer36PersonalFouls = barChartDataService.per36PF(topTenStatsFilteredByPostseason)
  const optionsPer36Points = barChartOptionsService.per36Points
  const optionsPer36Assists = barChartOptionsService.per36Assists
  const optionsPer36Rebounds = barChartOptionsService.per36Rebounds
  const optionsPer36Blocks = barChartOptionsService.per36Blocks
  const optionsPer36Steals = barChartOptionsService.per36Steals
  const optionsPer36Turnovers = barChartOptionsService.per36Turnovers
  const optionsPer36PersonalFouls = barChartOptionsService.per36PF



  return (
    <div>
      <div className='chart'>
        {topTenStatsFilteredByPostseason.length > 0 && pctSelected
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

        {topTenStatsFilteredByPostseason.length > 0 && totalSelected
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


        {topTenStatsFilteredByPostseason.length > 0 && perGameSelected
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
          </>
          : <></>}

        {topTenStatsFilteredByPostseason.length > 0 && per36Selected
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