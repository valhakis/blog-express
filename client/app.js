import 'bootstrap/dist/css/bootstrap.min.css';

import angular from 'angular';
import ngRouter from 'angular-ui-router';
import NavbarComponent from './components/navbar/navbar';
import HomeModule from './home/home';
import AccountModule from './account/account';
import routes from './app.routes';

angular.module('app', [
   ngRouter,
   HomeModule,
   AccountModule,
   NavbarComponent
]).config(routes);
