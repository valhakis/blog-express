'use strict';

import angular from 'angular';

export default angular
   .module('app.account', [])
   .config(routes)
   .name;

// routes
function routes($stateProvider) {
   $stateProvider
      .state('account', {
         url: '/account',
         template: 'this is home template'
      });
}

