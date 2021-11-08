const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const playerLogSchema = new mongoose.Schema({
  counter: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
playerLogSchema.plugin(uniqueValidator)

playerLogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('PlayerLog', playerLogSchema)