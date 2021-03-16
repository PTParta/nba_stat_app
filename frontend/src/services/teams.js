import axios from 'axios'
const baseUrl = 'https://www.balldontlie.io/api/v1/teams'

const getTeams = async () => {
  const teams = await axios.get(`${baseUrl}`)
  return teams.data
}

const teamService = {getTeams}

export default teamService