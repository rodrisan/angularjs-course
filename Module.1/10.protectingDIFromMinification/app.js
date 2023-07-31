(function () {
  'use strict';

  angular.module('DIApp', [])
    .controller('DIController', DIController);

  // Injecting and protecting from minification.
  DIController.$inject = ['$scope', '$filter'];
  function DIController($scope, $filter) {
    $scope.name = 'Rodrigo';

    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
  }

})();
