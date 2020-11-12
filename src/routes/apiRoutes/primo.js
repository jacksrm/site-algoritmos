import express from 'express';
import primo from '../../utils/primo';

const route = express.Router();

route.post('/primo', (req, res) => {
  const { entrada } = req.body;
  const resultado = primo(entrada) ? 'é primo' : 'não é primo';

  return res.json({ resultado });
});

export default route;
