app.controller("RouteTrackingController", function ($scope, ActiveRoutes, GroupService, RouteService, CarrierService) {
    var filterCriteria = [];
    
	var selectorOptions = {
		isMultiSelect: true
	}

    angular.extend($scope, {
        FilteredActiveRoutes: [],
        RegisterFilterCriteria: RegisterFilterCriteria,
        FilterRoutes: FilterRoutes,
        SelectedRoute: null,
        SelectRouteByID: SelectRouteByID,
        UnSelectCurrentRoute: UnSelectCurrentRoute,
        toggleSideMenu: false,
        ToggleSideMenu: ToggleSideMenu,
        selectorOptions: selectorOptions,
		GroupSelectorGetMethod : GroupService.GetGroupsForGenericSelector,
		RouteSelectorGetMethod: RouteService.GetRoutesForGenericSelector,
		CarrierSelectorGetMethod : CarrierService.GetCarriersForGenericSelector
    });

    function RegisterFilterCriteria(criteriaFn) {
        filterCriteria.push(criteriaFn);
    }

    function FilterRoute(route) {
        return filterCriteria.reduce(function (criteriaValue, criteriaFn) {
            if (!criteriaValue)
                return criteriaValue;
            else
                return criteriaFn(route);
        }, true);
    }

    function FilterRoutes() {
        $scope.FilteredActiveRoutes = ActiveRoutes.reduce(function (filteredRoutes, route) {
            if (FilterRoute(route))
                filteredRoutes.push(route);
            return filteredRoutes;
        }, []);
    }

    function SelectRouteByID(routeID) {
        $scope.SelectedRoute = _.find($scope.FilteredActiveRoutes, function (o) {
            return o.general.routeID == routeID;
        });
    }

    function ToggleSideMenu(){
        $scope.toggleSideMenu = !$scope.toggleSideMenu;
    }

    function UnSelectCurrentRoute() {
        $scope.SelectedRoute = null;
    }

    (function init() {
        FilterRoutes();
    })();
});