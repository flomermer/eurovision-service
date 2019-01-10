const mongoose    = require('mongoose');
const {MLAB_URI}  = require('../consts');

module.exports = () => {
  mongoose.connect(MLAB_URI,{ useNewUrlParser: true }, function(err){
    if(err){
      console.log(err.message);
      return false;
    }

    console.log("connected to mLab");
  });
}
