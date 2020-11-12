import express from 'express';

const route = express.Router();

route.get('/', (req, res) => {
  res.render('pages/home', {
    equipe: [
      'Jacson Rodrigies',
      'Matheus Rodrigues',
      'Dante Dantas',
      'Rafael Muleque',
      'João Monteiro'
    ]
  });
});
export default route;
