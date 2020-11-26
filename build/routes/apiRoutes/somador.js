"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _somador = require('../../utils/somador'); var _somador2 = _interopRequireDefault(_somador);

const route = _express2.default.Router();

route.post('/somador', (req, res) => {
  const { array } = req.body;
  const resultado = _somador2.default.call(void 0, array);

  return res.json({ resultado });
});

exports. default = route;
