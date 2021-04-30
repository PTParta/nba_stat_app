import React, { useState, useEffect } from 'react'
import { smSide, xsSide, smCenter, xsCenter } from '../../styling/columnWidths'
import { Row, Col } from 'react-bootstrap'
import PlayerStats from './PlayerStats'
import SelectPlayer from './SelectPlayer'
import SelectSeasons from './SelectSeasons'
import SelectRegularPost from './SelectRegularPost'
import SelectStats from './SelectStats'
import DescriptionPlayers from './DescriptionPlayers'
import Logo from '../common/Logo'
import Title from '../common/Title'
import Description from '../common/Description'
import SelectTrailingAverage from './SelectTrailingAverage'
import Loader from 'react-loader-spinner'
import ReactGa from 'react-ga'
require('dotenv').config()


const Players = ({ fetchingData, setFetchingData, players, setPlayers, teams }) => {

  const [playerStats, setPlayerStats] = useState([])
  const [selectedPlayer, setSelectedPlayer] = useState('')
  const [selectedFirstSeason, setSelectedFirstSeason] = useState(1983)
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
        <Col sm={smSide}></Col>
        <Col sm={smCenter}>
          <SelectPlayer
            players={players}
            setSelectedPlayer={setSelectedPlayer}
            setPlayerStats={setPlayerStats}
            fetchingData={fetchingData}
            setFetchingData={setFetchingData}
          />
        </Col>
        <Col sm={smSide}></Col>
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
            <Col sm={smSide} xs={xsSide}></Col>
            <Col sm={smCenter} xs={xsCenter}>
              <br></br>
              <Logo />
            </Col>
            <Col sm={smSide} xs={xsSide}></Col>
          </Row>
          <br></br>
          <br></br>
          <Row style={{ textAlign: 'center' }}>
            <Col sm={smSide} xs={xsSide}></Col>
            <Col sm={smCenter} xs={xsCenter}>
              <Title />
            </Col>
            <Col sm={smSide} xs={xsSide}></Col>
          </Row>
          <Row style={{ textAlign: 'center' }}>
            <Col sm={smSide} xs={xsSide}></Col>
            <Col sm={smCenter} xs={xsCenter}>
              <Description />
            </Col>
            <Col sm={smSide} xs={xsSide}></Col>
          </Row>
          <Row style={{ textAlign: 'center' }}>
            <Col sm={smSide} xs={xsSide}></Col>
            <Col sm={smCenter} xs={xsCenter}>
              <DescriptionPlayers />
            </Col>
            <Col sm={smSide} xs={xsSide}></Col>
          </Row>
        </>
        : <></>}
      <Row style={{ textAlign: 'center' }}>
        <Col sm={smSide} xs={xsSide}></Col>
        <Col sm={smCenter} xs={xsCenter}>
          {fetchingData && playerStats.length === 0
            ? <>
              <br></br>
              <Loader type="Grid" color="white" height="25" width="25" />
              <br></br>
              <br></br>
            </>
            : <></>}
        </Col>
        <Col sm={smSide} xs={xsSide}></Col>
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
          <Row /* style={{ textAlign: 'center' }} */>
            <Col sm={3} ></Col>
            <Col sm={7} >
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
            <Col sm={2}></Col>
          </Row>
          <Row style={{ textAlign: 'center' }}>
            <Col sm={smSide}></Col>
            <Col sm={smCenter}>
              <div style={{ color: 'white' }}>trailing average</div>
              <SelectTrailingAverage
                setTrailingAverage={setTrailingAverage} />
            </Col>
            <Col sm={smSide}></Col>
          </Row>
          <br></br>
          <Row style={{ textAlign: 'center' }}>
            <Col sm={smSide}></Col>
            <Col sm={smCenter}>
              <SelectRegularPost
                regularSeasonSelected={regularSeasonSelected}
                postSeasonSelected={postSeasonSelected}
                setRegularSeasonSelected={setRegularSeasonSelected}
                setPostSeasonSelected={setPostSeasonSelected}
              />
            </Col>
            <Col sm={smSide}></Col>
          </Row>
        </>
        : <></>}
    </>
  )
}

export default Players