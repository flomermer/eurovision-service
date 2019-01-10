const express = require('express')
const router  = express.Router();
const ctrl    = require('../../controller/statistics');

router.get('/bff', async (req,res) => {
  let cb = await ctrl.getBFF();
  res.send(cb);
})

router.get('/historyWinner', async (req,res) => {
  let cb = await ctrl.getHistoryWinner();
  res.send(cb);
})

module.exports = router;
