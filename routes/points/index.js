const express = require('express')
const router  = express.Router();
const ctrl    = require('../../controller/points');

router.get('/:year/:dir/:country', async (req,res) => {
  let {year, country, dir} = req.params;
  if(!year || !country || !dir) return res.status(400).send();
  country = country.toLowerCase();

  let cb;
  if(year>(new Date().getFullYear())){ //all years
    if(dir=='to')
      cb = await ctrl.allPointsTo(country);
    else if(dir=='from')
      cb = await ctrl.allPointsFrom(country);
  } else if(year>1900) { //specific year
    if(dir=='to')
      cb = await ctrl.pointsToByYear(country, year);
    if(dir=='from')
      cb = await ctrl.pointsFromByYear(country, year);
  }
  res.send(cb);
})


module.exports = router;
