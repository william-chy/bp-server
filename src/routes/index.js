var express = require('express');
var router = express.Router();
var { getClientIp } = require('../utils/index')
const { Bp } = require('../model/bp')
const { Answer } = require('../model/answer')
router.post('/bp', async (req, res, next) => {
  const ip = getClientIp(req)
  const { classList, parentClassList, innerText, isBpFlag } = req.body
  const bp = await Bp.create({
    ip, classList, innerText, isBpFlag, parentClassList
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


router.post('/answer', async (req, res, next) => {
  const { eduType,
    vdiType,
    role,
    demand,
    demandDetail,
    deployType,
    contact,
    others,
    advice, } = req.body
  const ip = getClientIp(req)

  const answer = await Answer.create({
    ip,
    eduType,
    vdiType,
    role,
    demand,
    demandDetail,
    deployType,
    advice,
    others,
    contact
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
