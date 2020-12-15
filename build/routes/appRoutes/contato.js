"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _firebase = require('firebase'); var _firebase2 = _interopRequireDefault(_firebase);
// import db from 'firebase/database';

const route = _express2.default.Router();

route.get('/contato', (req, res) => {
  res.render('pages/contato', { header: true });
});

route.post('/contato', (req, res) => {
  const { nome, email, telefone, whatsapp, telegram, mensagem } = req.body;

  const data = {
    nome,
    email,
    telefone,
    whatsapp: whatsapp === 'on',
    telegram: telegram === 'on',
    mensagem,
  };
  
  const db = _firebase2.default.database().ref('mensagens');

  const novaMsg = db.push();
  novaMsg.set(data);
  return res.render('pages/contato', { header: true });
});

exports. default = route;
