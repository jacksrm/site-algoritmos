import express from 'express';

import somador from '../../utils/somador';

const route = express.Router();

route.get('/somador', (req, res) => {
  res.render('pages/somador', { resultado: null });
});

route.post('/somador', (req, res) => {
  const { array } = req.body;

  const resultado = somador(array);
  
  return res.render('pages/somador', { resultado });
});

export default route;
