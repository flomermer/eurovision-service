const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

var PointsToByYearSchema = new Schema({
  year: Number,
  country: String,
  voted: [{
      country: String,
      points: Number
  }]
},{collection: 'points_by_year_given_tos'});

module.exports = mongoose.model('PointsToByYear',PointsToByYearSchema);
