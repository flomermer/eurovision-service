const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;


var BffSchema = new Schema({
  1: [String],
  2: [String],
  3: [String]
},{collection: 'bff'});

module.exports = mongoose.model('Bff',BffSchema);
