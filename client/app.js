import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/app.scss';

import angular from 'angular';
import ngRouter from 'angular-ui-router';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import NavbarComponent from './components/navbar/navbar';
import HomeModule from './home/home';
import Module404 from './404/404.js';
import AccountModule from './account/account';
import routes from './app.routes';

angular.module('app', [
   ngRouter,
   ngResource,
   ngCookies,
   Module404,
   HomeModule,
   AccountModule,
   NavbarComponent
]).config(routes);
