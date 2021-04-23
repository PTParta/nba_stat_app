import React, { useState, useEffect } from 'react'
import { smSide, xsSide, smCenter, xsCenter } from '../../styling/columnWidths'
import { Row, Col } from 'react-bootstrap'
import 'chartjs-plugin-labels'
import Title from '../common/Title'
import Description from '../common/Description'
import Loader from 'react-loader-spinner'
import Logo from '../common/Logo'
import SelectSeason from './SelectSeason'
import SelectRegularPost from '../common/SelectRegularPost'
import SelectPerTotal from '../common/SelectPerTotal'
import TopTenStats from './TopTenStats'
import DescriptionTop20 from './DescriptionTop20'
import SelectPlayerAmount from './SelectPlayerAmount'
import ReactGa from 'react-ga'
require('dotenv').config()

const TopTen = ({ fetchingData, setFetchingData }) => {

  const [selectedSeason, setSelectedSeason] = useState('')
  const [topTenStats, setTopTenStats] = useState([])
  const [regularSeasonSelected, setRegularSeasonSelected] = useState(true)
  const [postSeasonSelected, setPostSeasonSelected] = useState(false)
  const [perGameSelected, setPerGameSelected] = useState(true)
  const [totalSelected, setTotalSelected] = useState(false)
  const [per36Selected, setPer36Selected] = useState(false)
  const [pctSelected, setPctSelected] = useState(false)
  const [playerAmount, setPlayerAmount] = useState(10)

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
            <Col sm={smCenter} xs={xsCenter} style={{ textAlign: 'center' }}>
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
            <Col sm={smCenter} xs={xsCenter} style={{ textAlign: 'center' }}>
              <SelectPlayerAmount
                setPlayerAmount={setPlayerAmount}
              />
            </Col>
            <Col sm={smSide} xs={xsSide}></Col>
          </Row>
          <Row>
            <Col sm={smSide} xs={xsSide}></Col>
            <Col sm={smCenter} xs={xsCenter} style={{ textAlign: 'center' }}>
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
            setTopTenStats={setTopTenStats}
          />
        </Col>
        <Col sm={smSide}>
        </Col>
      </Row>
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
              <DescriptionTop20 />
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
      <TopTenStats
        topTenStats={topTenStats}
        postSeasonSelected={postSeasonSelected}
        perGameSelected={perGameSelected}
        totalSelected={totalSelected}
        per36Selected={per36Selected}
        pctSelected={pctSelected}
        playerAmount={playerAmount}
      />
    </>
  )
}

export default TopTen