import express from 'express';
import fibonacci from '../../utils/fibonacci';
import { url } from '../../../config';

const route = express.Router();

route.get('/fibonacci', (req, res) => {
  res.render('pages/fibonacci', { resultado: null, header: true, url  });
});

route.post('/fibonacci', (req, res) => {
  const { quantidade } = req.body;

  const resultado = fibonacci(quantidade);

  return res.render('pages/fibonacci', { resultado, header: true, url });
});

export default route;