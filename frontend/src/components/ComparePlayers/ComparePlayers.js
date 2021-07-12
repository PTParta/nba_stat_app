import React, { useState, useEffect } from 'react'
import { smSide, xsSide, smCenter, xsCenter } from '../../styling/columnWidths'
import SelectSeason from './SelectSeason'
import SelectPlayer from './SelectPlayer'
import PlayerComparisonStats from './ComparePlayersStats'
import DescriptionPlayerComparison from './DescriptionComparePlayers'
import SelectPerTotal from '../common/SelectPerTotal'
import SelectRegularPost from '../common/SelectRegularPost'
import Logo from '../common/Logo'
import Title from '../common/Title'
import Description from '../common/Description'
import { Row, Col } from 'react-bootstrap'
import ReactGa from 'react-ga'
import Loader from 'react-loader-spinner'
require('dotenv').config()


const PlayerComparison = ({ players, fetchingData, setFetchingData }) => {
  const [selectedSeason, setSelectedSeason] = useState('')
  const [summaryStats, setSummaryStats] = useState([])
  const [filteredSummaryStats, setFilteredSummaryStats] = useState([])
  const [selectedPlayersNames, setSelectedPlayersNames] = useState([])
  const [regularSeasonSelected, setRegularSeasonSelected] = useState(true)
  const [postSeasonSelected, setPostSeasonSelected] = useState(false)
  const [perGameSelected, setPerGameSelected] = useState(true)
  const [totalSelected, setTotalSelected] = useState(false)
  const [per36Selected, setPer36Selected] = useState(false)
  const [pctSelected, setPctSelected] = useState(false)

  useEffect(() => {

    ReactGa.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_CODE)
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <>
      {selectedSeason !== ''
        ? <>
          <Row>
            <Col sm={smSide} xs={xsSide}></Col>
            <Col sm={8} xs={xsCenter} style={{ textAlign: 'center' }}>
              <SelectPerTotal
                setPerGameSelected={setPerGameSelected}
                setTotalSelected={setTotalSelected}
                setPer36Selected={setPer36Selected}
                setPctSelected={setPctSelected}
              />
            </Col>
            <Col sm={smSide} xs={xsSide}></Col>
          </Row>
          <Row>
            <Col sm={smSide} xs={xsSide}></Col>
            <Col sm={8} xs={xsCenter} style={{ textAlign: 'center' }}>
              <SelectRegularPost
                regularSeasonSelected={regularSeasonSelected}
                postSeasonSelected={postSeasonSelected}
                setRegularSeasonSelected={setRegularSeasonSelected}
                setPostSeasonSelected={setPostSeasonSelected}
              />
            </Col>
            <Col sm={smSide} xs={xsSide}></Col>
          </Row>
          <br></br>
        </>
        : <></>}
      <Row>
        <Col sm={smSide} style={{ textAlign: 'center' }}>
        </Col>
        <Col sm={smCenter}>
          <SelectSeason
            selectedSeason={selectedSeason}
            setSelectedSeason={setSelectedSeason}
            setFetchingData={setFetchingData}
            setSummaryStats={setSummaryStats}
            selectedPlayersNames={selectedPlayersNames}
            filteredSummaryStats={filteredSummaryStats}
            setFilteredSummaryStats={setFilteredSummaryStats}
            summaryStats={summaryStats}
          />
        </Col>
      </Row>
      {summaryStats.length > 0
        ? <>
          <Row>
            <Col sm={smSide} style={{ textAlign: 'center' }}>
            </Col>
            <Col sm={smCenter}>
              <SelectPlayer
                selectedPlayersNames={selectedPlayersNames}
                setSelectedPlayersNames={setSelectedPlayersNames}
                summaryStats={summaryStats}
                filteredSummaryStats={filteredSummaryStats}
                setFilteredSummaryStats={setFilteredSummaryStats}
								selectedSeason={selectedSeason}
              />
            </Col>
          </Row>
        </>
        : <></>}
      {selectedSeason === ''
        ? <>
          <br></br>
          <br></br>
          <Row style={{ textAlign: 'center' }}>
            <Col sm={smSide}></Col>
            <Col sm={smCenter}>
              <Logo />
            </Col>
            <Col sm={smSide}></Col>
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
              <DescriptionPlayerComparison />
            </Col>
            <Col sm={smSide} xs={xsSide}></Col>
          </Row>
        </>
        : <>
        </>}
      {fetchingData ? <>
        <Row style={{ textAlign: 'center' }}>
          <Col sm={smSide}></Col>
          <Col sm={smCenter}>
            <br></br>
            <Loader type="Grid" color="white" height="25" width="25" />
          </Col>
          <Col sm={smSide}></Col>
        </Row>
      </>
        : <></>}
      <PlayerComparisonStats
        filteredSummaryStats={filteredSummaryStats}
        postSeasonSelected={postSeasonSelected}
        perGameSelected={perGameSelected}
        totalSelected={totalSelected}
        per36Selected={per36Selected}
        pctSelected={pctSelected}
      />
    </>
  )
}

export default PlayerComparison
