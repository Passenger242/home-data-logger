'use strict';

const TemperatureModel = require('../model/temperatureModel');
const mongoose = require('mongoose');

exports.findAllTemperatures = function (req, res) {
  const sensorParam = req.query['sensor'];
  const fromParam = req.query['from'];
  const tomParam = req.query['tom']

  var query = {};

  if(sensorParam) {
    query.sensor = sensorParam;
  }

  if(fromParam || tomParam) {
    query.ts = {};
    if(fromParam) {
      query.ts.$gte = Date.parse(fromParam);
    }
    if(tomParam) {
      query.ts.$lte = Date.parse(tomParam);
    }
  }

  TemperatureModel.find(query, function (err, result) {
    if (err) {
      res.send(err);
    }
    res.json(result);
  })
    .sort({ ts: -1 });
};

exports.createTemperature = function (req, res) {
  var newTemperature = new TemperatureModel(req.body);
  newTemperature.save(function (err, temperature) {
    if (err) {
      res.send(err);
    }
    res.json(temperature);
  });
};
