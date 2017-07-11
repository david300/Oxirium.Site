app.controller("StopController", function($scope, StopItems, $stateParams, StopService) {
    var stopOptionsDetails = {
        instructionSelected: false,
        stopSelected: false,
        binnacleSelected: false,
        incidentsSelected: false
    };

    angular.extend($scope, {
        SelectStop: SelectStop,
        showStopOptionsDetails: false,
        stopItems: [],
        stopOptionsDetails: stopOptionsDetails,
        SelectStopOption: SelectStopOption
    });

    function ResetStopOptionsDetails(except) {
        for (var property in stopOptionsDetails) {
            stopOptionsDetails[property] = false;
        }
        if (except)
            stopOptionsDetails[except] = true;
    }

    /*function SelectStop(selectedStop, routeInfo) {
      var isSelected = selectedStop.selected;
      routeInfo.stops.forEach(function (element) {
        element.selected = false;
      });
      selectedStop.selected = !isSelected;
      $scope.showRouteOptionsDetails = selectedStop.selected;
      $scope.selectedRouteDetails = selectedStop.details;
    }*/

    function ShowInstructions() {
        if (!stopOptionsDetails.instructionSelected)
            StopService.GetStopDetailById(selectedStop.Id)
    }

    function SelectStop(selectedStop) {
        var isSelected = selectedStop.selected
        StopItems.forEach(function(element) {
            element.selected = false;
        });

        selectedStop.selected = !isSelected;
        $scope.showStopOptionsDetails = selectedStop.selected;
        $scope.selectedStop = selectedStop;
    }

    function SelectStopOption(stopOption) {
        var isSelected = stopOptionsDetails[stopOption];
        ResetStopOptionsDetails(stopOption);
        stopOptionsDetails[stopOption] = !isSelected;
    }

    (function init() {
        $scope.stopItems = StopItems;
        $scope.ResetRouteOptionsDetails('stopSelected');
        $scope.SelectRouteByID($stateParams.routeID);
    })();

});