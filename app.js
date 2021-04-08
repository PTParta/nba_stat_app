require('dotenv').config()
const { response } = require('express') // eslint-disable-line no-unused-vars
const express = require('express')
require('express-async-errors')
//const morgan = require('morgan')
const app = express()
const Player = require('./models/player')
const playerRouter = require('./controllers/players')
const teamRouter = require('./controllers/teams')
const statRouter = require('./controllers/stats')
const statDBRouter = require('./controllers/statsDB')
const healthRouter = require('./controllers/health')
const teamDBRouter = require('./controllers/teamsDB')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const cors = require('cors')
app.use(cors())

app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)
//app.use(middleware.tokenExtractor)

app.use('/api/players', playerRouter)
app.use('/api/teams', teamRouter)
app.use('/api/stats', statRouter)
app.use('/api/statsdb', statDBRouter)
app.use('/api/health', healthRouter)
app.use('/api/teamsdb', teamDBRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app