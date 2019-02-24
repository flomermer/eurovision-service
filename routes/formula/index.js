const express = require('express')
const router  = express.Router();
const ctrl    = require('../../controller/formula');

router.get('/:year?', async (req,res) => {
  let {year} = req.params;
  if(!year) return res.status(400).send();
  try{
    let cb;
    if(year>(new Date().getFullYear())) //all years -> static data
      cb = await ctrl.getSongsStatistics();
    else
      cb = await ctrl.getWinnerByYear(year);

    res.send(cb);
  }catch(e){
    console.log(e);
    res.status(400).send();
  }
})

module.exports = router;
