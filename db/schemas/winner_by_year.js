const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;


var WinenrByYearSchema = new Schema({

},{collection: 'winner_by_year_new'});

module.exports = mongoose.model('getWinnerByYear',WinenrByYearSchema);
