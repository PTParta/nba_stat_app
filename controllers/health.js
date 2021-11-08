const DailyVisitCounter = require('../models/dailyVisitCounter')

const healthRouter = require('express').Router()

healthRouter.get('/', async (_req, res) => {

  const totalVisitsCounter = await DailyVisitCounter.aggregate([{
    $group: {
      _id: null,
      "TotalCount": {
        $sum: "$counter"
      }
    }
  }])

  console.log(totalVisitsCounter)

  res.send('ok ' + totalVisitsCounter[0].TotalCount)
})

module.exports = healthRouter