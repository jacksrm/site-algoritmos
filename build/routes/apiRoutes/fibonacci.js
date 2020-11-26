"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _fibonacci = require('../../utils/fibonacci'); var _fibonacci2 = _interopRequireDefault(_fibonacci);

const route = _express2.default.Router();

route.post('/fibonacci', (req, res) => {
  const { quantidade } = req.body;
  const resultado = _fibonacci2.default.call(void 0, quantidade);

  return res.json({ resultado });
});

exports. default = route;