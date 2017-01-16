'use strict';

import angular from 'angular';

import routes from './404.routes';

export default angular
   .module('app.example', [])
   .config(routes)
   .name;
