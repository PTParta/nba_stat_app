import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import SelectTeam from './SelectTeam'
import TeamStats from './TeamStats'
import SelectSeason from './SelectSeason'
import SelectRegularPost from './SelectRegularPost'
import SelectPerTotal from './SelectPerTotal'
import teamService from '../../services/teams'
import Loader from 'react-loader-spinner'
import Logo from '../Logo'
/* import ReactGa from 'react-ga'
require('dotenv').config() */

const Teams = ({ fetchingData, setFetchingData }) => {

  const [teams, setTeams] = useState([])
  const [selectedTeam, setSelectedTeam] = useState('')
  const [teamStats, setTeamStats] = useState([])
  const [selectedSeason, setSelectedSeason] = useState(2020)
  const [regularSeasonSelected, setRegularSeasonSelected] = useState(true)
  const [postSeasonSelected, setPostSeasonSelected] = useState(false)
  const [perGameSelected, setPerGameSelected] = useState(true)
  const [totalSelected, setTotalSelected] = useState(false)

  useEffect(() => {

    /* ReactGa.initialize(process.env.GA_TRACKING_CODE)
    ReactGa.pageview('/teams') */

    teamService.getTeams()
      .then((response) => {
        setTeams(response.data)
      })
  }, [])

  return (
    <div>
      <Row>
        <Col sm={4}></Col>
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
            />

            : <></>}

        </Col>
      </Row>
      {selectedTeam !== ''
        ? <Row>
          <Col sm={4}></Col>
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

        </>}
      {fetchingData ? <>
        <Row style={{ textAlign: 'center' }}>
          <Col sm={4}></Col>
          <Col sm={4}>
            <br></br>
            <Loader type="Grid" color="white" height="75" width="75" />
          </Col>
          <Col sm={4}></Col>
        </Row>
      </>
        : <></>}
      {/* <Row> */}

      <TeamStats
        selectedTeam={selectedTeam}
        teamStats={teamStats}
        postSeasonSelected={postSeasonSelected}
        perGameSelected={perGameSelected}
        totalSelected={totalSelected}
      />

      {/* </Row> */}
    </div>
  )
}

export default Teams