class NotFoundController {
   /*@ngInject*/
   constructor($stateParams) {
      var data = $stateParams.data;
      this.data = data;
      if (data) {
         this.host = data.host();
         this.path = data.path();
         this.port = data.port();
         this.protocol = data.protocol();
         this.url = `${this.protocol}://${this.host}:${this.port}${this.path}`;
      }
   }
}

export default NotFoundController;
