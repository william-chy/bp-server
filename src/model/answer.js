const mongoose = require('../db/mongodb')

const AnswerSchema = new mongoose.Schema({
  ip: {
    type: String,
  },
  eduType: {
    type: String,
  },
  vdiType: {
    type: String,
  },
  role: {
    type: String,
  },
  demand: {
    type: String,
  },
  demandDetail: {
    type: String,
  },
  advice: {
    type: String,
  },
  contact: {
    type: String,
  },

})

// 建立用户数据库模型
const Answer = mongoose.model('Answer', AnswerSchema)
module.exports = { Answer }