const router = require('../router/init-router')();
const temperatureRoute = require('./v1/temperature-route');

const generateRouters = (path, routes) => router.use(path, ...routes);
const v1Routes = () => generateRouters('/v1', [
  temperatureRoute,
]);

module.exports = () => v1Routes();