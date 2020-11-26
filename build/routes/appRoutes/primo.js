"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _primo = require('../../utils/primo'); var _primo2 = _interopRequireDefault(_primo);
const route = _express2.default.Router();

route.post('/primo', (req, res) => {
  const { entrada } = req.body;
  const resultado = _primo2.default.call(void 0, entrada) ? 'é primo' : 'não é primo';
  res.render('pages/primo', { resultado, entrada, header: true });
});

route.get('/primo', (req, res) => {
  res.render('pages/primo', { resultado: null, entrada: null, header: true });
});
exports. default = route;
