app.factory('RouteTrackingService', function ($rootScope, $q) {
    var routeTrackingService = {};

    var activeRoutesPromise = null;

    angular.extend(routeTrackingService, {
        GetActiveRoutes: GetActiveRoutes
    });

    /*function GetActiveRoutes() {
        if (dataPromise == null)
            dataPromise = $http.get("data.json").then(function (res) {
                return res.data;
            });
        return dataPromise;
    }*/

    function GetActiveRoutes() {
        //"Mockeo" para simular el http, reemplazar por el de arriba cuando funcione el endpoint
        //if (activeRoutesPromise == null) {
        var deferred = $q.defer();

        setTimeout(function () {
            deferred.resolve(GetMockedActiveRoutes());
        }, 1000);
        activeRoutesPromise = deferred.promise;
        //}
        return activeRoutesPromise;
    }

    function GetMockedActiveRoutes() {
        return [{
                general: {
                    routeID: "1",
                    routeName: "TXR756",
                    companyName: "Carrefour",
                    groupName: "Puerto Santiago",
                    operationName: "02/02/17 OLA10",
                    percentageCompleted: 37,
                    type: 5,
                    driver: {
                        name: "Juan Perez",
                        phone: "4888-8888",
                        status: {
                            id: 1,
                            text: "Connected"
                        },
                        lastConnection: "02/12/17 11:40",
                        coords: {
                            "latitude": "40.7903",
                            "longitude": "-73.9597"
                        }
                    }
                },
                progress: {
                    route: "50",
                    load: "-30",
                    time: "77"
                },
                stops: [{
                        stopId: 1,
                        stopType: "Deposito",
                        stopName: "Puerto Santiago",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0),
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
                        stopType: "Tienda",
                        stopName: "Carrefour",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 11, 11, 30, 0, 0)
                    },
                    {
                        stopId: 3,
                        stopType: "Deposito",
                        stopName: "Pepito",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
                    },
                    {
                        stopId: 4,
                        stopType: "Tienda",
                        stopName: "Fulanito",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
                    },
                    {
                        stopId: 5,
                        stopType: "Deposito",
                        stopName: "Higuain",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
                    }
                ]
            },
            {
                general: {
                    routeID: "2",
                    routeName: "TXR756",
                    companyName: "Carrefour",
                    groupName: "Puerto Santiago",
                    operationName: "02/02/17 OLA10",
                    percentageCompleted: 63,
                    type: 2,
                    driver: {
                        name: "Juan Perez",
                        phone: "4888-8888",
                        status: {
                            id: 1,
                            text: "Connected"
                        },
                        lastConnection: "02/12/17 11:40",
                        coords: {
                            "latitude": "45.5200",
                            "longitude": "-122.6819"
                        }
                    }
                },
                progress: {
                    route: "50",
                    load: "-30",
                    time: "77"
                },
                stops: [{
                        stopId: 1,
                        stopType: "Deposito",
                        stopName: "Puerto Santiago",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0),
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
                        stopType: "Tienda",
                        stopName: "Carrefour",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 11, 11, 30, 0, 0)
                    },
                    {
                        stopId: 3,
                        stopType: "Deposito",
                        stopName: "Pepito",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
                    },
                    {
                        stopId: 4,
                        stopType: "Tienda",
                        stopName: "Fulanito",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
                    },
                    {
                        stopId: 5,
                        stopType: "Deposito",
                        stopName: "Higuain",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
                    }
                ]
            },
            {
                general: {
                    routeID: "3",
                    routeName: "TXR756",
                    companyName: "Carrefour",
                    groupName: "Puerto Santiago",
                    operationName: "02/02/17 OLA10",
                    percentageCompleted: 71,
                    type: 3,
                    driver: {
                        name: "Juan Perez",
                        phone: "4888-8888",
                        status: {
                            id: 1,
                            text: "Connected"
                        },
                        lastConnection: "02/12/17 11:40",
                        coords: {
                            "latitude": "46.5919337",
                            "longitude": "-114.5336119"
                        }
                    }
                },
                progress: {
                    route: "50",
                    load: "-30",
                    time: "77"
                },
                stops: [{
                        stopId: 1,
                        stopType: "Deposito",
                        stopName: "Puerto Santiago",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0),
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
                        stopType: "Tienda",
                        stopName: "Carrefour",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 11, 11, 30, 0, 0)
                    },
                    {
                        stopId: 3,
                        stopType: "Deposito",
                        stopName: "Pepito",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
                    },
                    {
                        stopId: 4,
                        stopType: "Tienda",
                        stopName: "Fulanito",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
                    },
                    {
                        stopId: 5,
                        stopType: "Deposito",
                        stopName: "Higuain",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
                    }
                ]
            },
            {
                general: {
                    routeID: "4",
                    routeName: "TXR756",
                    companyName: "Carrefour",
                    groupName: "Puerto Santiago",
                    operationName: "02/02/17 OLA10",
                    percentageCompleted: 22,
                    type: 4,
                    driver: {
                        name: "Juan Perez",
                        phone: "4888-8888",
                        status: {
                            id: 1,
                            text: "Connected"
                        },
                        lastConnection: "02/12/17 11:40",
                        coords: {
                            "latitude": "38.0793111",
                            "longitude": "-102.9521627"
                        }
                    }
                },
                progress: {
                    route: "50",
                    load: "-30",
                    time: "77"
                },
                stops: [{
                        stopId: 1,
                        stopType: "Deposito",
                        stopName: "Puerto Santiago",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0),
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
                        stopType: "Tienda",
                        stopName: "Carrefour",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 11, 11, 30, 0, 0)
                    },
                    {
                        stopId: 3,
                        stopType: "Deposito",
                        stopName: "Pepito",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
                    },
                    {
                        stopId: 4,
                        stopType: "Tienda",
                        stopName: "Fulanito",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
                    },
                    {
                        stopId: 5,
                        stopType: "Deposito",
                        stopName: "Higuain",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
                    }
                ]
            },
            {
                general: {
                    routeID: "5",
                    routeName: "TXR756",
                    companyName: "Carrefour",
                    groupName: "Puerto Santiago",
                    operationName: "02/02/17 OLA10",
                    percentageCompleted: 80,
                    type: 1,
                    driver: {
                        name: "Juan Perez",
                        phone: "4888-8888",
                        status: {
                            id: 1,
                            text: "Connected"
                        },
                        lastConnection: "02/12/17 11:40",
                        coords: {
                            "latitude": "39.0764574",
                            "longitude": "-104.7023348"
                        }
                    }
                },
                progress: {
                    route: "50",
                    load: "-30",
                    time: "77"
                },
                stops: [{
                        stopId: 1,
                        stopType: "Deposito",
                        stopName: "Puerto Santiago",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0),
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
                        stopType: "Tienda",
                        stopName: "Carrefour",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 11, 11, 30, 0, 0)
                    },
                    {
                        stopId: 3,
                        stopType: "Deposito",
                        stopName: "Pepito",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
                    },
                    {
                        stopId: 4,
                        stopType: "Tienda",
                        stopName: "Fulanito",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
                    },
                    {
                        stopId: 5,
                        stopType: "Deposito",
                        stopName: "Higuain",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
                    }
                ]
            },
            {
                general: {
                    routeID: "6",
                    routeName: "TXR756",
                    companyName: "Carrefour",
                    groupName: "Puerto Santiago",
                    operationName: "02/02/17 OLA10",
                    percentageCompleted: 37,
                    type: 5,
                    driver: {
                        name: "Juan Perez",
                        phone: "4888-8888",
                        status: {
                            id: 1,
                            text: "Connected"
                        },
                        lastConnection: "02/12/17 11:40",
                        coords: {
                            "latitude": "48.7903",
                            "longitude": "-73.9597"
                        }
                    }
                },
                progress: {
                    route: "50",
                    load: "-30",
                    time: "77"
                },
                stops: [{
                        stopId: 1,
                        stopType: "Deposito",
                        stopName: "Puerto Santiago",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0),
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
                        stopType: "Tienda",
                        stopName: "Carrefour",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 11, 11, 30, 0, 0)
                    },
                    {
                        stopId: 3,
                        stopType: "Deposito",
                        stopName: "Pepito",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
                    },
                    {
                        stopId: 4,
                        stopType: "Tienda",
                        stopName: "Fulanito",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
                    },
                    {
                        stopId: 5,
                        stopType: "Deposito",
                        stopName: "Higuain",
                        stopLocation: "San Martin 345 - Santiago de Chile - Chile",
                        arrivalTimePlanned: new Date(2017, 3, 11, 14, 30, 0, 0),
                        arrivalTimeReal: new Date(2017, 3, 12, 14, 30, 0, 0)
                    }
                ]
            }
        ];
    }

    return routeTrackingService;
});