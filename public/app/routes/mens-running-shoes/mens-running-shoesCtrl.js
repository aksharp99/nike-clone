angular.module('nike-clone').controller('mens-running-shoesCtrl', function($scope, mainService) {

$scope.getmenrunningshoes = function() {
  mainService.getmenrunningshoes().then(function(response) {

      console.log('this is the mensrunningshoe response data: ',response.data);
    $scope.mensshoes = response.data;

  })
}
$scope.getmenrunningshoes();
})
