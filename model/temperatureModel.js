'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const TemperatureSchema = new Schema({
    sensor: { type: Number, required: true},
    ts: { type: Date, default: Date.now },
    value: { type: Number, required: true}
});

module.exports = mongoose.model('Temperatures', TemperatureSchema);
