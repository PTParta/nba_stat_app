import axios from 'axios'
const baseUrl = 'https://www.balldontlie.io/api/v1/teams'
const baseUrlDB = '/api/teamsdb'

const getTeams = async () => {
  const teams = await axios.get(`${baseUrl}`)
  return teams.data
}

const getTeamsFromDatabase = async () => {
  const teams = await axios.get(`${baseUrlDB}`)
  return teams.data
}

const teamService = {getTeams, getTeamsFromDatabase}

export default teamService