import express from 'express';

const route = express.Router();

route.get('/teste', (req, res) => {
  res.render('pages/teste', {
    equipe: [
      'Jacson Rodrigues',
      'Dante Dantas',
      'Rafael Tavares',
      'João Monteiro',
      'Matheus Rodrigues',
    ],
    github: [
      'https://github.com/jacksrm/',
      'https://github.com/Dantedod',
      'https://github.com/RafaelD3v',
      'https://github.com/joaomonteiroSN',
      'https://github.com/Mayh6m',
    ],
    header: null
  })
});

export default route;
