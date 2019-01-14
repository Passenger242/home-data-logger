const bodyParser = require('body-parser');
const { HEADER_REQUEST_ID } = require('../util/constants');

module.exports = (app) => {
  app.use('/', [
    bodyParser.json({ limit: '50mb' }),
    bodyParser.urlencoded({ limit: '50mb', extended: false }),
  ]);

  app.use((req, res, next) => {
    res.setHeader('x-powered-by', 'Windows 95');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD');
    res.setHeader('Access-Control-Allow-Headers',
      `${HEADER_REQUEST_ID}, origin, x-requested-with, content-Type, accept, cache-control`);
    next();
  });
};
