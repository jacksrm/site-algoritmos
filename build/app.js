"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _expressejslayouts = require('express-ejs-layouts'); var _expressejslayouts2 = _interopRequireDefault(_expressejslayouts);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _routes = require('./routes');

const app = _express2.default.call(void 0, );
app.use(_cors2.default.call(void 0, ));
app.set('views', __dirname + '/../views');
app.set('view engine', 'ejs');
app.use(_expressejslayouts2.default);
app.use(_express2.default.static(__dirname + '/../public/'));
app.use(_express2.default.urlencoded({ extended: true }));
app.use(_express2.default.json());

app.use(_routes.appRoutes.contadorApp);
app.use(_routes.appRoutes.fibonacciApp);
app.use(_routes.appRoutes.homeApp);
app.use(_routes.appRoutes.mdcApp);
app.use(_routes.appRoutes.ordenarApp);
app.use(_routes.appRoutes.primoApp);
app.use(_routes.appRoutes.somadorApp);

app.use('/api', _routes.apiRoutes.contadorApi);
app.use('/api', _routes.apiRoutes.fibonacciApi);
app.use('/api', _routes.apiRoutes.mdcApi);
// app.use('/api', apiRoutes.ordenarApi);
app.use('/api', _routes.apiRoutes.primoApi);
app.use('/api', _routes.apiRoutes.somadorApi);
app.use('/api', _routes.apiRoutes.filesListApi);

exports. default = app;
