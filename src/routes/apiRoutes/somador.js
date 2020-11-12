import express from 'express';
import somador from '../../utils/somador';

const route = express.Router();

route.post('/somador', (req, res) => {
  const { array } = req.body;
  const resultado = somador(array);

  return res.json({ resultado });
});

export default route;
