class User {
   constructor($scope, $http) {
      this.$scope = $scope;
      this.$http = $http;
   }
}

class Post {
   constructor($scope, $http) {
      this.$scope = $scope;
      this.$http = $http;
   }
}

class HomeController {
   constructor($http, $scope) {
      this.Post = new Post();
      this.User = new User();

      this.posts = [];

      this.$http = $http;

      $scope.errors = [];
      $scope.users = [];
      $scope.user = this.resetUser();
      $scope.user = {
         name: 'example name',
         email: 'ex@mp.le',
         username: 'example',
         password: 'example1234'
      };
      this.$scope = $scope;
   }

   $onInit() {
      this.setupUsers();

      this.$http.get('/api/posts').then(res => {
         console.log('data', res.data);
      }, res => {
         console.log('data', res.data);
      });
   }

   setupUsers() {
      this.$http.get('/api/users').then(
         res => {
            this.$scope.users = res.data;
         },
         res => {
            console.log('res', res);
         }
      );
   }

   createUser() {
      var user = this.$scope.user;
      this.$http.post('/api/users', {
         name: user.name,
         email: user.email,
         username: user.username,
         password: user.password
      }).then(
         res => {
            var user = res.data;
            console.log('data', user);
            this.$scope.users.push(user);
            this.$scope.errors = [];
         },
         res => {
            console.log('res', res.data);
            this.$scope.errors = res.data;
         }
      );
   }

   resetUser() {
      return {
         name: '',
         email: '',
         username: '',
         password: ''
      };
   }
}

export default HomeController;
