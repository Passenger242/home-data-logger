const temperatureSchema = require('../schema/temperature-schema');

const { model: TemperatureModel } = temperatureSchema;

const getAll = async () => {
  var result = TemperatureModel.find({});
  return result;
};

const createOne = async (entity) => {
  await entity.save();
  return entity;
};

module.exports = {
  getAll,
  createOne,
};