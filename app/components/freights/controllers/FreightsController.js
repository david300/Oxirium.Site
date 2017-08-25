var viajes = [
  {
    id: 0,
    placa: "OYC-680",
    transportista: "Transportista Monchis",
    desde: "CD Olavarría",
    hasta: "Local 33",
    salida: "Mañana 13:45hs",
    llegada: "Mañana 16:00hs",
    state: "normal",
    selected: true
  },
  {
    id: 1,
    placa: "FPM-561",
    transportista: "Transportista Cacota",
    desde: "CD Munro",
    hasta: "CD Olavarría",
    salida: "Hoy 15:45hs",
    llegada: "Hoy 18:30hs",
    state: "red"
  },
  {
    id: 2,
    placa: "FAP-666",
    transportista: "Transportes Eameo S.A.",
    desde: "CD CABA",
    hasta: "Local 689",
    salida: "17/06/2018 12:45hs",
    llegada: "17/06/2018 13:30hs",
    state: "green"
  }
];

app.controller("FreightsController", function ($scope) {

});

app.controller("FreightListController", function($scope, $state){

  $scope.viajes = viajes;

  $scope.selectFreight = function(v) {
    _.each($scope.viajes, function(i) {
      i.selected = false;
    });

    v.selected = true;
    $state.go('base.freights.list.details', {
        id: v.id
    });
  }

  $state.go('base.freights.list.details', {
      id: $scope.viajes[0].id
  });

});

app.controller("FreightDetailsController", function($scope, $stateParams){
  console.log('FreightDetailsController');

  $scope.viaje = _.findWhere(viajes, { id: parseInt($stateParams.id) });
});
