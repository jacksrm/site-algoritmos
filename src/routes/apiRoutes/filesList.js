import express from 'express';
import listImages from '../../utils/listImages';

const route = express.Router();

route.get('/image-list', (req, res) => res.json({ listImages }));

export default route;
