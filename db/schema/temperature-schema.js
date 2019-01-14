const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  value: { type: Number },
}, { _id: false });

const model = mongoose.model('temperatures', schema);

module.exports = {
  schema,
  model,
};
