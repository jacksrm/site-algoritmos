import express from 'express';

const route = express.Router();

route.get('/somador', (req, res) => {
  res.render('pages/somador', { resultado: '' });
});

route.get('/fibonacci', (req, res) => {
  res.render('pages/fibonacci', {});
});

route.get('/contador', (req, res) => {
  res.render('pages/contador', {});
});

route.get('/ordenar', (req, res) => {
  res.render('pages/ordenar', {});
});

route.get('/primo', (req, res) => {
  res.render('pages/primo', {});
});

export default route;
