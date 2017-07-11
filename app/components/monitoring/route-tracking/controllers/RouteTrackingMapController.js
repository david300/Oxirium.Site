app.controller("RouteTrackingMapController", function ($scope, $state, MapService, uiGmapIsReady, $timeout) {
	var types = [{
			id: 2,
			quantity: 0,
			description: "Puntual Transito",
			click: SelectFilterOption,
			selected: true
		},
		{
			id: 5,
			quantity: 0,
			description: "Demorado Transito",
			click: SelectFilterOption,
			selected: true
		},
		{
			id: 1,
			quantity: 0,
			description: "Puntual Parado",
			click: SelectFilterOption,
			selected: true
		},
		{
			id: 4,
			quantity: 0,
			description: "Demorado Parado",
			click: SelectFilterOption,
			selected: true
		},
		{
			id: 3,
			quantity: 0,
			description: "Presenta inconvenientes",
			click: SelectFilterOption,
			selected: true
		}
	];	
	

	angular.extend($scope, {
		generalMapOptions: MapService.generalMapOptions,
		markers: ParseRouteToMarker($scope.FilteredActiveRoutes),
		ClickMarker: ClickMarker,
		types: types,
		mapObject: {}
	});


	$scope.RegisterFilterCriteria(FilterByType);

	function ParseRouteToMarker(routes) {
		var markers = [];

		types.forEach(function(type){
			type.quantity = 0;
		});

		routes.forEach(function (route) {
			var type = types[types.map(function (e) {
				return e.id;
			}).indexOf(route.general.type)];

			markers.push({
				id: route.general.routeID,
				type: route.general.type,
				coords: route.general.driver.coords,
				options: {
					draggable: false,
					icon: GetIconByType(route.general.type),
					visible: type.selected
				}
			});
			type.quantity += 1;
		});

		return markers;
	}

	function ClickMarker(marker, eventName, model, eventArgs) {
		$scope.SelectRouteByID(model.idKey);
	}

	function SelectFilterOption() {
		this.selected = !this.selected;
		$scope.FilterRoutes();
	}

	function FilterByType(route) {
		return _.find(types, function (o) {
			return o.id == route.general.type;
		}).selected;
	}

	$scope.$watch('SelectedRoute', function (newVal, oldVal) {
		if (newVal) {
			var marker = FindMarkerByRouteID(newVal.general.routeID);
			if (marker)
				RepositionMap(marker.coords.latitude, marker.coords.longitude, 10);
		} else
			RepositionMap(MapService.defaultMapOptions.center.latitude, MapService.defaultMapOptions.center.longitude, MapService.defaultMapOptions.zoom);
	});

	$scope.$watch('FilteredActiveRoutes', function (newVal, oldVal) {
        $scope.markers = ParseRouteToMarker($scope.FilteredActiveRoutes);
    });
	
    $scope.$watch('toggleSideMenu', function (newVal, oldVal) {
        if (newVal) {
			$timeout(function() {
				google.maps.event.trigger($scope.mapObject.getGMap(), 'resize');
			}, 300);
        }
    });

	function FindMarkerByRouteID(routeID) {
		return _.find($scope.markers, function (marker) {
			return marker.id == routeID;
		});
	}

	function RepositionMap(lat, lon, zoom) {
		$scope.mapObject.getGMap().panTo(new google.maps.LatLng(lat, lon));
		$scope.mapObject.getGMap().setZoom(zoom);
	}

	function GetIconByType(type) {
		var icon = "";
		switch (type) {
			case 1:
				icon = "OnTimeStopIcon";
				break;
			case 2:
				icon = "OnTimeTransitIcon";
				break;
			case 3:
				icon = "IncidentIcon";
				break;
			case 4:
				icon = "DelayedStopIcon";
				break;
			case 5:
				icon = "DelayedTransitIcon";
				break;
			default:
				icon = "OnTimeStopIcon";
		}
		return 'assets/img/icons/' + icon + '.png';
	}

	/*
	uiGmapIsReady.promise().then(function () {
		var lineSymbol = {
			path: 'M 0,-1 0,1',
			strokeOpacity: 1,
			scale: 4
		};

		var directionsDisplay = new google.maps.DirectionsRenderer({
			polylineOptions: {
				geodesic: true,
				strokeColor: '#FF0000',
				strokeOpacity: 0,
				icons: [{
					icon: lineSymbol,
					offset: '0',
					repeat: '20px'
				}],
				strokeWeight: 2
			}
		});
		var displayedMap = $scope.mapObject.getGMap();
		var directionsService = new google.maps.DirectionsService();

		var request = {
			origin: new google.maps.LatLng(
				$scope.markers[0].coords.latitude,
				$scope.markers[0].coords.longitude
			),
			destination: new google.maps.LatLng(
				$scope.markers[1].coords.latitude,
				$scope.markers[1].coords.longitude
			),
			travelMode: google.maps.TravelMode['DRIVING'],
			optimizeWaypoints: true
		};

		directionsService.route(request, function (response, status) {
			directionsDisplay.setOptions({
				suppressMarkers: true
			});
			directionsDisplay.setMap(displayedMap);
			directionsDisplay.setDirections(response);
		});
	});*/

});