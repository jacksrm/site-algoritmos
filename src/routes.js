import express from 'express';

const route = express.Router();

route.get('/', (req, res) => {
  res.render('pages/home', {
    title: 'Home',
    equipe: [
      'Jacson Rodrigues',
      'Matheus Rodrigues',
      'Dante Dantas',
      'Rafael Tavares',
      'João Monteiro',
    ],
  });
});

route.get('/somador', (req, res) => {
  res.render('pages/somador', { title: 'Somar um array' });
});

route.get('/fibonacci', (req, res) => {
  res.render('pages/fibonacci', { title: 'Fibonacci' });
});

route.get('/contador', (req, res) => {
  res.render('pages/contador', { title: 'Contar números' });
});

route.get('/mdc', (req, res) => {
  res.render('pages/mdc', { title: 'Calcular MDC' });
});

route.get('/ordenar', (req, res) => {
  res.render('pages/ordenar', { title: 'Ordenar com Quick Sort' });
});

route.get('/primo', (req, res) => {
  res.render('pages/primo', { title: 'Será que é primo?' });
});

export default route;
