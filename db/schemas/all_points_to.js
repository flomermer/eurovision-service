const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;


var AllPointsToSchema = new Schema({
  country: String,
  votes: [{
    country: String,
    points: Number
  }]
},{collection: 'all_points_given_tos'});

module.exports = mongoose.model('AllPointsTo',AllPointsToSchema);
