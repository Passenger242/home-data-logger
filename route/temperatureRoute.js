'use strict';
module.exports = function (app) {
  const security = require('../middleware/security');
  const controller = require('../controller/temperatureController');

  app.route("/temperatures")
    .get(controller.findAllTemperatures)
    .post(controller.createTemperature);

};