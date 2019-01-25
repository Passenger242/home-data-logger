const https = require('https');
const fs = require('fs');

var options = {
  key: fs.readFileSync('./config/cert/server-key.pem'),
  cert: fs.readFileSync('./config/cert/server-crt.pem'),
  ca: fs.readFileSync('./config/cert/ca-crt.pem'),
  requestCert: true,
  rejectUnauthorized: true,
};

module.exports = app => https.createServer(options, app);
