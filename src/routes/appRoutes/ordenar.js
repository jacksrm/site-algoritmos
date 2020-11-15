import express from 'express';

import quick from '../../utils/ordenar';

const route = express.Router();

route.get('/ordenar', (req, res) => {
  res.render('pages/ordenar', { resultado: null, header: true });
});

route.post('/ordenar', (req, res) => {
  const { vetor } = req.body;

  const resultado = quick(vetor);
  
  return res.render('pages/ordernar', { resultado, header: true });
});

export default route;
