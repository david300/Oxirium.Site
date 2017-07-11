app.factory('DriverService', DriverService);

function DriverService($q) {

    var driverService = {};

    function GetDriversForGenericSelector() {
        var deferred = $q.defer();

        setTimeout(function () {
            deferred.resolve(GetMockedDriversForGenericSelector());
        }, 2000);

        return deferred.promise;        
    }

    function GetMockedDriversForGenericSelector(){
        return [{
                Id: 1,
                Nombre: 'Pablo Rodriguez',
                Cuit: '20-123456789-2',
                Edad: 49
            },
            {
                Id: 2,
                Nombre: 'Juan Perez',
                Cuit: '17-987654321-2',
                Edad: 25
            },
            {
                Id: 3,
                Nombre: 'Damian Molinaro',
                Cuit: '22-987654321-9',
                Edad: 25
            },
            {
                Id: 4,
                Nombre: 'Nacho Fernandez',
                Cuit: '11-112233445-2',
                Edad: 29
            },
            {
                Id: 5,
                Nombre: 'Marcelo Barovero',
                Cuit: '11-456789321-3',
                Edad: 41
            },
            {
                Id: 6,
                Nombre: 'Marcelo Gallardo',
                Cuit: '02-987654321-5',
                Edad: 49
            },
            {
                Id: 7,
                Nombre: 'Fernando Cavenaghi',
                Cuit: '13-159753245-8',
                Edad: 22
            },
            {
                Id: 8,
                Nombre: 'Lucas Alario',
                Cuit: '05-486615151-6',
                Edad: 23
            }
        ];
    }

    angular.extend(driverService, {
        GetDriversForGenericSelector: GetDriversForGenericSelector
    });

    return driverService;

}