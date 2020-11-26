import express from 'express';

import toArray from '../../utils/toArray';
import quick from '../../utils/ordenar';
import generateRandomArray from '../../utils/generateRandomArray';
import { url } from '../../../config';

const route = express.Router();

route.get('/ordenar', (req, res) => {
  res.render('pages/ordenar', { 
    resultado: null, 
    header: true, 
    value: '',
    url
  });
});

route.post('/ordenar', (req, res) => {
  const { vetor } = req.body;

  const entry = toArray(vetor).map( el => ` ${el}`);
  const resultado = quick(toArray(vetor)).map( el => ` ${el}`);

  return res.render('pages/ordenar', {
    entry,
    resultado,
    header: true,
    value: '',
    url
  });
});

route.post('/ordenar/generate-array', (req, res) => {
  const { size, min, max } = req.body;
  const generatedArray = generateRandomArray(
    parseFloat(min),
    parseFloat(max),
    parseInt(size)
  );

  const value = generatedArray.toString();

  return res.render('pages/ordenar', {
    value,
    resultado: null,
    header: true,
    url
  });
});

export default route;
