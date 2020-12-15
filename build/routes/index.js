"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _contador = require('./appRoutes/contador'); var _contador2 = _interopRequireDefault(_contador);
var _fibonacci = require('./appRoutes/fibonacci'); var _fibonacci2 = _interopRequireDefault(_fibonacci);
var _home = require('./appRoutes/home'); var _home2 = _interopRequireDefault(_home);
var _mdc = require('./appRoutes/mdc'); var _mdc2 = _interopRequireDefault(_mdc);
var _ordenar = require('./appRoutes/ordenar'); var _ordenar2 = _interopRequireDefault(_ordenar);
var _primo = require('./appRoutes/primo'); var _primo2 = _interopRequireDefault(_primo);
var _somador = require('./appRoutes/somador'); var _somador2 = _interopRequireDefault(_somador);
var _contato = require('./appRoutes/contato'); var _contato2 = _interopRequireDefault(_contato);

var _somador3 = require('./apiRoutes/somador'); var _somador4 = _interopRequireDefault(_somador3);
var _fibonacci3 = require('./apiRoutes/fibonacci'); var _fibonacci4 = _interopRequireDefault(_fibonacci3);
var _primo3 = require('./apiRoutes/primo'); var _primo4 = _interopRequireDefault(_primo3);
var _contador3 = require('./apiRoutes/contador'); var _contador4 = _interopRequireDefault(_contador3);
var _mdc3 = require('./apiRoutes/mdc'); var _mdc4 = _interopRequireDefault(_mdc3);
var _filesList = require('./apiRoutes/filesList'); var _filesList2 = _interopRequireDefault(_filesList);

 const appRoutes = {
  contadorApp: _contador2.default,
  fibonacciApp: _fibonacci2.default,
  homeApp: _home2.default,
  mdcApp: _mdc2.default,
  ordenarApp: _ordenar2.default,
  primoApp: _primo2.default,
  somadorApp: _somador2.default,
  contatoApp: _contato2.default,
}; exports.appRoutes = appRoutes;

 const apiRoutes = {
  somadorApi: _somador4.default,
  fibonacciApi: _fibonacci4.default,
  primoApi: _primo4.default,
  contadorApi: _contador4.default,
  mdcApi: _mdc4.default,
  filesListApi: _filesList2.default,
}; exports.apiRoutes = apiRoutes;
