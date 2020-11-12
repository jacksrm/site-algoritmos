import express from 'express';
import fibonacci from '../../utils/fibonacci';

const route = express.Router();

route.get('/fibonacci', (req, res) => {
  res.render('pages/fibonacci', { resultado: '' });
});

route.post('/fibonacci', (req, res) => {
  const { quantidade } = req.body;

  const resultado = fibonacci(parseInt(quantidade));

  return res.render('pages/fibonacci', { resultado });
});

export default route;