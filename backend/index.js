require('dotenv').config()
const { response } = require('express') // eslint-disable-line no-unused-vars
const express = require('express')
//const morgan = require('morgan')
const app = express()
const Player = require('./models/player')

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.static('build'))

app.get('/health', (_req, res) => {
  res.send('ok')
})


// olemattomien osoitteiden käsittely
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

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})