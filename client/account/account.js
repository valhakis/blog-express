'use strict';

import angular from 'angular';

import routes from './account.routes';

export default angular
   .module('app.account', [])
   .config(routes)
   .name;
