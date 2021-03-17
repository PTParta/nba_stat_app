const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const statSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
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
    type: String
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
  game: {
    id: Number,
    date: String,
    home_team_id: Number,
    home_team_score: Number,
    period: Number,
    postseason: Boolean,
    season: Number,
    status: String,
    time: String,
    visitor_team_id: Number,
    visitor_team_score: Number
  },
  player: {
    id: Number,
    first_name: String,
    last_name: String,
    team_id: Number
  },
  team: {
    id: Number,
    abbreviation: String,
    city: String,
    name: String
  }
})
statSchema.plugin(uniqueValidator)

statSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Stat', statSchema)