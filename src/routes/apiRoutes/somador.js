import express from 'express';

const route = express.Router();

route.post('/somador', (req, res) => {
  const { array } = req.body;
  const resultado = array.reduce((soma, el) => (soma += el));

  return res.json({ resultado });
});

export default route;
