const teamDBRouter = require('express').Router()
const Team = require('../models/team')

teamDBRouter.get('/', async (_request, response) => {
  const teams = await Team.find({})
  response.json(teams)
})

module.exports = teamDBRouter