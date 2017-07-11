app.factory('InstructionService', function($rootScope) {
    var instructionService = {};

    function FetchInstructionItems(routeId) {
        return {
            load: [{
                    purchaseOrderCode: 'NYR3243T',
                    products: [{
                            productName: 'Insumos médicos',
                            planned: 37,
                            real: 65,
                            unit: 'Pallets'
                        },
                        {
                            productName: 'Lapiceras',
                            planned: 37,
                            real: 17,
                            unit: 'Pallets'
                        }
                    ]
                },
                {
                    purchaseOrderCode: 'TYG659PQ',
                    products: [{
                            productName: 'Monitores',
                            planned: 10,
                            real: 7,
                            unit: 'Pallets'
                        },
                        {
                            productName: 'Vasos de vidrio 15x19',
                            planned: 15,
                            real: 17,
                            unit: 'Pallets'
                        }
                    ]
                },
                {
                    purchaseOrderCode: 'NYR3243T',
                    products: [{
                            productName: 'Insumos médicos',
                            planned: 37,
                            real: 65,
                            unit: 'Pallets'
                        },
                        {
                            productName: 'Lapiceras',
                            planned: 37,
                            real: 17,
                            unit: 'Pallets'
                        }
                    ]
                },
                {
                    purchaseOrderCode: 'TYG659PQ',
                    products: [{
                            productName: 'Monitores',
                            planned: 10,
                            real: 7,
                            unit: 'Pallets'
                        },
                        {
                            productName: 'Vasos de vidrio 15x19',
                            planned: 15,
                            real: 17,
                            unit: 'Pallets'
                        }
                    ]
                }
            ],
            unload: [{
                    purchaseOrderCode: 'NYR3243T',
                    products: [{
                            productName: 'Insumos médicos',
                            planned: 37,
                            real: 65,
                            unit: 'Pallets'
                        },
                        {
                            productName: 'Lapiceras',
                            planned: 37,
                            real: 17,
                            unit: 'Pallets'
                        }
                    ]
                },
                {
                    purchaseOrderCode: 'TYG659PQ',
                    products: [{
                            productName: 'Monitores',
                            planned: 10,
                            real: 7,
                            unit: 'Pallets'
                        },
                        {
                            productName: 'Vasos de vidrio 15x19',
                            planned: 15,
                            real: 17,
                            unit: 'Pallets'
                        }
                    ]
                },
                {
                    purchaseOrderCode: 'NYR3243T',
                    products: [{
                            productName: 'Insumos médicos',
                            planned: 37,
                            real: 65,
                            unit: 'Pallets'
                        },
                        {
                            productName: 'Lapiceras',
                            planned: 37,
                            real: 17,
                            unit: 'Pallets'
                        }
                    ]
                },
                {
                    purchaseOrderCode: 'TYG659PQ',
                    products: [{
                            productName: 'Monitores',
                            planned: 10,
                            real: 7,
                            unit: 'Pallets'
                        },
                        {
                            productName: 'Vasos de vidrio 15x19',
                            planned: 15,
                            real: 17,
                            unit: 'Pallets'
                        }
                    ]
                }
            ]
        }
    }

    function FetchInstructionsByStop(stopId) {
        return {
            load: [{
                    purchaseOrderCode: 'NYR3243T',
                    products: [{
                            productName: 'Insumos médicos',
                            planned: 37,
                            real: 65,
                            unit: 'Pallets'
                        },
                        {
                            productName: 'Lapiceras',
                            planned: 37,
                            real: 17,
                            unit: 'Pallets'
                        }
                    ]
                },
                {
                    purchaseOrderCode: 'TYG659PQ',
                    products: [{
                            productName: 'Monitores',
                            planned: 10,
                            real: 7,
                            unit: 'Pallets'
                        },
                        {
                            productName: 'Vasos de vidrio 15x19',
                            planned: 15,
                            real: 17,
                            unit: 'Pallets'
                        }
                    ]
                },
                {
                    purchaseOrderCode: 'NYR3243T',
                    products: [{
                            productName: 'Insumos médicos',
                            planned: 37,
                            real: 65,
                            unit: 'Pallets'
                        },
                        {
                            productName: 'Lapiceras',
                            planned: 37,
                            real: 17,
                            unit: 'Pallets'
                        }
                    ]
                },
                {
                    purchaseOrderCode: 'TYG659PQ',
                    products: [{
                            productName: 'Monitores',
                            planned: 10,
                            real: 7,
                            unit: 'Pallets'
                        },
                        {
                            productName: 'Vasos de vidrio 15x19',
                            planned: 15,
                            real: 17,
                            unit: 'Pallets'
                        }
                    ]
                }
            ],
            unload: [{
                    purchaseOrderCode: 'NYR3243T',
                    products: [{
                            productName: 'Insumos médicos',
                            planned: 37,
                            real: 65,
                            unit: 'Pallets'
                        },
                        {
                            productName: 'Lapiceras',
                            planned: 37,
                            real: 17,
                            unit: 'Pallets'
                        }
                    ]
                },
                {
                    purchaseOrderCode: 'TYG659PQ',
                    products: [{
                            productName: 'Monitores',
                            planned: 10,
                            real: 7,
                            unit: 'Pallets'
                        },
                        {
                            productName: 'Vasos de vidrio 15x19',
                            planned: 15,
                            real: 17,
                            unit: 'Pallets'
                        }
                    ]
                },
                {
                    purchaseOrderCode: 'NYR3243T',
                    products: [{
                            productName: 'Insumos médicos',
                            planned: 37,
                            real: 65,
                            unit: 'Pallets'
                        },
                        {
                            productName: 'Lapiceras',
                            planned: 37,
                            real: 17,
                            unit: 'Pallets'
                        }
                    ]
                },
                {
                    purchaseOrderCode: 'TYG659PQ',
                    products: [{
                            productName: 'Monitores',
                            planned: 10,
                            real: 7,
                            unit: 'Pallets'
                        },
                        {
                            productName: 'Vasos de vidrio 15x19',
                            planned: 15,
                            real: 17,
                            unit: 'Pallets'
                        }
                    ]
                }
            ]
        }
    }

    function ParseOrdersToProducts(array) {
        var result = [];
        var products = _.flatten(_.pluck(array, 'products'));
        products.reduce(function(res, value) {
            if (!res[value.productName]) {
                res[value.productName] = {
                    planned: 0,
                    real: 0,
                    productName: value.productName,
                    unit: value.unit
                };
                result.push(res[value.productName])
            }
            res[value.productName].planned += value.planned;
            res[value.productName].real += value.real;
            return res;
        }, {});

        return result;
    }

    angular.extend(instructionService, {
        ParseOrdersToProducts: ParseOrdersToProducts,
        FetchInstructionItems: FetchInstructionItems,
        FetchInstructionsByStop: FetchInstructionsByStop
    })

    return instructionService;
});
