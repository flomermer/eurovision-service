const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

var FlagSchema = new Schema({
  country: String,
});

module.exports = mongoose.model('country_flag',FlagSchema);
