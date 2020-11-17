import express from 'express';

import toArray from '../../utils/toArray';
import quick from '../../utils/ordenar';

const route = express.Router();

route.get('/ordenar', (req, res) => {
  res.render('pages/ordenar', { resultado: null, header: true });
});

route.post('/ordenar', (req, res) => {
  const { vetor } = req.body;

  const resultado = quick(toArray(vetor));

  console.log(resultado);
  
  return res.render('pages/ordenar', { resultado, header: true });

});

export default route;
