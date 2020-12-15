import express from 'express';
import firebase from 'firebase';
// import db from 'firebase/database';

const route = express.Router();

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
  
  const db = firebase.database().ref('mensagens');

  const novaMsg = db.push();
  novaMsg.set(data);
  return res.render('pages/contato', { header: true });
});

export default route;
