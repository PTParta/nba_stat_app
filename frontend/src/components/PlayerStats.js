import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'

const PlayerStats = ({ playerStats, teams }) => {
  const [chartData, setChartData] = useState([])

  const data = {
    labels: playerStats.map(playerStat => playerStat.game.date.split('T')[0].concat('\n').concat(teams.find(team => team.id === playerStat.game.visitor_team_id).abbreviation)),
    datasets: [
      {
        label: 'pts',
        data: playerStats.map(playerStat => playerStat.pts),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'ast',
        data: playerStats.map(playerStat => playerStat.ast),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(0, 255, 30, 0.2)',
      },
      {
        label: 'reb',
        data: playerStats.map(playerStat => playerStat.reb),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 230, 0, 0.2)',
      },
      {
        label: 'blk',
        data: playerStats.map(playerStat => playerStat.blk),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 0, 0, 0.2)',
      },
      {
        label: 'stl',
        data: playerStats.map(playerStat => playerStat.stl),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(0, 247, 255, 0.2)',
      },
      {
        label: 'turnover',
        data: playerStats.map(playerStat => playerStat.turnover),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 0, 255, 0.2)',
      },
    ],
  }

  return (
    <div>
      <h3>{playerStats[0].player.first_name} {playerStats[0].player.last_name}</h3>
      <div className='chart'>
        <Line
          data={data}
        />
      </div>
      {/* {playerStats.map(playerStat =>
        <div key={playerStat.id}>
          <p>opponent: {teams.find(team => team.id === playerStat.game.visitor_team_id).full_name}</p>
          <p>date: {playerStat.game.date.split('T')[0]}</p>
          <p>points: {playerStat.pts}</p>
          <p>assists: {playerStat.ast}</p>
          <p>rebounds: {playerStat.reb}</p>
          <p>blocks: {playerStat.blk}</p>
          <p>steals: {playerStat.stl}</p>
          <p>3 point %:</p>

          <p>min: {playerStat.pts}</p>
          <p>pts: {playerStat.pts}</p>
          <p>fga: {playerStat.fga}</p>
          <p>fgm: {playerStat.fgm}</p>
          <p>fg_pct: {playerStat.fg_pct}</p>
          <p>fg3a: {playerStat.fg3a}</p>
          <p>fg3m: {playerStat.fg3m}</p>
          <p>fg3_pct: {playerStat.fg3_pct}</p>
          <p>fta: {playerStat.fta}</p>
          <p>ftm: {playerStat.ftm}</p>
          <p>ft_pct: {playerStat.ft_pct}</p>
          <p>reb: {playerStat.reb}</p>
          <p>dreb: {playerStat.dreb}</p>
          <p>oreb: {playerStat.oreb}</p>
          <p>ast: {playerStat.ast}</p>
          <p>blk: {playerStat.blk}</p>
          <p>stl: {playerStat.stl}</p>
          <p>turnover: {playerStat.turnover}</p>
          <p></p>
          <p></p>
          <br></br>
        </div>
      )} */}
      <div>

      </div>
    </div>
  )
}

export default PlayerStats