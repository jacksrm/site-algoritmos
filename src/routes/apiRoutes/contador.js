import express from 'express';
import contador from '../../utils/contador';

const route = express.Router();

route.post('/contador', (req, res) => {
  const { numero } = req.body;
  const resultado = contador(numero);

  return res.json({ resultado });
});

export default route;