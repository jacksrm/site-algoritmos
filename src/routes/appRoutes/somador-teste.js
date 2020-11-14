import express from 'express';

import somador from '../../utils/somador';

const route = express.Router();

route.get('/somador-teste', (req, res) => {
  res.render('pages/somador-teste', { resultado: null, header: true });
});

route.post('/somador-teste', (req, res) => {
  const { array } = req.body;

  const resultado = somador(array);

  return res.render('pages/somador-teste', { resultado, header: true });
});

export default route;
