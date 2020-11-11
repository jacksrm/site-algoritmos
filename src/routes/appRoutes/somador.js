import express from 'express';

import somador from '../../utils/somador';

const route = express.Router();

route.get('/somador', (req, res) => {
  res.render('pages/somador', { resultado: '' });
});

route.post('/somador', (req, res) => {
  const { array } = req.body;


  const resultado = somador(array.split(',').map((el) => {
    el = parseFloat(el);
    if (!el) el = 0;
    return el;
  }))

  return res.render('pages/somador', { resultado });
});

export default route;
