app.controller("BinnacleController", function ($scope, BinnacleService, $stateParams, BinnacleItems) {

  (function init() {
    $scope.binnacleItems = BinnacleItems;
    $scope.ResetRouteOptionsDetails('binnacleSelected');
    $scope.SelectRouteByID($stateParams.routeID);
  })();

});