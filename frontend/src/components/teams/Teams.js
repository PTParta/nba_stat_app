import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import SelectTeam from './SelectTeam'
import TeamStats from './TeamStats'
import SelectSeason from './SelectSeason'
/* import SelectRegularPost from './SelectRegularPost'
import SelectPerTotal from './SelectPerTotal' */
import SelectRegularPost from '../common/SelectRegularPost'
import SelectPerTotal from '../common/SelectPerTotal'
import DescriptionTeams from './DescriptionTeams'
import Title from '../common/Title'
import Description from '../common/Description'
//import teamService from '../../services/teams'
import Loader from 'react-loader-spinner'
import Logo from '../common/Logo'
import ReactGa from 'react-ga'
require('dotenv').config()

const Teams = ({ fetchingData, setFetchingData, teams }) => {

  //const [teams, setTeams] = useState([])
  const [selectedTeam, setSelectedTeam] = useState('')
  const [teamStats, setTeamStats] = useState([])
  const [selectedSeason, setSelectedSeason] = useState(2020)
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
      <Row>
        <Col sm={4} style={{ textAlign: 'center' }}>
        </Col>
        <Col sm={4}>
          <SelectTeam
            teams={teams}
            setSelectedTeam={setSelectedTeam}
            setTeamStats={setTeamStats}
            setFetchingData={setFetchingData}
            selectedSeason={selectedSeason}
          />
        </Col>
        <Col sm={4}>
          {selectedTeam !== ''
            ? <SelectPerTotal
              setPerGameSelected={setPerGameSelected}
              setTotalSelected={setTotalSelected}
              setPer36Selected={setPer36Selected}
              setPctSelected={setPctSelected}
            />
            : <></>}
        </Col>
      </Row>
      {selectedTeam !== ''
        ? <Row>
          <Col sm={4} style={{ textAlign: 'center' }}>
          </Col>
          <Col sm={4}>
            <SelectSeason
              selectedSeason={selectedSeason}
              setSelectedSeason={setSelectedSeason}
              selectedTeam={selectedTeam}
              setTeamStats={setTeamStats}
              teams={teams}
              setFetchingData={setFetchingData}
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
              <DescriptionTeams />
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