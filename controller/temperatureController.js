<<<<<<< Updated upstream
const responses = require('../common/response-builder');
const temperatureRepo = require('../db/repo/temperatures-repo');

const get = async id => responses.ok(await temperatureRepo.getAll());

const create = async (Temperature) => {
  return responses.accepted(await temperatureRepo.createOne(Temperature));
};


module.exports = {
  get, create
};
=======
'use strict';

const TemperatureModel = require('../model/temperatureModel');
const mongoose = require('mongoose');

exports.findAllTemperatures = function (req, res) {
    TemperatureModel.find({}, function (err, result) {
        if (err)
            res.send(err);
        res.json(result);
    });
};

exports.createTemperature = function (req, res) {
    var newTemperature = new TemperatureModel(req.body);
    newTemperature.save(function(err, temperature) {
    if (err)
      res.send(err);
    res.json(temperature);
  });
};
>>>>>>> Stashed changes
