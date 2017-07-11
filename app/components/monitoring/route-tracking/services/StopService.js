app.factory('StopService', function() {
    var stopService = {};

    function GetStopDetailById(stopId) {

    }

    function FetchStopItems(routeId) {
        return [{
                stopId: 1,
                stopType: "Deposito",
                stopName: "Puerto Santiago",
                stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0),
                sequence: 1,
            },
            {
                stopId: 2,
                sequence: 3,
                stopType: "Tienda",
                stopName: "Carrefour",
                stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                arrivalTimeReal: new Date(2017, 3, 11, 11, 30, 0, 0)
            },
            {
                stopId: 3,
                sequence: 2,
                stopType: "Deposito",
                stopName: "Pepito",
                stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
            },
            {
                stopId: 4,
                sequence: 4,
                stopType: "Tienda",
                stopName: "Fulanito",
                stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
            },
            {
                stopId: 5,
                sequence: null,
                stopType: "Deposito",
                stopName: "Higuain",
                stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
            }
        ];
    }

    angular.extend(stopService, {
        FetchStopItems: FetchStopItems,
        GetStopDetailById: GetStopDetailById
    })

    return stopService;
});