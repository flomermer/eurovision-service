const express     =   require('express');
const bodyParser  =   require('body-parser');
const path        =   require('path');
const apiDocDir   =   path.join(__dirname, '../apidoc');

module.exports = (app) => {
  app.use('/API', express.static(apiDocDir));
  app.use(bodyParser.json());         // to support JSON-encoded bodies
  app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
  app.use(bodyParser.raw());

  app.use(function(req, res, next) {
    var allowedOrigins = ['http://localhost', 'http://localhost:3000', 'https://eurovision-tutorial.herokuapp.com', 'http://eurovision-tutorial.herokuapp.com'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });
};
