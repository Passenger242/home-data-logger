const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const start = async () => {

  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  // DB
  mongoose.Promise = global.Promise;
  await initDB.connect();

  const Schema = mongoose.Schema;

  const TempLogSchema = new Schema({
    sensor: Number,
    ts: { type: Date, default: Date.now },
    value: Number
  });


  var temperatureRoutes = require('./route/temperatureRoute');
  temperatureRoutes(app);

  const port = process.env.PORT || 8080;

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

};

start();
