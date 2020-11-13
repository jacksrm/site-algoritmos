import express from 'express';
import images from '../../utils/listImages'

const route = express.Router();

route.get('/', (req, res) => {
  res.render('pages/home', {
    equipe: [
      'Jacson Rodrigies',
      'Matheus Rodrigues',
      'Dante Dantas',
      'Rafael Muleque',
      'João Monteiro'
    ],
    images,
  });
});
export default route;
