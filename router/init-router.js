const express = require('express');
//const addPathParamInterceptor = require('../interceptor/path/path-interceptor');

module.exports = () => {
  const router = express.Router({ mergeParams: true });
  // Hook interception into every route.
  //addPathParamInterceptor(router);
  return router;
};
