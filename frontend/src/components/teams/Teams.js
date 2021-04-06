import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import SelectTeam from './SelectTeam'
import teamService from '../../services/teams'

const Teams = () => {

  const [teams, setTeams] = useState([])
  const [selectedTeam, setSelectedTeam] = useState('')

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
          />
        </Col>
        <Col sm={4}></Col>
      </Row>
    </div>
  )
}

export default Teams