app.controller("RouteTrackingSideMenuController", function ($scope, $rootScope, $state, RouteTrackingService, PagerService, $stateParams) {

    var routeOptionsDetails = {
        instructionSelected: false,
        stopSelected: false,
        binnacleSelected: false,
        incidentsSelected: false
    };

    angular.extend($scope, {
        ShowInstructions: ShowInstructions,
        ShowIncidents: ShowIncidents,
        ShowBinnacle: ShowBinnacle,
        SelectRoute: SelectRoute,
        ShowStops: ShowStops,
        CloseRoute: CloseRoute,
        ClickRoute: ClickRoute,
        routeOptionsDetails: routeOptionsDetails,
        routes: [],
        pager: {},
        SetPage: SetPage,
        ResetRouteOptionsDetails: ResetRouteOptionsDetails,
        ClickToggleSideMenu: ClickToggleSideMenu
    });

    function ResetRouteOptionsDetails(except) {
        for (var property in routeOptionsDetails) {
            routeOptionsDetails[property] = false;
        }
        if (except)
            routeOptionsDetails[except] = true;
    }

    function ShowInstructions() {
        ResetRouteOptionsDetails('instructionSelected');
        $state.go('base.monitoring.routeTracking.list.details.instructions', {
            routeID: $scope.routeInfo.general.routeID
        });
    }

    function ShowIncidents() {
        ResetRouteOptionsDetails('incidentsSelected');
        $state.go('base.monitoring.routeTracking.list.details.incidents', {
            routeID: $scope.routeInfo.general.routeID
        });
    }

    function ShowBinnacle() {
        ResetRouteOptionsDetails('binnacleSelected');
        $state.go('base.monitoring.routeTracking.list.details.binnacle', {
            routeID: $scope.routeInfo.general.routeID
        });
    }

    function ShowStops() {
        ResetRouteOptionsDetails('stopSelected');
        $state.go('base.monitoring.routeTracking.list.details.stops', {
            routeID: $scope.routeInfo.general.routeID
        });
    }

    function SetPage(page) {
        if ($scope.FilteredActiveRoutes.length == 0)
            $scope.pagedRoutes = [];
        if ((page < 1 || page > $scope.pager.totalPages) || $scope.FilteredActiveRoutes.length == 0) {
            return;
        }
        if ($scope.FilteredActiveRoutes) {
            $scope.pager = PagerService.GetPager($scope.FilteredActiveRoutes.length, page, 5);
            $scope.pagedRoutes = $scope.FilteredActiveRoutes.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
        }
    }

    function SelectRoute(selectedRoute) {
        $scope.routeInfo = selectedRoute;
        if (!selectedRoute.selected) {
            $scope.moreInfo = true;
            $scope.FilteredActiveRoutes.forEach(function (route) {
                if (selectedRoute != route)
                    route.show = false;
            });
            SetPage(Math.floor($scope.FilteredActiveRoutes.indexOf(selectedRoute) / 5) + 1);
        }
    }

    function ClickRoute(selectedRoute) {
        $scope.SelectRouteByID(selectedRoute.general.routeID);
    }

    function CloseRoute() {
        InitVisibility();
        ResetRouteOptionsDetails();
        $scope.UnSelectCurrentRoute();
        $state.go('base.monitoring.routeTracking.list');
    }

    function InitVisibility() {
        $scope.FilteredActiveRoutes.forEach(function (route) {
            route.show = true;
            route.selected = false;
        });
        $scope.moreInfo = false;
    }

    function CheckIfOneOptionSelected() {
        for (var property in routeOptionsDetails) {
            if (routeOptionsDetails[property])
                return true;
        }
        return false;
    }

    function ClickToggleSideMenu(){
        $scope.ToggleSideMenu();
    }

    $scope.$watch('SelectedRoute', function (newVal, oldVal) {
        if (newVal) {
            InitVisibility();
            SelectRoute(newVal);
            if(!CheckIfOneOptionSelected())
                ShowStops();
        }
    });

    $scope.$watch('FilteredActiveRoutes', function (newVal, oldVal) {
        SetPage(1);
    });

    (function init() {
        InitVisibility();
        SetPage(1);
    })();
});