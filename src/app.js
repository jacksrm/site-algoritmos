import express from 'express';
import expressLayouts from 'express-ejs-layouts';

import routes from './routes';

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.use(routes);

export default app;
