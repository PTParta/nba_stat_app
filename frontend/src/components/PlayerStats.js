import React from 'react'
import { Line } from 'react-chartjs-2'
import trailingMeanService from '../services/trailingMeans'

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
    selectedLastSeason
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
    labels: playerStatsFiltered
      .filter(playerStat => playerStat.game.season >= selectedFirstSeason && playerStat.game.season <= selectedLastSeason)
      .map(playerStat => playerStat.game.date.split('T')[0]
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
      {
        label: 'pf',
        data: playerStatsFiltered.map(playerStat => playerStat.pf),
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
        data: trailingMeanService.pf(playerStatsFiltered),
        hidden: !pfSelected
      },
      {
        label: 'dreb',
        data: playerStatsFiltered.map(playerStat => playerStat.dreb),
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
        data: trailingMeanService.dreb(playerStatsFiltered),
        hidden: !drebSelected
      },
      {
        label: 'oreb',
        data: playerStatsFiltered.map(playerStat => playerStat.oreb),
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
        data: trailingMeanService.oreb(playerStatsFiltered),
        hidden: !orebSelected
      },
      {
        label: 'fg_pct',
        data: playerStatsFiltered.map(playerStat => playerStat.fg_pct <= 1 ? playerStat.fg_pct * 100 : playerStat.fg_pct),
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
        data: trailingMeanService.fg_pct(playerStatsFiltered
          .map(playerStat => ({ ...playerStat, fg_pct: playerStat.fg_pct <= 1 ? playerStat.fg_pct * 100 : playerStat.fg_pct }))),
        hidden: !fg_pctSelected
      },
      {
        label: 'fg3_pct',
        data: playerStatsFiltered.map(playerStat => playerStat.fg3_pct <= 1 ? playerStat.fg3_pct * 100 : playerStat.fg3_pct),
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
        data: trailingMeanService.fg3_pct(playerStatsFiltered
          .map(playerStat => ({ ...playerStat, fg3_pct: playerStat.fg3_pct <= 1 ? playerStat.fg3_pct * 100 : playerStat.fg3_pct }))),
        hidden: !fg3_pctSelected
      },
      {
        label: 'ft_pct',
        data: playerStatsFiltered.map(playerStat => playerStat.ft_pct <= 1 ? playerStat.ft_pct * 100 : playerStat.ft_pct),
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
        data: trailingMeanService.ft_pct(playerStatsFiltered
          .map(playerStat => ({
            ...playerStat,
            ft_pct: (playerStat.ft_pct <= 1 ? playerStat.ft_pct * 100 : playerStat.ft_pct)
          }))),
        hidden: !ft_pctSelected
      },
      {
        label: 'fga',
        data: playerStatsFiltered.map(playerStat => playerStat.fga),
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
        data: trailingMeanService.fga(playerStatsFiltered),
        hidden: !fgaSelected
      },
      {
        label: 'fgm',
        data: playerStatsFiltered.map(playerStat => playerStat.fgm),
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
        data: trailingMeanService.fgm(playerStatsFiltered),
        hidden: !fgmSelected
      },
      {
        label: 'fg3a',
        data: playerStatsFiltered.map(playerStat => playerStat.fg3a),
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
        data: trailingMeanService.fg3a(playerStatsFiltered),
        hidden: !fg3aSelected
      },
      {
        label: 'fg3m',
        data: playerStatsFiltered.map(playerStat => playerStat.fg3m),
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
        data: trailingMeanService.fg3m(playerStatsFiltered),
        hidden: !fg3mSelected
      },
      {
        label: 'fta',
        data: playerStatsFiltered.map(playerStat => playerStat.fta),
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
        data: trailingMeanService.fta(playerStatsFiltered),
        hidden: !ftaSelected
      },
      {
        label: 'ftm',
        data: playerStatsFiltered.map(playerStat => playerStat.ftm),
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
        data: trailingMeanService.ftm(playerStatsFiltered),
        hidden: !ftmSelected
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