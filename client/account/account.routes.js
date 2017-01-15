'use strict';

// routes
function routes($stateProvider) {
   $stateProvider
      .state('account', {
         url: '/account',
         template: 'this is home template'
      })
      .state('login', {
         url: '/login',
         template: require('./login/login.html')
      })
      .state('register', {
         url: '/register',
         template: require('./register/register.html')
      });
}


export default routes;
