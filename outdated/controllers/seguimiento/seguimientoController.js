app.controller("SeguimientoCtrl", function($scope, INDICATOR_TITLES, STATUS) {

  $scope.dynamicOrderFunction = function(criteria, direction) {
      if (direction == "ASC") {
          return criteria;
      }
      else {
          return "-" + criteria;
      }
  };

  $scope.sortLog = function(message) {
      return message.Date.getTime();
  };

  $scope.optionsSimplePieChart = {
          animate:{
              duration:0,
              enabled:false
          },
          barColor:'#ecba52',
          scaleColor:false,
          lineWidth:10,
          lineCap:'circle',
          size: 110
      };
  $scope.loadNavigation = function() {
      $(document).ready(function() {
          $("body").addClass('fixed-sidebar');
          $('.sidebar-collapse').slimScroll({
              height: '100%',
              railOpacity: 0.9
          });

          localStorage.setItem("fixedsidebar",'on');
      });
  };

  $scope.status = STATUS.tracingStatus;
});
