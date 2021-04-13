const mongoose = require('mongoose')
//const uniqueValidator = require('mongoose-unique-validator')

const summarySchema = new mongoose.Schema({
  /* playerId: {
    type: Number,
    unique: true,
    required: true
  }, */
  name: {
    type: String
  },
  postseason: {
    type: Boolean
  },
  ast_pergame: {
    type: Number
  },
  blk_pergame: {
    type: Number
  },
  dreb_pergame: {
    type: Number
  },
  fg3_pct_pergame: {
    type: Number
  },
  fg3a_pergame: {
    type: Number
  },
  fg3m_pergame: {
    type: Number
  },
  fg_pct_pergame: {
    type: Number
  },
  fga_pergame: {
    type: Number
  },
  fgm_pergame: {
    type: Number
  },
  ft_pct_pergame: {
    type: Number
  },
  fta_pergame: {
    type: Number
  },
  ftm_pergame: {
    type: Number
  },
  min_pergame: {
    type: Number
  },
  oreb_pergame: {
    type: Number
  },
  pf_pergame: {
    type: Number
  },
  pts_pergame: {
    type: Number
  },
  reb_pergame: {
    type: Number
  },
  stl_pergame: {
    type: Number
  },
  turnover_pergame: {
    type: Number
  },
  ast_per36: {
    type: Number
  },
  blk_per36: {
    type: Number
  },
  dreb_per36: {
    type: Number
  },
  fg3_pct_per36: {
    type: Number
  },
  fg3a_per36: {
    type: Number
  },
  fg3m_per36: {
    type: Number
  },
  fg_pct_per36: {
    type: Number
  },
  fga_per36: {
    type: Number
  },
  fgm_per36: {
    type: Number
  },
  ft_pct_per36: {
    type: Number
  },
  fta_per36: {
    type: Number
  },
  ftm_per36: {
    type: Number
  },
  min_per36: {
    type: Number
  },
  oreb_per36: {
    type: Number
  },
  pf_per36: {
    type: Number
  },
  pts_per36: {
    type: Number
  },
  reb_per36: {
    type: Number
  },
  stl_per36: {
    type: Number
  },
  turnover_per36: {
    type: Number
  },
  ast_total: {
    type: Number
  },
  blk_total: {
    type: Number
  },
  dreb_total: {
    type: Number
  },
  fg3_pct_total: {
    type: Number
  },
  fg3a_total: {
    type: Number
  },
  fg3m_total: {
    type: Number
  },
  fg_pct_total: {
    type: Number
  },
  fga_total: {
    type: Number
  },
  fgm_total: {
    type: Number
  },
  ft_pct_total: {
    type: Number
  },
  fta_total: {
    type: Number
  },
  ftm_total: {
    type: Number
  },
  min_total: {
    type: Number
  },
  oreb_total: {
    type: Number
  },
  pf_total: {
    type: Number
  },
  pts_total: {
    type: Number
  },
  reb_total: {
    type: Number
  },
  stl_total: {
    type: Number
  },
  turnover_total: {
    type: Number
  }

})
//summarySchema.plugin(uniqueValidator)

summarySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Summary', summarySchema)