import express from 'express';
import fibonacci from '../../utils/fibonacci';

const route = express.Router();

route.post('/fibonacci', (req, res) => {
  const { quantidade } = req.body;
  const resultado = fibonacci(quantidade);

  return res.json({ resultado });
});

export default route;