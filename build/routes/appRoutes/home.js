"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _listImages = require('../../utils/listImages'); var _listImages2 = _interopRequireDefault(_listImages);
var _config = require('../../../config');

const route = _express2.default.Router();

route.get('/', (req, res) => {
  res.render('pages/home', {
    equipe: [
      'Jacson Rodrigues',
      'Dante Dantas',
      'Rafael Tavares',
      'João Monteiro',
      'Matheus Rodrigues',
    ],
    github: [
      'https://github.com/jacksrm/',
      'https://github.com/Dantedod',
      'https://github.com/RafaelD3v',
      'https://github.com/joaomonteiroSN',
      'https://github.com/Mayh6m',
    ],
    header: false, 
    url: _config.url
  });
});
exports. default = route;
