import express from 'express';

const route = express.Router();

route.get('/primo', (req, res) => {
  res.render('pages/primo', {});
});
export default route;
