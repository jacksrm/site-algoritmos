import express from 'express';

const route = express.Router();

route.get('/ordenar', (req, res) => {
  res.render('pages/ordenar', { header: true });
});
export default route;
