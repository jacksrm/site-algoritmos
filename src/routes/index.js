import contador from './appRoutes/contador';
import fibonacci from './appRoutes/fibonacci';
import home from './appRoutes/home';
import mdc from './appRoutes/mdc';
import ordenar from './appRoutes/ordenar';
import primo from './appRoutes/primo';
import somador from './appRoutes/somador';

import somador from './apiRoutes/somador';


export const appRoutes = {
  contador,
  fibonacci,
  home,
  mdc,
  ordenar,
  primo,
  somador,
};

export const apiRoutes = {
  somador
};
