const express = require('express')
const router = express.Router();
const path = require('path');
const points_route = require('./points');
const flags_route = require('./flags');
const statistics_route = require('./statistics');
const formula_route = require('./formula');

router.use('/points',  points_route);
router.use('/flags',   flags_route);
router.use('/statistics', statistics_route);
router.use('/formula', formula_route);


router.get('/', (req,res) => res.redirect('/API'));
router.get('/API', (req,res) => res.sendFile(path.join(__dirname, '../apidoc', 'index.html')));
router.all('*', (req, res) => {
  res.status(404).send();
})

module.exports = router;
