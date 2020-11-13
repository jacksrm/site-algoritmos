import express from 'express';
import mdc from '../../utils/mdc';

const route = express.Router();

route.post('/mdc', (req, res) => {
  const { numero1, numero2 } = req.body;

  const resultado = mdc(numero1, numero2);

  return res.json({ resultado });
});
export default route;