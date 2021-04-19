const healthRouter = require('express').Router()

healthRouter.get('/', (_req, res) => {
  res.send('ok')
})

module.exports = healthRouter