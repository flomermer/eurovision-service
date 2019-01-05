const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

var AllPointsFromSchema = new Schema({
  country: String,
  votes: [{
    country: String,
    points: Number
  }]
},{collection: 'all_points_given_froms'});

module.exports = mongoose.model('AllPointsFrom',AllPointsFromSchema);
