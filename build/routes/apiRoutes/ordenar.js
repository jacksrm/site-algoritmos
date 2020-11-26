"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

const route = _express2.default.Router();

route.get('/ordenar', (req, res) => {
  res.render('pages/ordenar', {});
});
exports. default = route;