"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _toArray = require('../../utils/toArray'); var _toArray2 = _interopRequireDefault(_toArray);
var _somador = require('../../utils/somador'); var _somador2 = _interopRequireDefault(_somador);
var _generateRandomArray = require('../../utils/generateRandomArray'); var _generateRandomArray2 = _interopRequireDefault(_generateRandomArray);

const route = _express2.default.Router();

route.get('/somador', (req, res) => {
  res.render('pages/somador', {
    resultado: null,
    header: true,
    value: '',
  });
});

route.post('/somador', (req, res) => {
  const { array } = req.body;
  const entry = _toArray2.default.call(void 0, array).map( el => ` ${el}`);
  const resultado = _somador2.default.call(void 0, _toArray2.default.call(void 0, array));

  return res.render('pages/somador', {
    entry,
    resultado,
    header: true,
    value: '',
  });
});

route.post('/somador/generate-array', (req, res) => {
  const { size, min, max } = req.body;
  const generatedArray = _generateRandomArray2.default.call(void 0, 
    parseFloat(min),
    parseFloat(max),
    parseInt(size)
  );

  const value = generatedArray.toString();

  return res.render('pages/somador', {
    value,
    resultado: null,
    header: true,
  });
});

exports. default = route;
