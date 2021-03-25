import React from 'react'
import { Line } from 'react-chartjs-2'
import trailingMeanService from '../services/trailingMeans'

const PlayerStats = (
  {
    playerStats,
    teams,
    selectedSeasons,
    regularSeasonSelected,
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
    setPfSelected
  }
) => {

  const colors = {
    'maroonDot': 'rgba(128,0,0,0.3)',
    'maroonLine': 'rgba(128,0,0,1.0)',
    'brownDot': 'rgba(170,110,40,0.3)',
    'brownLine': 'rgba(170,110,40,1.0)',
    'oliveDot': 'rgba(128,128,0,0.3)',
    'oliveLine': 'rgba(128,128,0,1.0)',
    'tealDot': 'rgba(0,128,128,0.3)',
    'tealLine': 'rgba(0,128,128,1.0)',
    'navyDot': 'rgba(0,0,128,0.3)',
    'navyLine': 'rgba(0,0,128,1.0)',
    'redDot': 'rgba(230,25,75,0.3)',
    'redLine': 'rgba(230,25,75,1.0)',
    'orangeDot': 'rgba(245,130,48,0.3)',
    'orangeLine': 'rgba(245,130,48,1.0)',
    'yellowDot': 'rgba(255,225,25,0.3)',
    'yellowLine': 'rgba(255,225,25,1.0)',
    'limeDot': 'rgba(210,245,60,0.3)',
    'limeLine': 'rgba(210,245,60,1.0)',
    'greenDot': 'rgba(60,180,75,0.3)',
    'greenLine': 'rgba(60,180,75,1.0)',
    'cyanDot': 'rgba(70,240,240,0.3)',
    'cyanLine': 'rgba(70,240,240,1.0)',
    'blueDot': 'rgba(0,130,200,0.3)',
    'blueLine': 'rgba(0,130,200,1.0)',
    'purpleDot': 'rgba(145,30,180,0.3)',
    'purpleLine': 'rgba(145,30,180,1.0)',
    'magentaDot': 'rgba(240,50,230,0.3)',
    'magentaLine': 'rgba(240,50,230,1.0)',
    'greyDot': 'rgba(128,128,128,0.3)',
    'greyLine': 'rgba(128,128,128,1.0)',
    'pinkDot': 'rgba(250,190,212,0.3)',
    'pinkLine': 'rgba(250,190,212,1.0)',
    'apricotDot': 'rgba(255,215,180,0.3)',
    'apricotLine': 'rgba(255,215,180,1.0)',
    'beigeDot': 'rgba(255,250,200,0.3)',
    'beigeLine': 'rgba(255,250,200,1.0)',
    'mintDot': 'rgba(170,255,195,0.3)',
    'mintLine': 'rgba(170,255,195,1.0)',
    'lavenderDot': 'rgba(220,190,255,0.3)',
    'lavenderLine': 'rgba(220,190,255,1.0)',
    'whiteDot': 'rgba(255,255,255,0.3)',
    'whiteLine': 'rgba(255,255,255,1.0)'
  }

  const options = {
    //responsive: true,
    //maintainAspectRatio: false,
    legend: {
      onClick: (e) => e.stopPropagation()
    }
  }

  const playerStatsFiltered = playerStats.filter(playerStat => playerStat.game.postseason === postSeasonSelected)

  const data = {
    labels: playerStatsFiltered.map(playerStat => playerStat.game.date.split('T')[0]
      .concat('\n')
      .concat(teams.find(team => team.id === playerStat.game.visitor_team_id).abbreviation)
      .concat('@')
      .concat(teams.find(team => team.id === playerStat.game.home_team_id).abbreviation)
      .concat(playerStat.game.postseason ? ' POST' : ' REG')),
    datasets: [
      {
        //data: playerStats.map(playerStat => (playerStat.pts && playerStat.game.postseason === true)),
        label: 'pts',
        data: playerStatsFiltered.map(playerStat => playerStat.pts),
        fill: false,
        borderColor: colors.maroonDot,
        pointBackgroundColor: colors.maroonDot,
        showLine: false,
        hidden: !ptsSelected
      },
      {
        label: 'pts trailing mean',

        fill: false,
        borderColor: colors.maroonLine,
        pointBackgroundColor: colors.maroonLine,
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.pts(playerStatsFiltered),
        hidden: !ptsSelected
      },
      {
        label: 'ast',
        data: playerStatsFiltered.map(playerStat => playerStat.ast),
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
        data: trailingMeanService.ast(playerStatsFiltered),
        hidden: !astSelected
      },
      {
        label: 'reb',
        data: playerStatsFiltered.map(playerStat => playerStat.reb),
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
        data: trailingMeanService.reb(playerStatsFiltered),
        hidden: !rebSelected
      },
      {
        label: 'blk',
        data: playerStatsFiltered.map(playerStat => playerStat.blk),
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
        data: trailingMeanService.blk(playerStatsFiltered),
        hidden: !blkSelected
      },
      {
        label: 'stl',
        data: playerStatsFiltered.map(playerStat => playerStat.stl),
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
        data: trailingMeanService.stl(playerStatsFiltered),
        hidden: !stlSelected
      },
      {
        label: 'turnover',
        data: playerStatsFiltered.map(playerStat => playerStat.turnover),
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
        data: trailingMeanService.turnover(playerStatsFiltered),
        hidden: !turnoverSelected
      },
      {
        label: 'min',
        data: playerStatsFiltered.map(playerStat => playerStat.min ? Number(playerStat.min.split(':')[0]) : null),
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
        data: trailingMeanService.min(playerStatsFiltered),
        hidden: !minSelected
      },
    ],
  }
  return (
    <div>
      <br></br>
      <h3 style={{ color: 'white', paddingLeft: '30px' }} >
        {playerStats[0].player.first_name} {playerStats[0].player.last_name}
      </h3>
      <br></br>
      <div className='chart'>
        <Line
          data={data}
          options={options}
        />
      </div>
      <div>
      </div>
    </div>
  )
}

export default PlayerStats