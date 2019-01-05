const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

var PointsFromByYearSchema = new Schema({
  year: Number,
  country: String,
  voted: [{
      country: String,
      points: Number
  }]
},{collection: 'points_by_year_given_froms'});

module.exports = mongoose.model('PointsFromByYear',PointsFromByYearSchema);
