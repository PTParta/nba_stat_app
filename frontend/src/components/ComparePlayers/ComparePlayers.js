import React, { useState, useEffect } from 'react'
import SelectSeason from './SelectSeason'
import SelectPlayer from './SelectPlayer'
import PlayerComparisonStats from './ComparePlayersStats'
import DescriptionPlayerComparison from './DescriptionComparePlayers'
import SelectPerTotal from './SelectPerTotal'
import SelectRegularPost from './SelectRegularPost'
import Reset from './Reset'
import Logo from '../Logo'
import Title from '../Title'
import { Row, Col } from 'react-bootstrap'
import ReactGa from 'react-ga'
import Loader from 'react-loader-spinner'
require('dotenv').config()


const PlayerComparison = ({ players, fetchingData, setFetchingData }) => {
  const [selectedSeason, setSelectedSeason] = useState('')
  const [playersForSelectedSeason, setPlayersForSelectedSeason] = useState([])
  const [/* selectedPlayer */, setSelectedPlayer] = useState('')
  const [statsForSelectedPlayers, setStatsForSelectedPlayers] = useState([])
  const [regularSeasonSelected, setRegularSeasonSelected] = useState(true)
  const [postSeasonSelected, setPostSeasonSelected] = useState(false)
  const [perGameSelected, setPerGameSelected] = useState(true)
  const [totalSelected, setTotalSelected] = useState(false)
  const [per36Selected, setPer36Selected] = useState(false)
  const [numberOfSelectedPlayers,setNumberOfSelectedPlayers] = useState(0)

  useEffect(() => {

    ReactGa.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_CODE)
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div>

      <Row>
        <Col sm={4} style={{ textAlign: 'center' }}>
        </Col>
        {playersForSelectedSeason.length === 0
          ? < Col sm={4}>
            <SelectSeason
              selectedSeason={selectedSeason}
              setSelectedSeason={setSelectedSeason}
              setFetchingData={setFetchingData}
              setPlayersForSelectedSeason={setPlayersForSelectedSeason}
              players={players}
            />
          </Col>
          : <Col sm={4}>
            <Reset
              setPlayersForSelectedSeason={setPlayersForSelectedSeason}
              setSelectedSeason={setSelectedSeason}
              setStatsForSelectedPlayers={setStatsForSelectedPlayers} />
            <div style={{ color: 'white' }}>season {selectedSeason}</div>
          </Col>}
        <Col sm={4}>
          {playersForSelectedSeason.length > 0
            ? <SelectPerTotal
              setPerGameSelected={setPerGameSelected}
              setTotalSelected={setTotalSelected}
              setPer36Selected={setPer36Selected}
            />
            : <></>}
        </Col>
      </Row>
      {
        playersForSelectedSeason.length === 0 && !fetchingData
          ? <>
            <br></br>
            <br></br>
            <Row style={{ textAlign: 'center' }}>
              <Col sm={4}></Col>
              <Col sm={4}>
                <Logo />
              </Col>
              <Col sm={4}></Col>
            </Row>
            <br></br>
            <br></br>
            <Row style={{ textAlign: 'center' }}>
              <Col sm={4} xs={1}></Col>
              <Col sm={4} xs={10}>
                <Title />
              </Col>
              <Col sm={4} xs={1}></Col>
            </Row>

            <Row style={{ textAlign: 'center' }}>
              <Col sm={4} xs={1}></Col>
              <Col sm={4} xs={10}>
                <DescriptionPlayerComparison />
              </Col>
              <Col sm={4} xs={1}></Col>
            </Row>
          </>
          : <></>
      }
      {
        playersForSelectedSeason.length > 0 && numberOfSelectedPlayers < 20
          ?
          <Row>
            <Col sm={4} style={{ textAlign: 'center' }}>
            </Col>
            <Col sm={4}>
              <SelectPlayer
                players={playersForSelectedSeason}
                setSelectedPlayer={setSelectedPlayer}
                /* setPlayerStats={setPlayerStats} */
                fetchingData={fetchingData}
                setFetchingData={setFetchingData}
                playersForSelectedSeason={playersForSelectedSeason}
                selectedSeason={selectedSeason}
                setStatsForSelectedPlayers={setStatsForSelectedPlayers}
                statsForSelectedPlayers={statsForSelectedPlayers}
                setNumberOfSelectedPlayers={setNumberOfSelectedPlayers}
                numberOfSelectedPlayers={numberOfSelectedPlayers}
              />
            </Col>
            <Col sm={4}>
              <SelectRegularPost
                regularSeasonSelected={regularSeasonSelected}
                postSeasonSelected={postSeasonSelected}
                setRegularSeasonSelected={setRegularSeasonSelected}
                setPostSeasonSelected={setPostSeasonSelected}
              />
            </Col>
          </Row>
          : <></>
      }
      {fetchingData ? <>
        <Row style={{ textAlign: 'center' }}>
          <Col sm={4}></Col>
          <Col sm={4}>
            <br></br>
            <Loader type="Grid" color="white" height="25" width="25" />
          </Col>
          <Col sm={4}></Col>
        </Row>
      </>
        : <></>}
      <PlayerComparisonStats
        regularSeasonSelected={regularSeasonSelected}
        postSeasonSelected={postSeasonSelected}
        perGameSelected={perGameSelected}
        totalSelected={totalSelected}
        per36Selected={per36Selected}
        statsForSelectedPlayers={statsForSelectedPlayers}
      />
    </div >
  )
}

export default PlayerComparison
