/**
 * Wrapper class for the config npm module used, to make it easer to switch, if needed.
 */

const config = require('config');

const getParam = name => config.get(name);

module.exports = {
  //env: process.env.NODE_ENV,
  //logLevel: getParam('logLevel'),
  //loggingEnabled: getParam('loggingEnabled'),
  //certificateRenewalDaysLimit: getParam('certificateRenewalDaysLimit'),
  db: {
    usr: getParam('db.usr'),
    pwd: getParam('db.pwd'),
    name: getParam('db.name'),
    url: getParam('db.url'),
  },
};
