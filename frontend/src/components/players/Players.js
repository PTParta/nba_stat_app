import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import PlayerStats from './PlayerStats'
import SelectPlayer from './SelectPlayer'
import SelectSeasons from './SelectSeasons'
import SelectRegularPost from './SelectRegularPost'
import SelectStats from './SelectStats'
import DescriptionPlayers from './DescriptionPlayers'
import Logo from '../Logo'
import Title from '../Title'
import Description from '../Description'
import SelectTrailingAverage from './SelectTrailingAverage'
import Loader from 'react-loader-spinner'
import ReactGa from 'react-ga'
require('dotenv').config()


const Players = ({ fetchingData, setFetchingData, players, setPlayers, teams }) => {

  const [playerStats, setPlayerStats] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState('')
  const [selectedFirstSeason, setSelectedFirstSeason] = useState(1979)
  const [selectedLastSeason, setSelectedLastSeason] = useState(2020)
  const [regularSeasonSelected, setRegularSeasonSelected] = useState(false)
  const [postSeasonSelected, setPostSeasonSelected] = useState(false)
  const [ptsSelected, setPtsSelected] = useState(false)
  const [astSelected, setAstSelected] = useState(false)
  const [rebSelected, setRebSelected] = useState(false)
  const [drebSelected, setDrebSelected] = useState(false)
  const [orebSelected, setOrebSelected] = useState(false)
  const [blkSelected, setBlkSelected] = useState(false)
  const [stlSelected, setStlSelected] = useState(false)
  const [turnoverSelected, setTurnoverSelected] = useState(false)
  const [fgaSelected, setFgaSelected] = useState(false)
  const [fgmSelected, setFgmSelected] = useState(false)
  const [fg_pctSelected, setFg_pctSelected] = useState(false)
  const [fg3aSelected, setFg3aSelected] = useState(false)
  const [fg3mSelected, setFg3mSelected] = useState(false)
  const [fg3_pctSelected, setFg3_pctSelected] = useState(false)
  const [ftaSelected, setFtaSelected] = useState(false)
  const [ftmSelected, setFtmSelected] = useState(false)
  const [ft_pctSelected, setFt_pctSelected] = useState(false)
  const [pfSelected, setPfSelected] = useState(false)
  const [minSelected, setMinSelected] = useState(false)
  const [trailingAverage, setTrailingAverage] = useState(25)

  useEffect(() => {
    ReactGa.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_CODE)
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <>
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <SelectPlayer
            players={players}
            setSelectedPlayer={setSelectedPlayer}
            setPlayerStats={setPlayerStats}
            fetchingData={fetchingData}
            setFetchingData={setFetchingData}
          />
        </Col>
        <Col sm={4}></Col>
      </Row>
      {selectedPlayer !== ''
        ? <>
          <SelectSeasons
            setSelectedFirstSeason={setSelectedFirstSeason}
            setSelectedLastSeason={setSelectedLastSeason}
            selectedFirstSeason={selectedFirstSeason}
            selectedLastSeason={selectedLastSeason}
          />
        </>
        : <></>}
      <br></br>
      {playerStats.length === 0 && !fetchingData
        ? <>
          <Row style={{ textAlign: 'center' }}>
            <Col sm={5} xs={1}></Col>
            <Col sm={2} xs={10}>
              <br></br>
              <Logo />
            </Col>
            <Col sm={5} xs={1}></Col>
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
              <Description />
            </Col>
            <Col sm={4} xs={1}></Col>
          </Row>
          <Row style={{ textAlign: 'center' }}>
            <Col sm={4} xs={1}></Col>
            <Col sm={4} xs={10}>
              <DescriptionPlayers />
            </Col>
            <Col sm={4} xs={1}></Col>
          </Row>
        </>
        : <></>}
      <Row style={{ textAlign: 'center' }}>
        <Col sm={5} xs={4}></Col>
        <Col sm={2} xs={4}>
          {fetchingData && playerStats.length === 0
            ? <>
              <br></br>
              <Loader type="Grid" color="white" height="25" width="25" />
              <br></br>
              <br></br>
            </>
            : <></>}
        </Col>
        <Col sm={5} xs={4}></Col>
      </Row>
      {selectedPlayer !== ''
        ? <>
          <Row className="justify-content-md-center">
            <Col>
              {playerStats.length > 0
                ? <PlayerStats
                  playerStats={playerStats}
                  teams={teams}
                  regularSeasonSelected={regularSeasonSelected}
                  postSeasonSelected={postSeasonSelected}
                  ptsSelected={ptsSelected}
                  astSelected={astSelected}
                  rebSelected={rebSelected}
                  drebSelected={drebSelected}
                  orebSelected={orebSelected}
                  blkSelected={blkSelected}
                  stlSelected={stlSelected}
                  turnoverSelected={turnoverSelected}
                  fgaSelected={fgaSelected}
                  fgmSelected={fgmSelected}
                  fg_pctSelected={fg_pctSelected}
                  fg3aSelected={fg3aSelected}
                  fg3mSelected={fg3mSelected}
                  fg3_pctSelected={fg3_pctSelected}
                  ftaSelected={ftaSelected}
                  ftmSelected={ftmSelected}
                  ft_pctSelected={ft_pctSelected}
                  pfSelected={pfSelected}
                  minSelected={minSelected}
                  selectedFirstSeason={selectedFirstSeason}
                  selectedLastSeason={selectedLastSeason}
                  fetchingData={fetchingData}
                  trailingAverage={trailingAverage}
                />
                : <></>}</Col>
          </Row>
          <br></br>
          <Row >
            <Col sm={4} ></Col>
            <Col sm={4} >
              <SelectStats
                ptsSelected={ptsSelected}
                setPtsSelected={setPtsSelected}
                astSelected={astSelected}
                setAstSelected={setAstSelected}
                rebSelected={rebSelected}
                setRebSelected={setRebSelected}
                drebSelected={drebSelected}
                setDrebSelected={setDrebSelected}
                orebSelected={orebSelected}
                setOrebSelected={setOrebSelected}
                blkSelected={blkSelected}
                setBlkSelected={setBlkSelected}
                stlSelected={stlSelected}
                setStlSelected={setStlSelected}
                turnoverSelected={turnoverSelected}
                setTurnoverSelected={setTurnoverSelected}
                fgaSelected={fgaSelected}
                setFgaSelected={setFgaSelected}
                fgmSelected={fgmSelected}
                setFgmSelected={setFgmSelected}
                fg_pctSelected={fg_pctSelected}
                setFg_pctSelected={setFg_pctSelected}
                fg3aSelected={fg3aSelected}
                setFg3aSelected={setFg3aSelected}
                fg3mSelected={fg3mSelected}
                setFg3mSelected={setFg3mSelected}
                fg3_pctSelected={fg3_pctSelected}
                setFg3_pctSelected={setFg3_pctSelected}
                ftaSelected={ftaSelected}
                setFtaSelected={setFtaSelected}
                ftmSelected={ftmSelected}
                setFtmSelected={setFtmSelected}
                ft_pctSelected={ft_pctSelected}
                setFt_pctSelected={setFt_pctSelected}
                pfSelected={pfSelected}
                setPfSelected={setPfSelected}
                minSelected={minSelected}
                setMinSelected={setMinSelected} />
            </Col>
            <Col sm={4}></Col>
          </Row>
          <Row>
            <Col sm={4}></Col>
            <Col sm={4}>
              <div style={{ color: 'white' }}>trailing average</div>
              <SelectTrailingAverage
                setTrailingAverage={setTrailingAverage} />
            </Col>
            <Col sm={4}></Col>
          </Row>
          <br></br>
          <Row>
            <Col sm={4}></Col>
            <Col sm={4}>
              <SelectRegularPost
                regularSeasonSelected={regularSeasonSelected}
                postSeasonSelected={postSeasonSelected}
                setRegularSeasonSelected={setRegularSeasonSelected}
                setPostSeasonSelected={setPostSeasonSelected}
              />
            </Col>
            <Col sm={4}></Col>
          </Row>
        </>
        : <></>}
    </>
  )
}

export default Players