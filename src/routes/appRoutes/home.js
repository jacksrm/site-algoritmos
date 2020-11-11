import express from 'express';

const route = express.Router();

route.get('/', (req, res) => {
  res.render('pages/home', {
    equipe: [
      'Jacson Rodrigues',
      'Matheus Rodrigues',
      'Dante Dantas',
      'Rafael Tavares',
      'João Monteiro',
    ],
  });
});
export default route;
