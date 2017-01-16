'use strict';

function routes($urlRouterProvider, $locationProvider) {
   //$urlRouterProvider.otherwise('/404');
   $locationProvider.html5Mode(true);
}

export default routes;
