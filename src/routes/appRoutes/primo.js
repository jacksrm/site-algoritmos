import express from 'express';
import primo from '../../utils/primo';
const route = express.Router();

route.post('/primo', (req, res) => {
  const { entrada } = req.body;
  const resultado = primo(entrada) ? 'é primo' : 'não é primo';
  res.render('pages/primo', { resultado, entrada, header: true });
});

route.get('/primo', (req, res) => {
  res.render('pages/primo', { resultado: null, entrada: null, header: true });
});
export default route;
