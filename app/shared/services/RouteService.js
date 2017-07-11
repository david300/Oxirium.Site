app.factory('RouteService', RouteService);

function RouteService($q) {

    var routeService = {};

    function GetRoutesForGenericSelector() {
        var deferred = $q.defer();

        setTimeout(function () {
            deferred.resolve(GetMockedRoutesForGenericSelector());
        }, 2000);

        return deferred.promise;
    }

    function GetMockedRoutesForGenericSelector() {
        return [{
                routeID: "1",
                routeName: "TXR756",
                companyName: "Carrefour",
                groupName: "Puerto Santiago",
                operationName: "02/02/17 OLA10",
            },
            {
                routeID: "2",
                routeName: "TXR756",
                companyName: "Carrefour",
                groupName: "Puerto Santiago",
                operationName: "02/02/17 OLA10",
            },
            {
                routeID: "3",
                routeName: "TXR756",
                companyName: "Carrefour",
                groupName: "Puerto Santiago",
                operationName: "02/02/17 OLA10",
            },
            {
                routeID: "4",
                routeName: "TXR756",
                companyName: "Carrefour",
                groupName: "Puerto Santiago",
                operationName: "02/02/17 OLA10",
            },
            {
                routeID: "5",
                routeName: "TXR756",
                companyName: "Carrefour",
                groupName: "Puerto Santiago",
                operationName: "02/02/17 OLA10",
            },
            {
                routeID: "6",
                routeName: "TXR756",
                companyName: "Carrefour",
                groupName: "Puerto Santiago",
                operationName: "02/02/17 OLA10",
            }
        ];
    }

    angular.extend(routeService, {
        GetRoutesForGenericSelector: GetRoutesForGenericSelector
    });

    return routeService;

}