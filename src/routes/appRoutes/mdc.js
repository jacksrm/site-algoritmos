import express from 'express';
import mdc from '../../utils/mdc';
import { url } from '../../../config';

const route = express.Router();

route.get('/mdc', (req, res) => {
  res.render('pages/mdc', { resultado: null, header: true, url });
});

route.post('/mdc', (req, res) => {
  const { numero1, numero2 } = req.body;
  
  const resultado = mdc(numero1, numero2);

  return res.render('pages/mdc', { resultado, header: true, url });
});

export default route;
