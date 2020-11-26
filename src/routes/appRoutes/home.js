import express from 'express';
import images from '../../utils/listImages';
import { url } from '../../../config';

const route = express.Router();

route.get('/', (req, res) => {
  res.render('pages/home', {
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
    header: false, 
    url
  });
});
export default route;
