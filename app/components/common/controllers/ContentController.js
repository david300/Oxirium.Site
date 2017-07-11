app.controller("ContentCtrl", function($scope, $rootScope, $state) {
		$scope.loadNavigation = function() {
	        $(document).ready(function() {
	            $("body").addClass('fixed-sidebar');
	            $('.sidebar-collapse').slimScroll({
	                height: '100%',
	                railOpacity: 0.9
	            });

	            localStorage.setItem("fixedsidebar",'on');
	        });
	    }
	  var h = new Date().getHours();
	  if (h <= 18) {
	    $scope.backgroundImage = "day";
	  } else {
	    $scope.backgroundImage = "night";
	  }
		$scope.$state = $state;
});
