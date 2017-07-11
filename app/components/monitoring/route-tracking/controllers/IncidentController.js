app.controller("IncidentController", function($scope, IncidentService, $stateParams, IncidentItems) {
  var incidentGroupOptions = [
    {
      id: 1,
      label: 'últimos'
    },
    {
      id: 2,
      label: 'parada'
    }
  ];

  var incidents = {};

  var templates = {
    groupByStop: 'app/components/monitoring/route-tracking/views/Incidents/IncidentItemByStop.html',
    groupByTime: 'app/components/monitoring/route-tracking/views/Incidents/IncidentItemByTime.html'
  }

  angular.extend($scope,{
    incidentGroupOptions: incidentGroupOptions,
    ChangeSelectedGroupOption: GroupByOptionSelected,
    templates: templates,
    groupedIncidentsList: []
  });

  function GroupByOptionSelected(){
    if($scope.selectedGroupOption.id == 1){
      $scope.itemGroupBy = templates.groupByTime;
      DefaultGroup();
    }
    else if($scope.selectedGroupOption.id == 2){
      $scope.itemGroupBy = templates.groupByStop;
      GroupByStop();
    }
  }

  function DefaultGroup(){
    $scope.groupedIncidentsList = incidents;
  }

  function GroupByStop(){
    $scope.groupedIncidentsList = IncidentService.GroupIncidentsByStop(incidents);
  }

  (function Init(){
    $scope.selectedGroupOption = incidentGroupOptions[0];
    incidents = IncidentItems;
    GroupByOptionSelected();
    $scope.ResetRouteOptionsDetails('incidentsSelected');
    $scope.SelectRouteByID($stateParams.routeID);
  })();

});
