function Selector() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            getItems: '&',
            selected: '=',
            searchLabel: '@',
            placeholder: '@',
            options: '='
        },
        controller: 'SelectorController',
        link: function (scope, element, attrs, ctrl) {},
        templateUrl: 'app/shared/directives/Selector/views/Selector.html'
    }
}

angular
    .module('inspinia')
    .directive('selector', Selector)