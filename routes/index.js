const express = require('express')
const router = express.Router();

const points_route = require('./points');
const flags_route = require('./flags');

router.use('/points',  points_route);
router.use('/flags',   flags_route);


module.exports = router;
