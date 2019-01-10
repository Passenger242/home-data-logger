const https = require('https');
const fs = require('fs');
const { certificateKey, certificate, certificateAuthority } = require('../config/config').server;

const options = {
  key: fs.readFileSync(certificateKey),
  cert: fs.readFileSync(certificate),
  ca: [fs.readFileSync(certificateAuthority)],
  requestCert: true,
  rejectUnauthorized: false,
};

module.exports = app => https.createServer(options, app);
