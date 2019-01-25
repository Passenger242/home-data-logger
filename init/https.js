const https = require('https');
const fs = require('fs');

var options = {
  key: fs.readFileSync('./config/cert/datalogger-server.key'),
  cert: fs.readFileSync('./config/cert/datalogger-server.crt'),
  ca: fs.readFileSync('./config/cert/ca.crt'),
  requestCert: true,
  rejectUnauthorized: false,
};

module.exports = app => https.createServer(options, app);
