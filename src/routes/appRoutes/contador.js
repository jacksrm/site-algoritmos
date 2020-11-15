import express from 'express';

import contador from '../../utils/contador';

const route = express.Router();

route.get('/contador', (req, res) => {
  res.render('pages/contador', { resultado: null, header: true });
});

route.post('/contador', (req, res) => {
  const { numero } = req.body;

  const resultado = contador(numero);

  return res.render('pages/contador', { resultado, header: true });
});

export default route;
