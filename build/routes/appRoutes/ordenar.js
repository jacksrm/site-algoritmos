"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _toArray = require('../../utils/toArray'); var _toArray2 = _interopRequireDefault(_toArray);
var _ordenar = require('../../utils/ordenar'); var _ordenar2 = _interopRequireDefault(_ordenar);
var _generateRandomArray = require('../../utils/generateRandomArray'); var _generateRandomArray2 = _interopRequireDefault(_generateRandomArray);
var _config = require('../../../config');

const route = _express2.default.Router();

route.get('/ordenar', (req, res) => {
  res.render('pages/ordenar', { 
    resultado: null, 
    header: true, 
    value: '',
    url: _config.url
  });
});

route.post('/ordenar', (req, res) => {
  const { vetor } = req.body;

  const entry = _toArray2.default.call(void 0, vetor).map( el => ` ${el}`);
  const resultado = _ordenar2.default.call(void 0, _toArray2.default.call(void 0, vetor)).map( el => ` ${el}`);

  return res.render('pages/ordenar', {
    entry,
    resultado,
    header: true,
    value: '',
    url: _config.url
  });
});

route.post('/ordenar/generate-array', (req, res) => {
  const { size, min, max } = req.body;
  const generatedArray = _generateRandomArray2.default.call(void 0, 
    parseFloat(min),
    parseFloat(max),
    parseInt(size)
  );

  const value = generatedArray.toString();

  return res.render('pages/ordenar', {
    value,
    resultado: null,
    header: true,
    url: _config.url
  });
});

exports. default = route;
