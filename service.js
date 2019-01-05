const express       =     require("express");
const bodyParser    =     require('body-parser');
const app           =     express();
const appConfig     =   require('./middleware/app-config');
const {PORT, DB}    =     require('./consts');
const mlab_connect  =     require('./db/connection');
const index         = require('./routes');

module.exports = () => {
  mlab_connect();

  appConfig(app);
  app.use('/', index);

  app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
  })
}
