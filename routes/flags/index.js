const express = require('express')
const router  = express.Router();
const ctrl    = require('../../controller/flags');

router.get('/', async (req,res) => {
  let cb = await ctrl.getAllFlags();
  res.send(cb);
})

router.get('/participated/:year', async (req, res) => {
  let {year} = req.params;
  if(!year) return res.status(400).send();

  try{
    let cb = await ctrl.getParticipatedByYear(year);
    res.send(cb);
  } catch(e){
    return res.status(400).send(e.message);
  }
})


module.exports = router;
