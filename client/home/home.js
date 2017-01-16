'use strict';

import './home.scss';

import angular from 'angular';

import routes from './home.routes';

export default angular
   .module('app.home', [])
   .config(routes)
   .name;
