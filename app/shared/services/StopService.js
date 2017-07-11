app.factory('StopService', function ($q) {
    var stopService = {};

    function GetStopsForGenericSelector() {
        var deferred = $q.defer();

        setTimeout(function () {
            deferred.resolve(GetMockedStopsForSelector());
        }, 2000);

        return deferred.promise;
    }

    function GetMockedStopsForSelector() {
        return [{
                stopId: 1,
                stopType: "Deposito",
                stopName: "Puerto Santiago",
                stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0),
                sequence: 1
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

    function FetchStopItems(routeId) {
        return [{
                stopId: 1,
                stopType: "Deposito",
                stopName: "Puerto Santiago",
                stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0),
                sequence: 1,
                instructions: {
                    load: [{
                            purchaseOrderCode: 'NYR3243T',
                            products: [{
                                    productName: 'Insumos médicos',
                                    planned: '37',
                                    real: '65',
                                    unit: 'Pallets'
                                },
                                {
                                    productName: 'Lapiceras',
                                    planned: '37',
                                    real: '17',
                                    unit: 'Pallets'
                                }
                            ]
                        },
                        {
                            purchaseOrderCode: 'TYG659PQ',
                            products: [{
                                    productName: 'Monitores',
                                    planned: '10',
                                    real: '7',
                                    unit: 'Pallets'
                                },
                                {
                                    productName: 'Vasos de vidrio 15x19',
                                    planned: '15',
                                    real: '17',
                                    unit: 'Pallets'
                                }
                            ]
                        },
                        {
                            purchaseOrderCode: 'NYR3243T',
                            products: [{
                                    productName: 'Insumos médicos',
                                    planned: '37',
                                    real: '65',
                                    unit: 'Pallets'
                                },
                                {
                                    productName: 'Lapiceras',
                                    planned: '37',
                                    real: '17',
                                    unit: 'Pallets'
                                }
                            ]
                        },
                        {
                            purchaseOrderCode: 'TYG659PQ',
                            products: [{
                                    productName: 'Monitores',
                                    planned: '10',
                                    real: '7',
                                    unit: 'Pallets'
                                },
                                {
                                    productName: 'Vasos de vidrio 15x19',
                                    planned: '15',
                                    real: '17',
                                    unit: 'Pallets'
                                }
                            ]
                        }
                    ],
                    unload: [{
                            purchaseOrderCode: 'NYR3243T',
                            products: [{
                                    productName: 'Insumos médicos',
                                    planned: '37',
                                    real: '65',
                                    unit: 'Pallets'
                                },
                                {
                                    productName: 'Lapiceras',
                                    planned: '37',
                                    real: '17',
                                    unit: 'Pallets'
                                }
                            ]
                        },
                        {
                            purchaseOrderCode: 'TYG659PQ',
                            products: [{
                                    productName: 'Monitores',
                                    planned: '10',
                                    real: '7',
                                    unit: 'Pallets'
                                },
                                {
                                    productName: 'Vasos de vidrio 15x19',
                                    planned: '15',
                                    real: '17',
                                    unit: 'Pallets'
                                }
                            ]
                        },
                        {
                            purchaseOrderCode: 'NYR3243T',
                            products: [{
                                    productName: 'Insumos médicos',
                                    planned: '37',
                                    real: '65',
                                    unit: 'Pallets'
                                },
                                {
                                    productName: 'Lapiceras',
                                    planned: '37',
                                    real: '17',
                                    unit: 'Pallets'
                                }
                            ]
                        },
                        {
                            purchaseOrderCode: 'TYG659PQ',
                            products: [{
                                    productName: 'Monitores',
                                    planned: '10',
                                    real: '7',
                                    unit: 'Pallets'
                                },
                                {
                                    productName: 'Vasos de vidrio 15x19',
                                    planned: '15',
                                    real: '17',
                                    unit: 'Pallets'
                                }
                            ]
                        }
                    ]
                },
                details: {
                    instructions: {
                        load: {
                            planned: {
                                units: 100,
                                pallets: 2,
                                weight: 3600,
                                unit: "kg"
                            },
                            real: {
                                units: 60,
                                pallets: 1,
                                weight: 1600,
                                unit: "kg"
                            }
                        },
                        deload: {
                            planned: {
                                units: 100,
                                pallets: 2,
                                weight: 3600,
                                unit: "kg"
                            },
                            real: {
                                units: 60,
                                pallets: 1,
                                weight: 4600,
                                unit: "kg"
                            }
                        },
                    },
                    stops: {
                        totalTime: {
                            planned: "4hs. 32m.",
                            real: "3hs. 20m."
                        },
                        waitTime: {
                            planned: "4hs. 32m.",
                            real: "3hs. 20m."
                        },
                        operativeTime: {
                            planned: "4hs. 32m.",
                            real: "3hs. 20m."
                        }
                    }
                }
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
        GetStopsForGenericSelector: GetStopsForGenericSelector
    })

    return stopService;
});