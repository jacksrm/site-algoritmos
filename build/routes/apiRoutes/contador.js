"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _contador = require('../../utils/contador'); var _contador2 = _interopRequireDefault(_contador);

const route = _express2.default.Router();

route.post('/contador', (req, res) => {
  const { numero } = req.body;
  const resultado = _contador2.default.call(void 0, numero);

  return res.json({ resultado });
});

exports. default = route;