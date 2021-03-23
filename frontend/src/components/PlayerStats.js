import React from 'react'
import { Line } from 'react-chartjs-2'
import trailingMeanService from '../services/trailingMeans'
//import { Button } from 'react-bootstrap'

const PlayerStats = ({ playerStats, teams, selectedSeasons }) => {

  //const [statsData, setStatsData] = useState()
  //const [showAll, setShowAll] = useState(true)

  const seasonsNumberFormat = selectedSeasons.map(season => Number(season))
  const data = {
    labels: playerStats.map(playerStat => playerStat.game.date.split('T')[0].concat('\n').concat(teams.find(team => team.id === playerStat.game.visitor_team_id).abbreviation).concat('@').concat(teams.find(team => team.id === playerStat.game.home_team_id).abbreviation)),
    datasets: [
      {
        label: 'pts',
        data: playerStats.map(playerStat => playerStat.pts),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
        pointBackgroundColor: 'rgba(255, 99, 132, 0.3)',
        showLine: false,
      },
      {
        label: 'pts trailing mean',

        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.7)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1.0)',
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.pts(playerStats),
      },
      {
        label: 'ast',
        data: playerStats.map(playerStat => playerStat.ast),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(0, 255, 30, 0.2)',
        pointBackgroundColor: 'rgba(0, 255, 30, 0.3)',
        showLine: false
      },
      {
        label: 'ast trailing mean',

        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(0, 255, 30, 1.0)',
        pointBackgroundColor: 'rgba(0, 255, 30, 1.0)',
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.ast(playerStats),
      },
      {
        label: 'reb',
        data: playerStats.map(playerStat => playerStat.reb),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 230, 0, 0.3)',
        pointBackgroundColor: 'rgba(255, 230, 0, 0.3)',
        showLine: false
      },
      {
        label: 'reb trailing mean',

        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 230, 0, 1.0)',
        pointBackgroundColor: 'rgba(0, 255, 30, 1.0)',
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.reb(playerStats),
      },
      {
        label: 'blk',
        data: playerStats.map(playerStat => playerStat.blk),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 0, 0, 0.3)',
        pointBackgroundColor: 'rgba(255, 0, 0, 1.0)',
        showLine: false
      },
      {
        label: 'blk trailing mean',

        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 0, 0, 1.0)',
        pointBackgroundColor: 'rgba(0, 255, 30, 1.0)',
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.blk(playerStats),
      },
      {
        label: 'stl',
        data: playerStats.map(playerStat => playerStat.stl),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(0, 247, 255, 0.2)',
        pointBackgroundColor: 'rgba(0, 247, 255, 0.3)',
        showLine: false
      },
      {
        label: 'stl trailing mean',

        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(0, 247, 255, 1.0)',
        pointBackgroundColor: 'rgba(0, 255, 30, 1.0)',
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.stl(playerStats),
      },
      {
        label: 'turnover',
        data: playerStats.map(playerStat => playerStat.turnover),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 0, 255, 0.2)',
        pointBackgroundColor: 'rgba(255, 0, 255, 0.3)',
        showLine: false
      },
      {
        label: 'turnover trailing mean',
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 0, 255, 1.0)',
        pointBackgroundColor: 'rgba(0, 255, 30, 1.0)',
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.turnover(playerStats),
      },
      {
        label: 'min',
        data: playerStats.map(playerStat => playerStat.min ? Number(playerStat.min.split(':')[0]) : null),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 140, 0, 0.2)',
        pointBackgroundColor: 'rgba(255, 140, 0 0.3)',
        showLine: false
      },
      {
        label: 'min trailing mean',
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 140, 0, 1.0)',
        pointBackgroundColor: 'rgba(255, 140, 0, 1.0)',
        showLine: true,
        pointRadius: 0,
        data: trailingMeanService.min(playerStats),
      },
    ],
  }
  return (
    <div>
      <br></br>
      <h3 style={{ color: 'white', paddingLeft: '30px' }} >{playerStats[0].player.first_name} {playerStats[0].player.last_name} {Math.min.apply(Math, seasonsNumberFormat)} - {Math.max.apply(Math, seasonsNumberFormat)}
      </h3>
      <div className='chart'>

        {/*  {statsData ? <Line
          data={statsData}
        /> : <></>} */}

        <Line
          data={data}
        />
      </div>
      <div>
      </div>
    </div>
  )
}

export default PlayerStats