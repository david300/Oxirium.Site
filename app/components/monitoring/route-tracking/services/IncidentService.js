app.factory('IncidentService', function ($rootScope) {
    var incidentService = {};

    function FetchIncidentItems() {
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

    function GroupIncidentsByStop(incidents) {
        var result = [];
        var grouped = _.groupBy(incidents, 'location');

        for (item in grouped) {
            result.push({
                location: item,
                incidents: grouped[item]
            })
        }

        return result;
    }

    angular.extend(incidentService, {
        GroupIncidentsByStop: GroupIncidentsByStop,
        FetchIncidentItems: FetchIncidentItems
    })

    return incidentService;
});