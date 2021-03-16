const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const playerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    //required: true,
  },
  lastName: {
    type: String,
    //required: true,
  },
  apiId: {
    type: Number,
    required: true,
    unique: true,
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  }
})
playerSchema.plugin(uniqueValidator)

playerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Player', playerSchema)