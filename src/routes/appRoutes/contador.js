import express from 'express';

const route = express.Router();

route.get('/contador', (req, res) => {
  res.render('pages/contador', { resultado: null });
});
export default route;
