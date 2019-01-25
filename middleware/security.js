'use strict';

exports.checkCertificate = function (req, res, next) {
  const caller = req.connection.remoteAddress;
  const cn = req.socket.getPeerCertificate().subject.CN;
  const method = req.method + ' ' + req.url;
  console.log(`${req.method} ${req.url} from ${caller} cn: ${cn}`); 
  next();
};

