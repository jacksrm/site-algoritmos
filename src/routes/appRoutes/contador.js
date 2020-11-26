import express from 'express';

import contador from '../../utils/contador';
import { url } from '../../../config';

const route = express.Router();

route.get('/contador', (req, res) => {
  res.render('pages/contador', { resultado: null, header: true, url });
});

route.post('/contador', (req, res) => {
  const { numero } = req.body;

  const resultado = contador(numero);

  return res.render('pages/contador', { resultado, header: true, url });
});

export default route;
