import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'
import colors from '../../styling/colors'



const PercentileStats = ({
  //selectedSeason,
  percentileStats,
  selectedPlayersNames,
  postSeasonSelected,
  perGameSelected,
  totalSelected,
  per36Selected,
  pctSelected
}
) => {

  console.log('percentileStats')
  console.log(percentileStats)

  const options = {
    legend: {
      onClick: (e) => e.stopPropagation(),
      display: true
    },
    scales: {
      xAxes: [{
        ticks: {
          display: true,
          fontColor: 'white',
          fontSize: 14,
        },
        gridLines: {
          display: false,
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
          display: true,
          color: "grey"
        },
      }]
    }
  }

  const percentileStatsFiltered = percentileStats.filter(playerStat => playerStat.postseason === postSeasonSelected)


  const data = {
    labels: ['pts', 'ast'/* , 'reb', 'blk', 'stl' *//* , 'turnover', 'pf', 'min' */],
    datasets: [
      {
        label: 'LeBron James',
        //data: [20, 10, 12, 2, 2],
        data: [percentileStats.find(s => s.name === 'LeBron James').pts_pergame,
        percentileStats.find(s => s.name === 'LeBron James').ast_pergame],
        fill: false,
        borderColor: colors.lightGreyLine,
        pointBackgroundColor: colors.lightGreyLine,
        showLine: true,
        hidden: false
      }

    ]
  }

  return (
    <>
      <div className='chart'>
        <Line
          data={data}
          options={options}
        />
      </div>
    </>
  )
}

export default PercentileStats
