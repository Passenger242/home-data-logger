const express = require('express'),
  app = express(),
  initHttps = require('./init/https'),
  security = require('./middleware/security'),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  TemperatureModel = require('./model/temperatureModel'), //created model loading here
  bodyParser = require('body-parser');
 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/home-data-logger'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(security.checkCertificate);

const server = initHttps(app);

var routes = require('./route/temperatureRoute');
routes(app);

server.listen(port, () => console.info(`Data-Logger API started on port ${port}`));
