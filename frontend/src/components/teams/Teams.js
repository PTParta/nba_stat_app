import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import SelectTeam from './SelectTeam'
import TeamStats from './TeamStats'
import SelectSeason from './SelectSeason'
import teamService from '../../services/teams'


const Teams = () => {

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
          />
        </Col>
        <Col sm={4}></Col>
      </Row>
      {selectedTeam != ''
        ? <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <SelectSeason
              selectedSeason={selectedSeason}
              setSelectedSeason={setSelectedSeason}
              selectedTeam={selectedTeam}
              setTeamStats={setTeamStats}
              teams={teams}
            />
          </Col>
          <Col sm={4}></Col>
        </Row>
        : <></>}

      <Row>
        <Col sm={4}></Col>
        <Col sm={4}>
          <TeamStats
            selectedTeam={selectedTeam}
            teamStats={teamStats}
          />
        </Col>
        <Col sm={4}></Col>
      </Row>
    </div>
  )
}

export default Teams