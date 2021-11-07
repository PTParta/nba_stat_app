const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const visitorSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
    required: true
  },
  visitCount: {
    type: Number
  }
})
visitorSchema.plugin(uniqueValidator)

visitorSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Visitor', visitorSchema)