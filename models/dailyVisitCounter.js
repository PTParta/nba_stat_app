const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const dailyVisitCounterSchema = new mongoose.Schema({
  counter: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})
dailyVisitCounterSchema.plugin(uniqueValidator)

dailyVisitCounterSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('DailyVisitCounter', dailyVisitCounterSchema)