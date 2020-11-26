"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _mdc = require('../../utils/mdc'); var _mdc2 = _interopRequireDefault(_mdc);

const route = _express2.default.Router();

route.get('/mdc', (req, res) => {
  res.render('pages/mdc', { resultado: null, header: true });
});

route.post('/mdc', (req, res) => {
  const { numero1, numero2 } = req.body;
  
  const resultado = _mdc2.default.call(void 0, numero1, numero2);

  return res.render('pages/mdc', { resultado, header: true });
});

exports. default = route;
