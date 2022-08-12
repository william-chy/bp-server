const mongoose = require('../db/mongodb')

const BpSchema = new mongoose.Schema({
  ip: {
    type: String,
  },
  classList: {
    type: String,
  },
  headers: {
    type: String,
    select: false
  },
  innerText: {
    type: String,
  },
  isFlag: {
    type: Boolean,
    default: false
  },
  target: {
    type: String,
    select: false
  },
  createTime: {
    type: Date,
    default: Date.now
  },
})

// 建立用户数据库模型
const Bp = mongoose.model('Bp', BpSchema)
module.exports = { Bp }