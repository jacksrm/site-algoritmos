import express from 'express';
import mdc from '../../utils/mdc';

const route = express.Router();

route.get('/mdc', (req, res) => {
  res.render('pages/mdc', { resultado: null, header: true });
});

route.post('/mdc', (req, res) => {
  const { numero1, numero2 } = req.body;
  
  const resultado = mdc(numero1, numero2);

  return res.render('pages/mdc', { resultado, header: true });
});

export default route;
