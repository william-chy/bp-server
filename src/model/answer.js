const mongoose = require('../db/mongodb')

const AnswerSchema = new mongoose.Schema({
  ip: {
    type: String,
  },
  answerData: {
    type: String,
  }
})

// 建立用户数据库模型
const Answer = mongoose.model('Answer', AnswerSchema)
module.exports = { Answer }