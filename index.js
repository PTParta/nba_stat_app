require('dotenv').config()
const app = require('./app') // varsinainen Express-sovellus
const http = require('http')
//const config = require('./utils/config')
//const logger = require('./utils/logger')

const server = http.createServer(app)

/* server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
}) */

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = app