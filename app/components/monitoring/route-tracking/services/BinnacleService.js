app.factory('BinnacleService', function ($rootScope) {
    var binnacleService = {};

    function FetchBinnacleItems() {
        return [{
                date: new Date(2017, 3, 11, 14, 30, 0, 0),
                location: 'Puerto Santiago',
                description: 'Desperfecto mecánico que produjo una demora de 1 hora'
            },
            {
                date: new Date(2017, 3, 11, 14, 30, 0, 0),
                location: 'Puerto Santiago',
                description: 'Desperfecto mecánico que produjo una demora de 1 hora'
            },
            {
                date: new Date(2017, 3, 11, 14, 30, 0, 0),
                location: 'Wallmart Chile',
                description: 'Prueba 2'
            },
            {
                date: new Date(2017, 3, 11, 14, 30, 0, 0),
                location: 'Puerto Santiago',
                description: 'Desperfecto mecánico que produjo una demora de 1 hora'
            },
            {
                date: new Date(2017, 3, 11, 14, 30, 0, 0),
                location: 'Puerto Santiago',
                description: 'Desperfecto mecánico que produjo una demora de 1 hora'
            },
            {
                date: new Date(2017, 3, 11, 14, 30, 0, 0),
                location: 'Puerto Santiago',
                description: 'Desperfecto mecánico que produjo una demora de 1 hora'
            }
        ];
    }

    angular.extend(binnacleService, {
        FetchBinnacleItems: FetchBinnacleItems
    })

    return binnacleService;
});