(function() {
  angular
  .module('app')
  .controller('HelloController', HelloController);

  /** @ngInject */
  function HelloController() {
    var vm = this;

    vm.$onInit = init;

    return;

    function init() {
      vm.hello = 'Hello World!';
    }
  }
})();
