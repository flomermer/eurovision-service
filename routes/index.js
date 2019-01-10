const express = require('express')
const router = express.Router();

const points_route = require('./points');
const flags_route = require('./flags');
const statistics_route = require('./statistics');

router.use('/points',  points_route);
router.use('/flags',   flags_route);
router.use('/statistics', statistics_route);

router.all('*', (req, res) => {
  res.status(404).send();
})

module.exports = router;
