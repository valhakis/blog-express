'use strict';

function routes($urlRouterProvider, $locationProvider, $stateProvider) {
   $stateProvider
      .state('404', {
         url: '/404',
         template: require('./404.html')
      });
   $urlRouterProvider.otherwise('/404');
   $locationProvider.html5Mode(true);
}

export default routes;
