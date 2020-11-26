import express from 'express';

import toArray from '../../utils/toArray';
import somador from '../../utils/somador';
import generateRandomArray from '../../utils/generateRandomArray';
import { url } from '../../../config';

const route = express.Router();

route.get('/somador', (req, res) => {
  res.render('pages/somador', {
    resultado: null,
    header: true,
    value: '',
    url
  });
});

route.post('/somador', (req, res) => {
  const { array } = req.body;
  const entry = toArray(array).map( el => ` ${el}`);
  const resultado = somador(toArray(array));

  return res.render('pages/somador', {
    entry,
    resultado,
    header: true,
    value: '',
    url
  });
});

route.post('/somador/generate-array', (req, res) => {
  const { size, min, max } = req.body;
  const generatedArray = generateRandomArray(
    parseFloat(min),
    parseFloat(max),
    parseInt(size)
  );

  const value = generatedArray.toString();

  return res.render('pages/somador', {
    value,
    resultado: null,
    header: true,
    url
  });
});

export default route;
