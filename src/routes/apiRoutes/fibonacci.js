import express from 'express';

const route = express.Router();

route.get('/fibonacci', (req, res) => {
  res.render('pages/fibonacci', {});
});
export default route;