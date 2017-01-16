'use strict';

import HomeController from './home.controller.js';

function routes($stateProvider) {
   $stateProvider
      .state('home', {
         url: '/',
         template: require('./home.html'),
         controller: HomeController,
         controllerAs: 'home'
      });
}

export default routes;
