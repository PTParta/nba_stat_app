const teamRouter = require('express').Router()
const Player = require('../models/player')
const Team = require('../models/team')
const axios = require('axios')
const baseUrl = 'https://www.balldontlie.io/api/v1/teams'

teamRouter.get('/teamsfromapitodatabase', async (_req, _res) => {
  const dataFromApi = await axios.get(`${baseUrl}`)
  const teams = dataFromApi.data
  //drop full_name from teams
  const teamsFormatted = teams.data.map(({
    abbreviation: abbreviation,
    city: city,
    conference: conference,
    division: division,
    name: name,
    id: apiId
  }) => ({ abbreviation, city, conference, division, name, apiId }))
  console.log(teamsFormatted)
  console.log('saving teams to database')
  await Team.insertMany(teamsFormatted)
  console.log('finished saving teams to database')
})

module.exports = teamRouter
