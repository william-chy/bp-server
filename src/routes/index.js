var express = require('express');
var router = express.Router();
var { getClientIp } = require('../utils/index')
const { Bp } = require('../model/bp')
const { Answer } = require('../model/answer')
router.post('/bp', async (req, res, next) => {
  const ip = getClientIp(req)
  const bp = await Bp.create({
    ip,
    classList: 'ad,fs,dsx',
    target: 'test'
  })
  if (bp) {
    res.send({
      code: 200,
      data: 'saved'
    })
  } else {
    res.send({
      code: 500,
    })
  }

});


// 用户注册
router.post('/answer', async (req, res, next) => {
  const answer = await Answer.create({
    ip,
    answerData: '123123'
  })
  if (answer) {
    res.send({
      code: 200,
      data: 'saved'
    })
  } else {
    res.send({
      code: 500,
    })
  }
});



module.exports = router;
