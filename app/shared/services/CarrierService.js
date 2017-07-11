app.factory('CarrierService', CarrierService);

function CarrierService($q) {

    var carrierService = {};

    function GetCarriersForGenericSelector() {
        var deferred = $q.defer();

        setTimeout(function () {
            deferred.resolve(GetMockedCarriersForGenericSelector());
        }, 2000);

        return deferred.promise;        
    }

    function GetMockedCarriersForGenericSelector(){
        return [{
                Id: 1,
                Nombre: 'Transportista genérico 1',
            },
            {
                Id: 2,
                Nombre: 'Transportista genérico 2',
            }
        ];
    }

    angular.extend(carrierService, {
        GetCarriersForGenericSelector: GetCarriersForGenericSelector
    });

    return carrierService;

}