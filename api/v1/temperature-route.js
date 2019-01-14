//const { check } = require('express-validator/check');
//const checkParameters = require('../../../common/validation/check-parameters');
const router = require('../../router/init-router')();
const ch = require('../../common/controller-handler');
const temperatureController = require('../../controller/temperatureController');
//const { ORDER_ID, PPP_SERIAL } = require('../../util/constants').pathParams;

const validations = [
  //check('orderNo').isString(),
  //check('pppSerial').isString(),
];

router.get('/temperatures', ch(temperatureController.get));

router.post('/temperatures', ch(temperatureController.create, req => [req.body]));

//router.get(`/orders/by-id/:${ORDER_ID}`, ch(orderController.get, req => [req.params[ORDER_ID]]));
//router.get(`/orders/by-ppp/:${PPP_SERIAL}/install`, ch(orderController.getInstallInstructions, req => [req.params[PPP_SERIAL]]));

module.exports = router;
