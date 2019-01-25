'use strict';

exports.checkCertificate = function (req, res, next) {
  const cert = req.socket.getPeerCertificate();
  const caller = req.connection.remoteAddress;
  if(cert && cert.subject) {
    console.log(`${req.method} ${req.url} from ${caller} cn: ${cert.subject.CN}`); 
  }
  else {
    console.log(`${req.method} ${req.url} from ${caller}`); 
  }
  next();
};

