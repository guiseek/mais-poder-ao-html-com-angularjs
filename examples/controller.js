(function() {
  angular.module('app')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl($scope, $http) {
    $scope.name = 'Main';

    $http.get('data.json').then(function(response) {
      $scope.content = response.data.content;
    }, function(error) {
      console.error(error);
    });
  }
})();
