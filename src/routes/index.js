import contadorApp from './appRoutes/contador';
import fibonacciApp from './appRoutes/fibonacci';
import homeApp from './appRoutes/home';
import mdcApp from './appRoutes/mdc';
import ordenarApp from './appRoutes/ordenar';
import primoApp from './appRoutes/primo';
import somadorApp from './appRoutes/somador';

import somadorApi from './apiRoutes/somador';


export const appRoutes = {
  contadorApp,
  fibonacciApp,
  homeApp,
  mdcApp,
  ordenarApp,
  primoApp,
  somadorApp,
};

export const apiRoutes = {
  somadorApi,
};
