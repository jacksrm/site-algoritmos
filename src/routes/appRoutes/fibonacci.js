import express from 'express';
import fibonacci from '../../utils/fibonacci';

const route = express.Router();

route.get('/fibonacci', (req, res) => {
  res.render('pages/fibonacci', { resultado: null });
});

route.post('/fibonacci', (req, res) => {
  const { quantidade } = req.body;

  const resultado = fibonacci(quantidade);

  return res.render('pages/fibonacci', { resultado });
});

export default route;