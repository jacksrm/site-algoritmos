import express from 'express';

const route = express.Router();

route.get('/somador', (req, res) => {
  res.render('pages/somador', { resultado: '' });
});

route.post('/somador', (req, res) => {
  const { array } = req.body;
  const resultado = array.split(',').reduce((soma, el) => {
    soma = parseFloat(soma);
    el = parseFloat(el);

    if (!soma) soma = 0;
    if (!el) el = 0;

    return (soma += el);
  });

  return res.render('pages/somador', { resultado });
});

export default route;
