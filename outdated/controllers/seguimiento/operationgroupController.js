app.controller("operationGroupsCtrl", function($scope, $rootScope, $state, operationGroups) {

    var vm = this;
    vm.HeaderData = {
      title: operationGroups.title,
      state: operationGroups.state,
      description: operationGroups.description,
      progress: operationGroups.progress.value.toFixed(1)
    };

    vm.Status = [{
            Id: 1,
            Title: "Normal",
            Checked: true
        },
        {
            Id: 2,
            Title: "Pendiente",
            Checked: true
        },
        {
            Id: 3,
            Title: "Demorado",
            Checked: true
        },
        {
            Id: 4,
            Title: "Finalizado",
            Checked: true
        },
    ];

    vm.indicatorTitles = [];
    vm.timeIndicatorTitles = [];

    vm.operaciones = operationGroups.operations;

    vm.operaciones[0].loadIndicators.forEach(function(value, i) {
        vm.indicatorTitles.push({
            Title: value.Title,
            Checked: true
        });
    });

    vm.timeIndicatorTitles = [
      {
        Title: "Transito",
        Checked: true,
        isComposed:true
      },
      {
        Title: "Cargado",
        Checked: true,
        isComposed:false
      },
      {
        Title: "Vacio",
        Checked: true,
        isComposed:false
      },
      {
        Title: "Parada",
        Checked: true,
        isComposed:true
      },
      {
        Title: "Operativo",
        Checked: true,
        isComposed:false
      },
      {
        Title: "Maniobra",
        Checked: true,
        isComposed:false
      }
    ];

    vm.logMessages = [
      {
        Title: "Prueba 1",
        Body: "Lorem ipsum dolor sit amet, consectetuer adipiscing",
        "Date": new Date(2017,0,24,11,33,30,0)
      },
      {
        Title: "Prueba 3",
        Body: "Lorem ipsum dolor sit amet, consectetuer adipiscing",
        "Date": new Date(2017,0,24,12,02,30,0)
      },
      {
        Title: "Prueba 2",
        Body: "Lorem ipsum dolor sit amet, consectetuer adipiscing",
        "Date": new Date(2017,0,17,18,02,30,0)
      },
      {
        Title: "Prueba 4",
        Body: "Lorem ipsum dolor sit amet, consectetuer adipiscing",
        "Date": new Date(2017,0,27,12,20,30,0)
      }
    ];


    /*[{
            progressStops: {
                value: 50,
                maxCompleted: "100",
                minCompleted: "17"
            },
            progressTime: {
                expectedDuration: 849, //minutes
                elapsedDuration: 500
            },
            operationTitle: "San Pedrito",
            date: "12/01/18",
            total: "6",
            completed: "2",
            state: vm.Status[0],
            distance:
            {
                Title: "Distancia",
                Total: 10000,
                Completed: 9000,
                Max: 80,
                Min: 50,
                Avg: 75
            },
            indicators: [{
                    Title: "Peso",
                    Total: 1500,
                    Completed: 500,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Volumen",
                    Total: 3800,
                    Completed: 1710,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Unidades",
                    Total: 1000,
                    Completed: 250,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Bultos",
                    Total: 1234,
                    Completed: 899,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Soporte",
                    Total: 456,
                    Completed: 123,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                }
            ],
            timeIndicators: [{
                    Title: "Transito",
                    Total: 1500,
                    Completed: 2000
                },
                {
                    Title: "Cargado",
                    Total: 3800,
                    Completed: 1710
                },
                {
                    Title: "Vacio",
                    Total: 10000,
                    Completed: 15580
                },
                {
                    Title: "Parada",
                    Total: 1000,
                    Completed: 1103
                },
                {
                    Title: "Operativo",
                    Total: 1234,
                    Completed: 899
                },
                {
                    Title: "Maniobra",
                    Total: 456,
                    Completed: 123
                }
            ]
        },
        {
            progressStops: {
                value: 20,
                maxCompleted: "100",
                minCompleted: "32"
            },
            progressTime: {
                expectedDuration: 849, //minutes
                elapsedDuration: 500
            },
            operationTitle: "Isidro Casanova",
            date: "12/01/17",
            total: "10",
            completed: "7",
            state: vm.Status[0],
            distance:
            {
                Title: "Distancia",
                Total: 10000,
                Completed: 100,
                Max: 80,
                Min: 50,
                Avg: 75
            },
            indicators: [{
                    Title: "Peso",
                    Total: 1500,
                    Completed: 100,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Volumen",
                    Total: 3800,
                    Completed: 200,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Unidades",
                    Total: 1000,
                    Completed: 250,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Bultos",
                    Total: 1234,
                    Completed: 899,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Soporte",
                    Total: 456,
                    Completed: 123,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                  }
              ],
              timeIndicators: [{
                      Title: "Transito",
                      Total: 1500,
                      Completed: 500
                  },
                  {
                      Title: "Cargado",
                      Total: 3800,
                      Completed: 1710
                  },
                  {
                      Title: "Vacio",
                      Total: 10000,
                      Completed: 9000
                  },
                  {
                      Title: "Parada",
                      Total: 1000,
                      Completed: 250
                  },
                  {
                      Title: "Operativo",
                      Total: 1234,
                      Completed: 899
                  },
                  {
                      Title: "Maniobra",
                      Total: 456,
                      Completed: 123
                  }
              ]
        },
        {
            progressStops: {
                value: 89,
                maxCompleted: "56",
                minCompleted: "27"
            },
            progressTime: {
                expectedDuration: 849, //minutes
                elapsedDuration: 500
            },
            operationTitle: "Caballito",
            date: "04/11/17",
            total: "3",
            completed: "1",
            state: vm.Status[2],
            distance:
            {
                Title: "Distancia",
                Total: 10000,
                Completed: 100,
                Max: 80,
                Min: 50,
                Avg: 75
            },
            indicators: [{
                    Title: "Peso",
                    Total: 1500,
                    Completed: 100,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Volumen",
                    Total: 3800,
                    Completed: 200,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Unidades",
                    Total: 1000,
                    Completed: 250,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Bultos",
                    Total: 1234,
                    Completed: 899,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Soporte",
                    Total: 456,
                    Completed: 123,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                }
            ],
            timeIndicators: [{
                    Title: "Transito",
                    Total: 1500,
                    Completed: 500
                },
                {
                    Title: "Cargado",
                    Total: 3800,
                    Completed: 1710
                },
                {
                    Title: "Vacio",
                    Total: 10000,
                    Completed: 9000
                },
                {
                    Title: "Parada",
                    Total: 1000,
                    Completed: 250
                },
                {
                    Title: "Operativo",
                    Total: 1234,
                    Completed: 899
                },
                {
                    Title: "Maniobra",
                    Total: 456,
                    Completed: 123
                }
            ]
        },
        {
            progressStops: {
                value: 97,
                maxCompleted: "100",
                minCompleted: "95"
            },
            progressTime: {
                expectedDuration: 849, //minutes
                elapsedDuration: 500
            },
            operationTitle: "Tortuguitas",
            date: "04/10/12",
            total: "59",
            completed: "20",
            state: vm.Status[3],
            distance:
            {
                Title: "Distancia",
                Total: 10000,
                Completed: 100,
                Max: 80,
                Min: 50,
                Avg: 75
            },
            indicators: [{
                    Title: "Peso",
                    Total: 1500,
                    Completed: 100,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Volumen",
                    Total: 3800,
                    Completed: 200,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Unidades",
                    Total: 1000,
                    Completed: 250,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Bultos",
                    Total: 1234,
                    Completed: 899,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Soporte",
                    Total: 456,
                    Completed: 123,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                }
            ],
            timeIndicators: [{
                    Title: "Transito",
                    Total: 1500,
                    Completed: 500
                },
                {
                    Title: "Cargado",
                    Total: 3800,
                    Completed: 1710
                },
                {
                    Title: "Vacio",
                    Total: 10000,
                    Completed: 9000
                },
                {
                    Title: "Parada",
                    Total: 1000,
                    Completed: 250
                },
                {
                    Title: "Operativo",
                    Total: 1234,
                    Completed: 899
                },
                {
                    Title: "Maniobra",
                    Total: 456,
                    Completed: 123
                }
            ]
        },
        {
            progressStops: {
                value: 20,
                maxCompleted: "100",
                minCompleted: "32"
            },
            progressTime: {
                expectedDuration: 849, //minutes
                elapsedDuration: 500
            },
            operationTitle: "Isidro Casanova",
            date: "12/01/17",
            total: "10",
            completed: "7",
            state: vm.Status[0],
            distance:
            {
                Title: "Distancia",
                Total: 10000,
                Completed: 100,
                Max: 80,
                Min: 50,
                Avg: 75
            },
            indicators: [{
                    Title: "Peso",
                    Total: 1500,
                    Completed: 100,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Volumen",
                    Total: 3800,
                    Completed: 200,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Unidades",
                    Total: 1000,
                    Completed: 250,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Bultos",
                    Total: 1234,
                    Completed: 899,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Soporte",
                    Total: 456,
                    Completed: 123,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                }
            ],
            timeIndicators: [{
                    Title: "Transito",
                    Total: 1500,
                    Completed: 500
                },
                {
                    Title: "Cargado",
                    Total: 3800,
                    Completed: 1710
                },
                {
                    Title: "Vacio",
                    Total: 10000,
                    Completed: 9000
                },
                {
                    Title: "Parada",
                    Total: 1000,
                    Completed: 250
                },
                {
                    Title: "Operativo",
                    Total: 1234,
                    Completed: 899
                },
                {
                    Title: "Maniobra",
                    Total: 456,
                    Completed: 123
                }
            ]
        },
        {
            progressStops: {
                value: 20,
                maxCompleted: "100",
                minCompleted: "32"
            },
            progressTime: {
                expectedDuration: 849, //minutes
                elapsedDuration: 500
            },
            operationTitle: "Isidro Casanova",
            date: "12/01/17",
            total: "10",
            completed: "7",
            state: vm.Status[0],
            distance:
            {
                Title: "Distancia",
                Total: 10000,
                Completed: 100,
                Max: 80,
                Min: 50,
                Avg: 75
            },
            indicators: [{
                    Title: "Peso",
                    Total: 1500,
                    Completed: 100,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Volumen",
                    Total: 3800,
                    Completed: 200,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Unidades",
                    Total: 1000,
                    Completed: 250,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Bultos",
                    Total: 1234,
                    Completed: 899,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Soporte",
                    Total: 456,
                    Completed: 123,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                }
            ],
            timeIndicators: [{
                    Title: "Transito",
                    Total: 1500,
                    Completed: 500
                },
                {
                    Title: "Cargado",
                    Total: 3800,
                    Completed: 1710
                },
                {
                    Title: "Vacio",
                    Total: 10000,
                    Completed: 9000
                },
                {
                    Title: "Parada",
                    Total: 1000,
                    Completed: 250
                },
                {
                    Title: "Operativo",
                    Total: 1234,
                    Completed: 899
                },
                {
                    Title: "Maniobra",
                    Total: 456,
                    Completed: 123
                }
            ]
        },
        {
            progressStops: {
                value: 20,
                maxCompleted: "100",
                minCompleted: "32"
            },
            progressTime: {
                expectedDuration: 849, //minutes
                elapsedDuration: 500
            },
            operationTitle: "Isidro Casanova",
            date: "12/01/17",
            total: "10",
            completed: "7",
            state: vm.Status[0],
            distance:
            {
                Title: "Distancia",
                Total: 10000,
                Completed: 100,
                Max: 80,
                Min: 50,
                Avg: 75
            },
            indicators: [{
                    Title: "Peso",
                    Total: 1500,
                    Completed: 100,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Volumen",
                    Total: 3800,
                    Completed: 200,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Unidades",
                    Total: 1000,
                    Completed: 250,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Bultos",
                    Total: 1234,
                    Completed: 899,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Soporte",
                    Total: 456,
                    Completed: 123,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                }
            ],
            timeIndicators: [{
                    Title: "Transito",
                    Total: 1500,
                    Completed: 500
                },
                {
                    Title: "Cargado",
                    Total: 3800,
                    Completed: 1710
                },
                {
                    Title: "Vacio",
                    Total: 10000,
                    Completed: 9000
                },
                {
                    Title: "Parada",
                    Total: 1000,
                    Completed: 250
                },
                {
                    Title: "Operativo",
                    Total: 1234,
                    Completed: 899
                },
                {
                    Title: "Maniobra",
                    Total: 456,
                    Completed: 123
                }
            ]
        },
        {
            progressStops: {
                value: 20,
                maxCompleted: "100",
                minCompleted: "32"
            },
            progressTime: {
                expectedDuration: 849, //minutes
                elapsedDuration: 500
            },
            operationTitle: "Isidro Casanova",
            date: "12/01/17",
            total: "10",
            completed: "7",
            state: vm.Status[0],
            distance:
            {
                Title: "Distancia",
                Total: 10000,
                Completed: 100,
                Max: 80,
                Min: 50,
                Avg: 75
            },
            indicators: [{
                    Title: "Peso",
                    Total: 1500,
                    Completed: 100,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Volumen",
                    Total: 3800,
                    Completed: 200,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Unidades",
                    Total: 1000,
                    Completed: 250,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Bultos",
                    Total: 1234,
                    Completed: 899,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                },
                {
                    Title: "Soporte",
                    Total: 456,
                    Completed: 123,
                    Max: 80,
                    Min: 50,
                    Avg: 75
                }
            ],
            timeIndicators: [{
                    Title: "Transito",
                    Total: 1500,
                    Completed: 500
                },
                {
                    Title: "Cargado",
                    Total: 3800,
                    Completed: 1710
                },
                {
                    Title: "Vacio",
                    Total: 10000,
                    Completed: 9000
                },
                {
                    Title: "Parada",
                    Total: 1000,
                    Completed: 250
                },
                {
                    Title: "Operativo",
                    Total: 1234,
                    Completed: 899
                },
                {
                    Title: "Maniobra",
                    Total: 456,
                    Completed: 123
                }
            ]
        }
    ];*/

});
