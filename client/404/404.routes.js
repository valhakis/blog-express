'use strict';

import NotFoundController from './404.controller';

function routes($urlRouterProvider, $stateProvider) {
   'ngInject'; 

   $urlRouterProvider.otherwise(($injector, $location) => {
      var state = $injector.get('$state');
      var data = angular.copy($location);
      state.go('404', {data: data});
      return $location.path();
   });

   $stateProvider
      .state('404', {
         url: '/404',
         params: {
            data: null
         },
         template: require('./404.html'),
         controllerAs: 'vm',
         controller: NotFoundController
      });
}

export default routes;
