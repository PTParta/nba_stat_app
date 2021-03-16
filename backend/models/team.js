const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const teamSchema = new mongoose.Schema({
  abbreviation: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  conference: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
  /* fullName: {
    type: String,
    required: true,
  }, */
  name: {
    type: String,
    required: true,
  },
  apiId: {
    type: Number,
    required: true,
    unique: true,
  },
})
teamSchema.plugin(uniqueValidator)

teamSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Team', teamSchema)