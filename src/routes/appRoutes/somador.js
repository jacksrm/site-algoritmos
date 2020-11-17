import express from 'express';

import toArray from '../../utils/toArray';
import somador from '../../utils/somador';

const route = express.Router();

route.get('/somador', (req, res) => {
  res.render('pages/somador', { resultado: null, header: true });
});

route.post('/somador', (req, res) => {
  const { array } = req.body;
  const entry = toArray(array);
  const resultado = somador(entry);
  
  return res.render('pages/somador', { entry, resultado, header: true });
});

export default route;
