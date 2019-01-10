const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;


var WikiSchema = new Schema({

},{collection: 'wikipedia'});

module.exports = mongoose.model('Wiki',WikiSchema);
