function StopSequence() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            sequenceNumbre: '=',
            outOfOrder: '='
        },
        controller: function($scope) {
        },
        link: function(scope, element, attrs, ctrl) {
        },
        templateUrl: 'app/shared/directives/StopSequence/views/StopSequence.html'
    }
}

angular
    .module('inspinia')
    .directive('stopSequence', StopSequence)
