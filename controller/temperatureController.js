const responses = require('../common/response-builder');
const temperatureRepo = require('../db/repo/temperatures-repo');

const get = async id => responses.ok(await temperatureRepo.getAll());

const create = async (Temperature) => {
  return responses.accepted(await temperatureRepo.createOne(Temperature));
};


module.exports = {
  get, create
};
