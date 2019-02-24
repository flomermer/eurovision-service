const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;


var SongsStatisticsSchema = new Schema({
  key: {note: String},
  lang: {
    english: Number,
    other: Number
  },
  composition: {
    band: Number,
    solo: Number
  },
  genre: {
    pop: Number,
    classic: Number,
    rock: Number,
    other: Number
  }
},{collection: 'songs_statistic'});

module.exports = mongoose.model('SongsStatistics',SongsStatisticsSchema);
