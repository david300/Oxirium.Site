function GeneralInfoItem() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            routeInfo: '=',
            selected: '=',
            closeFn: '&'
        },
        controller: function($scope) {
        },
        link: function(scope, element, attrs, ctrl) {
            scope.Close = function() {
                scope.closeFn();
            }
        },
        templateUrl: 'app/shared/directives/GeneralInfoItem/views/GeneralInfoItem.html'
    }
}

angular
    .module('inspinia')
    .directive('generalInfoItem', GeneralInfoItem)
