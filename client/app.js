import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/app.scss';

import angular from 'angular';
import ngRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import NavbarComponent from './components/navbar/navbar';
import HomeModule from './home/home';
import AccountModule from './account/account';
import routes from './app.routes';

angular.module('app', [
   ngRouter,
   ngResource,
   HomeModule,
   AccountModule,
   NavbarComponent
]).config(routes);
