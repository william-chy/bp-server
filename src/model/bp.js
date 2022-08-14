const mongoose = require('../db/mongodb')

const BpSchema = new mongoose.Schema({
  ip: {
    type: String,
  },
  classList: {
    type: String,
  },
  parentClassList: {
    type: String,
  },
  innerText: {
    type: String,
  },
  deployType: {
    type: String,
  },
  others: {
    type: String,
  },
  isBpFlag: {
    type: Boolean,
    default: false
  },
  createTime: {
    type: Date,
    default: Date.now
  },
})

// 建立用户数据库模型
const Bp = mongoose.model('Bp', BpSchema)
module.exports = { Bp }