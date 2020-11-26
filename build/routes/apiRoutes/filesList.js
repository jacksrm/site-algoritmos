"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _listImages = require('../../utils/listImages'); var _listImages2 = _interopRequireDefault(_listImages);

const route = _express2.default.Router();

route.get('/image-list', (req, res) => res.json({ listImages: _listImages2.default }));

exports. default = route;
