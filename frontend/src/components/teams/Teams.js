import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import SelectTeam from './SelectTeam'
import TeamStats from './TeamStats'
import SelectSeason from './SelectSeason'
import teamService from '../../services/teams'
import Loader from 'react-loader-spinner'


const Teams = ({ fetchingData, setFetchingData }) => {

  const [teams, setTeams] = useState([])
  const [selectedTeam, setSelectedTeam] = useState('')
  const [teamStats, setTeamStats] = useState([])
  const [selectedSeason, setSelectedSeason] = useState(2020)

  useEffect(() => {
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
        <Col sm={4}></Col>
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
          <Col sm={4}></Col>
        </Row>
        : <></>}
      {fetchingData ? <>
        <Row style={{ textAlign: 'center' }}>
          <Col sm={4}></Col>
          <Col sm={4}>
            <br></br>
            <Loader type="Grid" color="white" height="75" width="75" />
            <br></br>
            <br></br>
          </Col>
          <Col sm={4}></Col>
        </Row>

      </>
        : <></>}
      <Row>
        <Col sm={2}></Col>
        <Col sm={8}>
          <TeamStats
            selectedTeam={selectedTeam}
            teamStats={teamStats}
          />
        </Col>
        <Col sm={2}></Col>
      </Row>
    </div>
  )
}

export default Teams