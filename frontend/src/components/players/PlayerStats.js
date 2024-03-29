import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'
import trailingMeanService from '../../services/trailingMeans'
import colors from '../../styling/colors'
import Loader from 'react-loader-spinner'

const PlayerStats = (
  {
    playerStats,
    teams,
    postSeasonSelected,
    ptsSelected,
    astSelected,
    rebSelected,
    drebSelected,
    orebSelected,
    blkSelected,
    stlSelected,
    turnoverSelected,
    fgaSelected,
    fgmSelected,
    fg_pctSelected,
    fg3aSelected,
    fg3mSelected,
    fg3_pctSelected,
    ftaSelected,
    ftmSelected,
    ft_pctSelected,
    pfSelected,
    minSelected,
    selectedFirstSeason,
    selectedLastSeason,
    fetchingData,
    trailingAverage
  }
) => {

  const options = {
    legend: {
      onClick: (e) => e.stopPropagation(),
      display: false
    },
    scales: {
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false ,
          color: "grey"
        },
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: 'white',
          fontSize: 14,
        },
        gridLines: {
          display: true ,
          color: "grey"
        },
      }]
    }
  }

  const playerStatsFiltered = playerStats.filter(playerStat => playerStat.game.postseason === postSeasonSelected)

  const seasons = playerStatsFiltered.map(playerStat => playerStat.game.season)
  const startOfCareerSeason = Math.min.apply(Math, seasons)
  const endOfCareerSeason = Math.max.apply(Math, seasons)

  let startSeasonToShow
  let endSeasonToShow

  if (selectedFirstSeason > startOfCareerSeason) {
    startSeasonToShow = selectedFirstSeason
  } else {
    startSeasonToShow = startOfCareerSeason
  }

  if (selectedLastSeason < endOfCareerSeason) {
    endSeasonToShow = selectedLastSeason
  } else {
    endSeasonToShow = endOfCareerSeason
  }


  const games = playerStatsFiltered.filter(playerStat => playerStat.game.season >= selectedFirstSeason && playerStat.game.season <= selectedLastSeason).length
  const filteredDataToShow = playerStats.filter(
    playerStat =>
      playerStat.game.postseason === postSeasonSelected
      && playerStat.game.season >= selectedFirstSeason
      && playerStat.game.season <= selectedLastSeason
  )

  const data = {
    labels: filteredDataToShow
      .map(playerStat => playerStat.game.date.split('T')[0]
        .concat('\n')
        .concat(teams.find(team => team.apiId === playerStat.game.visitor_team_id).abbreviation)
        .concat('@')
        .concat(teams.find(team => team.apiId === playerStat.game.home_team_id).abbreviation)
        .concat(playerStat.game.postseason ? ' POST' : ' REG')),
    datasets: [
      {
        label: 'pts',
        data: filteredDataToShow.map(playerStat => playerStat.pts),
        fill: false,
        borderColor: colors.lightGreyDot,
        pointBackgroundColor: colors.lightGreyDot,
        showLine: false,
        hidden: !ptsSelected
      },
      {
        label: 'pts trailing mean',

        fill: false,
        borderColor: colors.lightGreyLine,
        pointBackgroundColor: colors.lightGreyLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.pts(filteredDataToShow, trailingAverage),
        hidden: !ptsSelected
      },
      {
        label: 'ast',
        data: filteredDataToShow.map(playerStat => playerStat.ast),
        fill: false,
        borderColor: colors.brownDot,
        pointBackgroundColor: colors.brownDot,
        showLine: false,
        hidden: !astSelected
      },
      {
        label: 'ast trailing mean',

        fill: false,
        borderColor: colors.brownLine,
        pointBackgroundColor: colors.brownLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.ast(filteredDataToShow, trailingAverage),
        hidden: !astSelected
      },
      {
        label: 'reb',
        data: filteredDataToShow.map(playerStat => playerStat.reb),
        fill: false,
        borderColor: colors.oliveDot,
        pointBackgroundColor: colors.oliveDot,
        showLine: false,
        hidden: !rebSelected
      },
      {
        label: 'reb trailing mean',

        fill: false,
        borderColor: colors.oliveLine,
        pointBackgroundColor: colors.oliveLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.reb(filteredDataToShow, trailingAverage),
        hidden: !rebSelected
      },
      {
        label: 'blk',
        data: filteredDataToShow.map(playerStat => playerStat.blk),
        fill: false,
        borderColor: colors.tealDot,
        pointBackgroundColor: colors.tealDot,
        showLine: false,
        hidden: !blkSelected
      },
      {
        label: 'blk trailing mean',

        fill: false,
        borderColor: colors.tealLine,
        pointBackgroundColor: colors.tealLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.blk(filteredDataToShow, trailingAverage),
        hidden: !blkSelected
      },
      {
        label: 'stl',
        data: filteredDataToShow.map(playerStat => playerStat.stl),
        fill: false,
        borderColor: colors.navyDot,
        pointBackgroundColor: colors.navyDot,
        showLine: false,
        hidden: !stlSelected
      },
      {
        label: 'stl trailing mean',

        fill: false,
        borderColor: colors.navyLine,
        pointBackgroundColor: colors.navyLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.stl(filteredDataToShow, trailingAverage),
        hidden: !stlSelected
      },
      {
        label: 'turnover',
        data: filteredDataToShow.map(playerStat => playerStat.turnover),
        fill: false,
        borderColor: colors.redDot,
        pointBackgroundColor: colors.redDot,
        showLine: false,
        hidden: !turnoverSelected
      },
      {
        label: 'turnover trailing mean',
        fill: false,
        borderColor: colors.redLine,
        pointBackgroundColor: colors.redLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.turnover(filteredDataToShow, trailingAverage),
        hidden: !turnoverSelected
      },
      {
        label: 'min',
        data: filteredDataToShow.map(playerStat => playerStat.min ? Number(playerStat.min.split(':')[0]) : null),
        fill: false,
        borderColor: colors.orangeDot,
        pointBackgroundColor: colors.orangeDot,
        showLine: false,
        hidden: !minSelected
      },
      {
        label: 'min trailing mean',
        fill: false,
        borderColor: colors.orangeLine,
        pointBackgroundColor: colors.orangeLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.min(filteredDataToShow, trailingAverage),
        hidden: !minSelected
      },
      {
        label: 'pf',
        data: filteredDataToShow.map(playerStat => playerStat.pf),
        fill: false,
        borderColor: colors.yellowDot,
        pointBackgroundColor: colors.yellowDot,
        showLine: false,
        hidden: !pfSelected
      },
      {
        label: 'pf trailing mean',
        fill: false,
        borderColor: colors.yellowLine,
        pointBackgroundColor: colors.yellowLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.pf(filteredDataToShow, trailingAverage),
        hidden: !pfSelected
      },
      {
        label: 'dreb',
        data: filteredDataToShow.map(playerStat => playerStat.dreb),
        fill: false,
        borderColor: colors.limeDot,
        pointBackgroundColor: colors.limeDot,
        showLine: false,
        hidden: !drebSelected
      },
      {
        label: 'dreb trailing mean',
        fill: false,
        borderColor: colors.limeLine,
        pointBackgroundColor: colors.limeLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.dreb(filteredDataToShow, trailingAverage),
        hidden: !drebSelected
      },
      {
        label: 'oreb',
        data: filteredDataToShow.map(playerStat => playerStat.oreb),
        fill: false,
        borderColor: colors.greenDot,
        pointBackgroundColor: colors.greenDot,
        showLine: false,
        hidden: !orebSelected
      },
      {
        label: 'oreb trailing mean',
        fill: false,
        borderColor: colors.greenLine,
        pointBackgroundColor: colors.greenLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.oreb(filteredDataToShow, trailingAverage),
        hidden: !orebSelected
      },
      {
        label: 'fg_pct',
        data: filteredDataToShow.map(playerStat => playerStat.fg_pct <= 1 ? playerStat.fg_pct * 100 : playerStat.fg_pct),
        fill: false,
        borderColor: colors.cyanDot,
        pointBackgroundColor: colors.cyanDot,
        showLine: false,
        hidden: !fg_pctSelected
      },
      {
        label: 'fg_pct trailing mean',
        fill: false,
        borderColor: colors.cyanLine,
        pointBackgroundColor: colors.cyanLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.fg_pct(filteredDataToShow
          .map(playerStat => ({ ...playerStat, fg_pct: playerStat.fg_pct <= 1 ? playerStat.fg_pct * 100 : playerStat.fg_pct })), trailingAverage),
        hidden: !fg_pctSelected
      },
      {
        label: 'fg3_pct',
        data: filteredDataToShow.map(playerStat => playerStat.fg3_pct <= 1 ? playerStat.fg3_pct * 100 : playerStat.fg3_pct),
        fill: false,
        borderColor: colors.blueDot,
        pointBackgroundColor: colors.blueDot,
        showLine: false,
        hidden: !fg3_pctSelected
      },
      {
        label: 'fg3_pct trailing mean',
        fill: false,
        borderColor: colors.blueLine,
        pointBackgroundColor: colors.blueLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.fg3_pct(filteredDataToShow
          .map(playerStat => ({ ...playerStat, fg3_pct: playerStat.fg3_pct <= 1 ? playerStat.fg3_pct * 100 : playerStat.fg3_pct })), trailingAverage),
        hidden: !fg3_pctSelected
      },
      {
        label: 'ft_pct',
        data: filteredDataToShow.map(playerStat => playerStat.ft_pct <= 1 ? playerStat.ft_pct * 100 : playerStat.ft_pct),
        fill: false,
        borderColor: colors.purpleDot,
        pointBackgroundColor: colors.purpleDot,
        showLine: false,
        hidden: !ft_pctSelected
      },
      {
        label: 'ft_pct trailing mean',
        fill: false,
        borderColor: colors.purpleLine,
        pointBackgroundColor: colors.purpleLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.ft_pct(filteredDataToShow
          .map(playerStat => ({
            ...playerStat,
            ft_pct: (playerStat.ft_pct <= 1 ? playerStat.ft_pct * 100 : playerStat.ft_pct)
          })), trailingAverage),
        hidden: !ft_pctSelected
      },
      {
        label: 'fga',
        data: filteredDataToShow.map(playerStat => playerStat.fga),
        fill: false,
        borderColor: colors.magentaDot,
        pointBackgroundColor: colors.magentaDot,
        showLine: false,
        hidden: !fgaSelected
      },
      {
        label: 'fga trailing mean',
        fill: false,
        borderColor: colors.magentaLine,
        pointBackgroundColor: colors.magentaLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.fga(filteredDataToShow, trailingAverage),
        hidden: !fgaSelected
      },
      {
        label: 'fgm',
        data: filteredDataToShow.map(playerStat => playerStat.fgm),
        fill: false,
        borderColor: colors.greyDot,
        pointBackgroundColor: colors.greyDot,
        showLine: false,
        hidden: !fgmSelected
      },
      {
        label: 'fgm trailing mean',
        fill: false,
        borderColor: colors.greyLine,
        pointBackgroundColor: colors.greyLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.fgm(filteredDataToShow, trailingAverage),
        hidden: !fgmSelected
      },
      {
        label: 'fg3a',
        data: filteredDataToShow.map(playerStat => playerStat.fg3a),
        fill: false,
        borderColor: colors.pinkDot,
        pointBackgroundColor: colors.pinkDot,
        showLine: false,
        hidden: !fg3aSelected
      },
      {
        label: 'fg3a trailing mean',
        fill: false,
        borderColor: colors.pinkLine,
        pointBackgroundColor: colors.pinkLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.fg3a(filteredDataToShow, trailingAverage),
        hidden: !fg3aSelected
      },
      {
        label: 'fg3m',
        data: filteredDataToShow.map(playerStat => playerStat.fg3m),
        fill: false,
        borderColor: colors.apricotDot,
        pointBackgroundColor: colors.apricotDot,
        showLine: false,
        hidden: !fg3mSelected
      },
      {
        label: 'fg3m trailing mean',
        fill: false,
        borderColor: colors.apricotLine,
        pointBackgroundColor: colors.apricotLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.fg3m(filteredDataToShow, trailingAverage),
        hidden: !fg3mSelected
      },
      {
        label: 'fta',
        data: filteredDataToShow.map(playerStat => playerStat.fta),
        fill: false,
        borderColor: colors.beigeDot,
        pointBackgroundColor: colors.beigeDot,
        showLine: false,
        hidden: !ftaSelected
      },
      {
        label: 'fta trailing mean',
        fill: false,
        borderColor: colors.beigeLine,
        pointBackgroundColor: colors.beigeLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.fta(filteredDataToShow, trailingAverage),
        hidden: !ftaSelected
      },
      {
        label: 'ftm',
        data: filteredDataToShow.map(playerStat => playerStat.ftm),
        fill: false,
        borderColor: colors.mintDot,
        pointBackgroundColor: colors.mintDot,
        showLine: false,
        hidden: !ftmSelected
      },
      {
        label: 'ftm trailing mean',
        fill: false,
        borderColor: colors.mintLine,
        pointBackgroundColor: colors.mintLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.ftm(filteredDataToShow, trailingAverage),
        hidden: !ftmSelected
      },
    ],
  }

  return (
    <div>
      <Container style={{ color: 'white', paddingLeft: '30px' }}>
        <Row style={{ textAlign: 'center' }}>
          {fetchingData
            ? <Col>
              <Loader type="Grid" color="white" height="25" width="25" />
              <br></br>
            </Col>
            : <>
              <Col>
                {games !== 0
                  ? <div>
                    {playerStats[0].player.first_name} {playerStats[0].player.last_name}, {startSeasonToShow} - {endSeasonToShow}, {games} games
                    </div>
                  : <div>
                    {playerStats[0].player.first_name} {playerStats[0].player.last_name}, {games} games
                  </div>}
              </Col>
            </>}
        </Row>
      </Container>
      <div className='chart'>
        <Line
          data={data}
          options={options}
        />
      </div>
    </div>
  )
}

export default PlayerStats