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

  const firebaseConfig = {
    apiKey: 'AIzaSyATbfgQDFzzQ8XuSGuf41Ue0nRSDLKKIHw',
    authDomain: 'site-algoritmos.firebaseapp.com',
    databaseURL: 'https://site-algoritmos-default-rtdb.firebaseio.com',
    projectId: 'site-algoritmos',
    storageBucket: 'site-algoritmos.appspot.com',
    messagingSenderId: '108075395699',
    appId: '1:108075395699:web:7466db5acef9ed30235806',
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.database().ref('mensagens');

  const novaMsg = db.push();
  novaMsg.set(data);
  return res.render('pages/contato', { header: true });
});

export default route;
