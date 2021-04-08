const teamDBRouter = require('express').Router()
const Team = require('../models/team')

teamDBRouter.get('/', async (_request, response) => {
  console.log('getting teams from database')

  let startTime = new Date().getTime()
  const teams = await Team.find({})

  let endTime = new Date().getTime()
  console.log('finished retrieving teams from database')
  console.log(`time ${endTime - startTime} ms`)
  console.log('documents:', teams.length)

  response.json(teams)
})

module.exports = teamDBRouter