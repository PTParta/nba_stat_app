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
const healthRouter = require('./controllers/health')
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

app.use(express.json())
app.use(express.static('build'))

app.use('/api/players', playerRouter)
app.use('/api/teams', teamRouter)
app.use('/api/stats', statRouter)
app.use('/api/health', healthRouter)


// invalid address handling
const unknownEndpoint = (_req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }
  next(error)
}
app.use(errorHandler)

/* const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
}) */

module.exports = app