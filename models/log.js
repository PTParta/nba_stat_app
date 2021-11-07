const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const logSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  playerFullName: {
    type: String,
  },
  year: {
    type: Number,
  },
  team: {
    type: String,
  },
  timeOfRequest:{
      type:Date,
      required: true,
  }
})
logSchema.plugin(uniqueValidator)

logSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Log', logSchema)