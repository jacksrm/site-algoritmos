import express from 'express';
import expressLayouts from 'express-ejs-layouts';

// import routes from './routes';
import { appRoutes } from './routes';

const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(routes);
app.use('/app', appRoutes.contador);
app.use('/app', appRoutes.fibonacci);
app.use('/app', appRoutes.home);
app.use('/app', appRoutes.mdc);
app.use('/app', appRoutes.ordenar);
app.use('/app', appRoutes.primo);
app.use('/app', appRoutes.somador);

export default app;
