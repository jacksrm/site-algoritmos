import express from 'express';

const route = express.Router();

route.get('/mdc', (req, res) => {
  res.render('pages/mdc', {});
});

export default route;
