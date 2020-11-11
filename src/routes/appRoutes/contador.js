import express from 'express';

const route = express.Router();

route.get('/contador', (req, res) => {
  res.render('pages/contador', {});
});
export default route;
