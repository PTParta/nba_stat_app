import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import 'chartjs-plugin-labels'
import Title from '../Title'
import Description from '../Description'
import Loader from 'react-loader-spinner'
import Logo from '../Logo'
import SelectSeason from './SelectSeason'
import SelectRegularPost from '../common/SelectRegularPost'
import TopTenStats from './TopTenStats'
import SelectPerTotal from '../common/SelectPerTotal'
import DescriptionTop20 from './DescriptionTop20'
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

  useEffect(() => {
    ReactGa.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_CODE)
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <>
      <Row>
        <Col sm={4} style={{ textAlign: 'center' }}>
        </Col>
        <Col sm={4}>
          <SelectSeason
            selectedSeason={selectedSeason}
            setSelectedSeason={setSelectedSeason}
            setFetchingData={setFetchingData}
            setTopTenStats={setTopTenStats}
          />
        </Col>
        <Col sm={4}>
          {selectedSeason !== ''
            ? <SelectPerTotal
              setPerGameSelected={setPerGameSelected}
              setTotalSelected={setTotalSelected}
              setPer36Selected={setPer36Selected}
              setPctSelected={setPctSelected}
            />
            : <></>}
        </Col>
      </Row>
      {selectedSeason !== ''
        ? <Row>
          <Col sm={4} style={{ textAlign: 'center' }}>
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
        : <>
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
              <Description />
            </Col>
            <Col sm={4} xs={1}></Col>
          </Row>
          <Row style={{ textAlign: 'center' }}>
            <Col sm={4} xs={1}></Col>
            <Col sm={4} xs={10}>
              <DescriptionTop20 />
            </Col>
            <Col sm={4} xs={1}></Col>
          </Row>
        </>}
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
      <TopTenStats
        topTenStats={topTenStats}
        postSeasonSelected={postSeasonSelected}
        perGameSelected={perGameSelected}
        totalSelected={totalSelected}
        per36Selected={per36Selected}
        pctSelected={pctSelected}
      />

    </>
  )











}

export default TopTen