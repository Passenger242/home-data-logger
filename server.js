var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  TemperatureModel = require('./model/temperatureModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/home-data-logger'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./route/temperatureRoute'); //importing route
routes(app); //register the route


app.listen(port);


console.log('RESTful API server started on: ' + port);