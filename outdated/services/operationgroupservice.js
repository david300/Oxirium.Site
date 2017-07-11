app.service('OperationGroupService', function() {
  var operationGroups = [];

  operationGroups =
  [
    {
      id: 1,
      title: "Quilicura - 6011",
      description: "Descripcion normal prueba routeo.",
      state:  {
        Id: 1,
        Title: "Normal",
        Checked: true
      },
      startDate: "12/01/17",
      endDate: "12/01/17",
      progress: {
        childCompleted: 3,
        childTotal: 9,
        value: 3 * 100 / 9,
        childMaxValueCompleted: 65,
        childMinValueCompleted: 13,
      },
      distancePercentage: 19,
      loadPercentage: -84,
      timePercentage: 72,
      distanceIndicators:
      {
          Title: "Distancia",
          Total: 10000,
          Completed: 9000
      },
      loadIndicators: [{
              Title: "Peso",
              Total: 1500,
              Completed: 500
          },
          {
              Title: "Volumen",
              Total: 3800,
              Completed: 1710
          },
          {
              Title: "Unidades",
              Total: 1000,
              Completed: 250
          },
          {
              Title: "Bultos",
              Total: 1234,
              Completed: 899
          },
          {
              Title: "Soporte",
              Total: 456,
              Completed: 123
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
      ],
      operations: [
        {
          id: 1,
          title: "OLA 10",
          description: "Descripcion normal prueba routeo.",
          state:  {
            Id: 1,
            Title: "Normal",
            Checked: true
          },
          startDate: "12/01/17",
          endDate: "12/01/17",
          progress: {
            childCompleted: 3,
            childTotal: 9,
            value: 3 * 100 / 9,
            childMaxValueCompleted: 65,
            childMinValueCompleted: 13,
          },
          distancePercentage: 19,
          loadPercentage: -84,
          timePercentage: 72,
          distanceIndicators:
          {
              Title: "Distancia",
              Total: 10000,
              Completed: 9000
          },
          loadIndicators: [{
                  Title: "Peso",
                  Total: 1500,
                  Completed: 500
              },
              {
                  Title: "Volumen",
                  Total: 3800,
                  Completed: 1710
              },
              {
                  Title: "Unidades",
                  Total: 1000,
                  Completed: 250
              },
              {
                  Title: "Bultos",
                  Total: 1234,
                  Completed: 899
              },
              {
                  Title: "Soporte",
                  Total: 456,
                  Completed: 123
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
          ],
          routes: [
            {
              id: 1,
              title: "QT2H - 253",
              description: "Descripcion normal prueba routeo.",
              state:  {
                Id: 1,
                Title: "Normal",
                Checked: true
              },
              startDate: "12/01/17",
              endDate: "12/01/17",
              progress: {
                childCompleted: 3,
                childTotal: 9,
                value: 3 * 100 / 9,
                childMaxValueCompleted: 65,
                childMinValueCompleted: 13,
              },
              distancePercentage: 19,
              loadPercentage: -84,
              timePercentage: 72,
              distanceIndicators:
              {
                  Title: "Distancia",
                  Total: 10000,
                  Completed: 9000
              },
              loadIndicators: [{
                      Title: "Peso",
                      Total: 1500,
                      Completed: 500
                  },
                  {
                      Title: "Volumen",
                      Total: 3800,
                      Completed: 1710
                  },
                  {
                      Title: "Unidades",
                      Total: 1000,
                      Completed: 250
                  },
                  {
                      Title: "Bultos",
                      Total: 1234,
                      Completed: 899
                  },
                  {
                      Title: "Soporte",
                      Total: 456,
                      Completed: 123
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
              id: 2,
              title: "TTHQ - 666",
              description: "Descripcion normal prueba routeo.",
              state:  {
                Id: 1,
                Title: "Normal",
                Checked: true
              },
              startDate: "12/01/17",
              endDate: "12/01/17",
              progress: {
                childCompleted: 3,
                childTotal: 9,
                value: 3 * 100 / 9,
                childMaxValueCompleted: 65,
                childMinValueCompleted: 13,
              },
              distancePercentage: 19,
              loadPercentage: -84,
              timePercentage: 72,
              distanceIndicators:
              {
                  Title: "Distancia",
                  Total: 10000,
                  Completed: 9000
              },
              loadIndicators: [{
                      Title: "Peso",
                      Total: 1500,
                      Completed: 500
                  },
                  {
                      Title: "Volumen",
                      Total: 3800,
                      Completed: 1710
                  },
                  {
                      Title: "Unidades",
                      Total: 1000,
                      Completed: 250
                  },
                  {
                      Title: "Bultos",
                      Total: 1234,
                      Completed: 899
                  },
                  {
                      Title: "Soporte",
                      Total: 456,
                      Completed: 123
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
            }

          ]
        },
        {
          id: 2,
          title: "OLA 11",
          description: "Descripcion normal prueba routeo.",
          state:  {
            Id: 3,
            Title: "Demorado",
            Checked: true
          },
          startDate: "13/01/17",
          endDate: "12/01/17",
          progress: {
            childCompleted: 2,
            childTotal: 6,
            value: 2 * 100 / 6,
            childMaxValueCompleted: 87,
            childMinValueCompleted: 26,
          },
          distancePercentage: 19,
          loadPercentage: -84,
          timePercentage: 72,
          distanceIndicators:
          {
              Title: "Distancia",
              Total: 10000,
              Completed: 9000
          },
          loadIndicators: [{
                  Title: "Peso",
                  Total: 1500,
                  Completed: 500
              },
              {
                  Title: "Volumen",
                  Total: 3800,
                  Completed: 1710
              },
              {
                  Title: "Unidades",
                  Total: 1000,
                  Completed: 250
              },
              {
                  Title: "Bultos",
                  Total: 1234,
                  Completed: 899
              },
              {
                  Title: "Soporte",
                  Total: 456,
                  Completed: 123
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
          ],
          routes: [
            {
              id: 3,
              title: "HNM8 - 093",
              description: "Descripcion normal prueba routeo.",
              state:  {
                Id: 1,
                Title: "Normal",
                Checked: true
              },
              startDate: "12/01/17",
              endDate: "12/01/17",
              progress: {
                childCompleted: 3,
                childTotal: 9,
                value: 3 * 100 / 9,
                childMaxValueCompleted: 65,
                childMinValueCompleted: 13,
              },
              distancePercentage: 19,
              loadPercentage: -84,
              timePercentage: 72,
              distanceIndicators:
              {
                  Title: "Distancia",
                  Total: 10000,
                  Completed: 9000
              },
              loadIndicators: [{
                      Title: "Peso",
                      Total: 1500,
                      Completed: 500
                  },
                  {
                      Title: "Volumen",
                      Total: 3800,
                      Completed: 1710
                  },
                  {
                      Title: "Unidades",
                      Total: 1000,
                      Completed: 250
                  },
                  {
                      Title: "Bultos",
                      Total: 1234,
                      Completed: 899
                  },
                  {
                      Title: "Soporte",
                      Total: 456,
                      Completed: 123
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
              id: 4,
              title: "JJB9 - 123",
              description: "Descripcion normal prueba routeo.",
              state:  {
                Id: 1,
                Title: "Normal",
                Checked: true
              },
              startDate: "12/01/17",
              endDate: "12/01/17",
              progress: {
                childCompleted: 3,
                childTotal: 9,
                value: 3 * 100 / 9,
                childMaxValueCompleted: 65,
                childMinValueCompleted: 13,
              },
              distancePercentage: 19,
              loadPercentage: -84,
              timePercentage: 72,
              distanceIndicators:
              {
                  Title: "Distancia",
                  Total: 10000,
                  Completed: 9000
              },
              loadIndicators: [{
                      Title: "Peso",
                      Total: 1500,
                      Completed: 500
                  },
                  {
                      Title: "Volumen",
                      Total: 3800,
                      Completed: 1710
                  },
                  {
                      Title: "Unidades",
                      Total: 1000,
                      Completed: 250
                  },
                  {
                      Title: "Bultos",
                      Total: 1234,
                      Completed: 899
                  },
                  {
                      Title: "Soporte",
                      Total: 456,
                      Completed: 123
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
            }

          ]
        }
      ]
    },
    {
      id: 2,
      title: "Valle Grande - 555",
      description: "Descripcion normal prueba routeo.",
      state:  {
        Id: 3,
        Title: "Demorado",
        Checked: true
      },
      startDate: "13/01/17",
      endDate: "12/01/17",
      progress: {
        childCompleted: 2,
        childTotal: 6,
        value: 2 * 100 / 6,
        childMaxValueCompleted: 87,
        childMinValueCompleted: 26,
      },
      distancePercentage: 19,
      loadPercentage: -84,
      timePercentage: 72,
      distanceIndicators:
      {
          Title: "Distancia",
          Total: 10000,
          Completed: 9000
      },
      loadIndicators: [{
              Title: "Peso",
              Total: 1500,
              Completed: 500
          },
          {
              Title: "Volumen",
              Total: 3800,
              Completed: 1710
          },
          {
              Title: "Unidades",
              Total: 1000,
              Completed: 250
          },
          {
              Title: "Bultos",
              Total: 1234,
              Completed: 899
          },
          {
              Title: "Soporte",
              Total: 456,
              Completed: 123
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
      ],
      operations: [
        {
          id: 3,
          title: "OLA 12",
          description: "Descripcion normal prueba routeo.",
          state:  {
            Id: 1,
            Title: "Normal",
            Checked: true
          },
          startDate: "12/01/17",
          endDate: "12/01/17",
          progress: {
            childCompleted: 3,
            childTotal: 9,
            value: 3 * 100 / 9,
            childMaxValueCompleted: 65,
            childMinValueCompleted: 13,
          },
          distancePercentage: 19,
          loadPercentage: -84,
          timePercentage: 72,
          distanceIndicators:
          {
              Title: "Distancia",
              Total: 10000,
              Completed: 9000
          },
          loadIndicators: [{
                  Title: "Peso",
                  Total: 1500,
                  Completed: 500
              },
              {
                  Title: "Volumen",
                  Total: 3800,
                  Completed: 1710
              },
              {
                  Title: "Unidades",
                  Total: 1000,
                  Completed: 250
              },
              {
                  Title: "Bultos",
                  Total: 1234,
                  Completed: 899
              },
              {
                  Title: "Soporte",
                  Total: 456,
                  Completed: 123
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
          ],
          routes: [
            {
              id: 5,
              title: "QT2H - 253",
              description: "Descripcion normal prueba routeo.",
              state:  {
                Id: 1,
                Title: "Normal",
                Checked: true
              },
              startDate: "12/01/17",
              endDate: "12/01/17",
              progress: {
                childCompleted: 3,
                childTotal: 9,
                value: 3 * 100 / 9,
                childMaxValueCompleted: 65,
                childMinValueCompleted: 13,
              },
              distancePercentage: 19,
              loadPercentage: -84,
              timePercentage: 72,
              distanceIndicators:
              {
                  Title: "Distancia",
                  Total: 10000,
                  Completed: 9000
              },
              loadIndicators: [{
                      Title: "Peso",
                      Total: 1500,
                      Completed: 500
                  },
                  {
                      Title: "Volumen",
                      Total: 3800,
                      Completed: 1710
                  },
                  {
                      Title: "Unidades",
                      Total: 1000,
                      Completed: 250
                  },
                  {
                      Title: "Bultos",
                      Total: 1234,
                      Completed: 899
                  },
                  {
                      Title: "Soporte",
                      Total: 456,
                      Completed: 123
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
            }
          ]
        },
        {
          id: 4,
          title: "OLA 13",
          description: "Descripcion normal prueba routeo.",
          state:  {
            Id: 3,
            Title: "Demorado",
            Checked: true
          },
          startDate: "13/01/17",
          endDate: "12/01/17",
          progress: {
            childCompleted: 2,
            childTotal: 6,
            value: 2 * 100 / 6,
            childMaxValueCompleted: 87,
            childMinValueCompleted: 26,
          },
          distancePercentage: 19,
          loadPercentage: -84,
          timePercentage: 72,
          distanceIndicators:
          {
              Title: "Distancia",
              Total: 10000,
              Completed: 9000
          },
          loadIndicators: [{
                  Title: "Peso",
                  Total: 1500,
                  Completed: 500
              },
              {
                  Title: "Volumen",
                  Total: 3800,
                  Completed: 1710
              },
              {
                  Title: "Unidades",
                  Total: 1000,
                  Completed: 250
              },
              {
                  Title: "Bultos",
                  Total: 1234,
                  Completed: 899
              },
              {
                  Title: "Soporte",
                  Total: 456,
                  Completed: 123
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
        }
      ]
    }
  ];

  this.getOperationGroups = function () {
    return operationGroups;
  };

  this.getOperationGroupById = function (id) {
    for (var i = 0; i < operationGroups.length; i++) {
      if(operationGroups[i].id == id){
        return operationGroups[i];
      }
    }
  };

  this.getOperations = function () {
    var operations = [];
    for (var i = 0; i < operationGroups.length; i++) {
      operations.push.apply(operations, operationGroups[i].operations);
    }
    return operations;
  };

  this.getOperationById = function (id) {
    for (var i = 0; i < operationGroups.length; i++) {
      for (var j = 0; j < operationGroups[i].operations.length; j++) {
        if(operationGroups[i].operations[j].id == id)
          return operationGroups[i].operations[j];
      }
    }
  };

  this.getRoutes = function () {
    var routes = [];
    for (var i = 0; i < operationGroups.length; i++) {
      for (var j = 0; j < operationGroups[i].operations.length; j++) {
        routes.push.apply(routes, operationGroups[i].operations[j].routes);
      }
    }
    return routes;
  };

  this.getRouteById = function (id) {
    for (var i = 0; i < operationGroups.length; i++) {
      for (var j = 0; j < operationGroups[i].operations.length; j++) {
        for (var k = 0; k < operationGroups[i].operations[j].routes.length; k++) {
          if(operationGroups[i].operations[j].routes[k].id == id)
            return operationGroups[i].operations[j].routes[k];
        }
      }
    }
  };

});
