import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'
import colors from '../../styling/colors'
import Loader from 'react-loader-spinner'



const PercentileStats = (
  //selectedSeason,
  fetchingData,
  percentileStats,
  selectedPlayersNames,
  regularSeasonSelected,
  postSeasonSelected,
  perGameSelected,
  totalSelected,
  per36Selected,
  pctSelected,
) => {

  console.log('percentileStats')

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

  //const percentileStatsFiltered = percentileStats.filter(playerStat => playerStat.postseason === postSeasonSelected)


  const data = {
    labels: ['pts', 'ast', 'reb', 'blk', 'stl'/* , 'turnover', 'pf', 'min' */],
    datasets: [
      {
        label: 'player 1 name',
        data: [20, 10, 12, 2, 2],
        //data: percentileStatsFiltered.filter(s => s.name === 'LeBron James').map(s => ({ pts: s.pts_pergame, ast: s.ast_pergame })),
        fill: false,
        borderColor: colors.lightGreyLine,
        pointBackgroundColor: colors.lightGreyLine,
        showLine: true,
        hidden: false
      },
      {
        label: 'player 2 name',
        data: [30, 5, 8, 1, 1],
        //data: percentileStatsFiltered.filter(s => s.name === 'LeBron James').map(s => ({ pts: s.pts_pergame, ast: s.ast_pergame })),
        fill: false,
        borderColor: colors.brownLine,
        pointBackgroundColor: colors.brownLine,
        showLine: true,
        hidden: false
      }

    ]
  }

  return (
    <>
      {/* <Container style={{ color: 'white', paddingLeft: '30px' }}>
        <Row style={{ textAlign: 'center' }}>
          {fetchingData
            ? <Col>
              <Loader type="Grid" color="white" height="25" width="25" />
              <br></br>
            </Col>
            : <>

            </>}
        </Row>
      </Container> */}
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
