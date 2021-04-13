const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const per36Schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  player_id: {
    type: Number
  },
  postseason: {
    type: Boolean
  },
  ast: {
    type: Number
  },
  blk: {
    type: Number
  },
  dreb: {
    type: Number
  },
  fg3_pct: {
    type: Number
  },
  fg3a: {
    type: Number
  },
  fg3m: {
    type: Number
  },
  fg_pct: {
    type: Number
  },
  fga: {
    type: Number
  },
  fgm: {
    type: Number
  },
  ft_pct: {
    type: Number
  },
  fta: {
    type: Number
  },
  ftm: {
    type: Number
  },
  min: {
    type: Number
  },
  oreb: {
    type: Number
  },
  pf: {
    type: Number
  },
  pts: {
    type: Number
  },
  reb: {
    type: Number
  },
  stl: {
    type: Number
  },
  turnover: {
    type: Number
  },
})
per36Schema.plugin(uniqueValidator)

per36Schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Per36', per36Schema)