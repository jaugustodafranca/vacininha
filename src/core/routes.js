// Components

import Login from '../containers/Login';
import Carteirinha from '../containers/Carteirinha';
import NotFoundRoute from '../containers/NotFoundRoute';


// Routes
import carteirinhaRoutes from '../containers/Carteirinha/routes';

const routes = [{
    name: 'Carteirinha',
    path: '/carteirinha/:tab?',
    component: Carteirinha,
    routes: carteirinhaRoutes
  },{
    component: Login,
    routes: [{
      name: 'Login',
      path: '/login',
      component: Login,
    },  {
    path: '**',
    component: NotFoundRoute
  }]
}];

export default routes;
