const healthRouter = require('express').Router()

healthRouter.get('/health', (_req, res) => {
  res.send('ok')
})

module.exports = healthRouter