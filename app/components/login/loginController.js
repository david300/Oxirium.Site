app.controller("LoginCtrl", function ($scope, $rootScope, $state, LoginManager, $document) {
    var lgMng = new LoginManager();
    $scope.login = function () {
        //lgMng.logIn($scope.username, $scope.password).then(function(data) {
        $state.go("base.monitoring.routeTracking.list", {
            routeID: null,
            informationTab: null
        });
        //});
    }
    $scope.logout = function () {
        lgMng.logOut();
    }
});