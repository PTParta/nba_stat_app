import React, { useState, useEffect } from 'react'
import { smSide, xsSide, smCenter, xsCenter } from '../../styling/columnWidths'
import { Row, Col } from 'react-bootstrap'
import SelectTeam from './SelectTeam'
import TeamStats from './TeamStats'
import SelectSeason from './SelectSeason'
import SelectRegularPost from '../common/SelectRegularPost'
import SelectPerTotal from '../common/SelectPerTotal'
import DescriptionTeams from './DescriptionTeams'
import Title from '../common/Title'
import Description from '../common/Description'
import Loader from 'react-loader-spinner'
import Logo from '../common/Logo'
import ReactGa from 'react-ga'
require('dotenv').config()

const Teams = ({ fetchingData, setFetchingData, teams }) => {

  const [selectedTeam, setSelectedTeam] = useState('')
  const [teamStats, setTeamStats] = useState([])
  const [selectedSeason, setSelectedSeason] = useState(2021)
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
    <div>
      {selectedTeam !== ''
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
          <SelectTeam
            teams={teams}
            setSelectedTeam={setSelectedTeam}
            setTeamStats={setTeamStats}
            setFetchingData={setFetchingData}
            selectedSeason={selectedSeason}
          />
        </Col>
      </Row>
      {selectedTeam === ''
        ?
        <>
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
              <DescriptionTeams />
            </Col>
            <Col sm={smSide} xs={xsSide}></Col>
          </Row>
        </>
        : <>
          <Row>
            <Col sm={smSide} style={{ textAlign: 'center' }}>
            </Col>
            <Col sm={smCenter}>
              <SelectSeason
                selectedSeason={selectedSeason}
                setSelectedSeason={setSelectedSeason}
                selectedTeam={selectedTeam}
                setTeamStats={setTeamStats}
                teams={teams}
                setFetchingData={setFetchingData}
              />
            </Col>
          </Row>
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
      <TeamStats
        selectedTeam={selectedTeam}
        teamStats={teamStats}
        postSeasonSelected={postSeasonSelected}
        perGameSelected={perGameSelected}
        totalSelected={totalSelected}
        per36Selected={per36Selected}
        pctSelected={pctSelected}
      />
    </div>
  )
}

export default Teams