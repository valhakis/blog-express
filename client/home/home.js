'use strict';

import angular from 'angular';

export default angular
   .module('app.home', [])
   .config(routes)
   .name;

// routes
function routes($stateProvider) {
   $stateProvider
      .state('home', {
         url: '/home',
         template: require('./home.html')
      });
}

