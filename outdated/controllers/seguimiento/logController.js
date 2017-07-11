app.controller("logCtrl", function($scope, $state) {

    var vm = this;
    $scope.tabs = [
       {title: "Log", templateUrl:"app/components/tracking/common/logbar/logtab.html" , active: true},
       {title: "Problemas", templateUrl:"app/components/tracking/common/logbar/problemstab.html" , active: false}
     ];

     var activeTab;
     for(var i = 0; i < $scope.tabs.length; i++) {
       if($scope.tabs[i].active) {
         activeTab = $scope.tabs[i];
         break;
       }
     }

     vm.logMessages = [
       {
         Title: "Prueba 1",
         Body: "Lorem ipsum dolor sit amet, consectetuer adipiscing",
         "Date": new Date(2017,0,24,11,33,30,0)
       },
       {
         Title: "Prueba 3",
         Body: "Lorem ipsum dolor sit amet, consectetuer adipiscing",
         "Date": new Date(2017,0,24,12,02,30,0)
       },
       {
         Title: "Prueba 2",
         Body: "Lorem ipsum dolor sit amet, consectetuer adipiscing",
         "Date": new Date(2017,0,17,18,02,30,0)
       }
     ];
});
