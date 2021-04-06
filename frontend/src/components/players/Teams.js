import React from 'react'

const Teams = ({ teams }) => {
  console.log('teams')
  console.log(teams)
  return (
    <div>
      <h3>Teams</h3>
      {teams.map(team =>
        <div key={team.id}>
          <p>{team.city} {team.name}</p>
        </div>)}
    </div>
  )
}

export default Teams