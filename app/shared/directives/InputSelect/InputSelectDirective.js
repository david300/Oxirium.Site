function InputSelect() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
          name: '@',
          items: '=',
          selectModel: '='
        },
        controller: 'InputSelectController',
        link: function (scope, element, attrs, ctrl) {},
        templateUrl: 'app/shared/directives/InputSelect/views/InputSelect.html'
    }
}

angular
    .module('inspinia')
    .directive('inputSelect', InputSelect)
