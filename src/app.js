import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import cors from 'cors';

import { appRoutes, apiRoutes } from './routes';

const app = express();
app.use(cors());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/app', appRoutes.contadorApp);
app.use('/app', appRoutes.fibonacciApp);
app.use('/app', appRoutes.homeApp);
app.use('/app', appRoutes.mdcApp);
app.use('/app', appRoutes.ordenarApp);
app.use('/app', appRoutes.primoApp);
app.use('/app', appRoutes.somadorApp);

app.use('/api', apiRoutes.contadorApi);
app.use('/api', apiRoutes.fibonacciApi);
app.use('/api', apiRoutes.mdcApi);
// app.use('/api', apiRoutes.ordenarApi);
app.use('/api', apiRoutes.primoApi);
app.use('/api', apiRoutes.somadorApi);
app.use('/api', apiRoutes.filesListApi);

export default app;
