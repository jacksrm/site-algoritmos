import express from 'express';
import primo from '../../utils/primo';
const route = express.Router();

route.get('/primo', (req, res) => {
  res.render('pages/primo', {});
});
export default route;
