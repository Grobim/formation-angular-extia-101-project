(function() {
  angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: 'HelloController',
    controllerAs: 'helloCtrl'
  });
})();
