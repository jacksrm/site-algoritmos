import express from 'express';

import toArray from '../../utils/toArray';
import somador from '../../utils/somador';

const route = express.Router();

route.get('/somador', (req, res) => {
  res.render('pages/somador', { resultado: null, header: true });
});

route.post('/somador', (req, res) => {
  const { array } = req.body;

  const resultado = somador(toArray(array));
  
  return res.render('pages/somador', { resultado, header: true });
});

export default route;
