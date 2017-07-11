function InputText() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
          placeholder: '@',
          isDisabled: '=',
          title: '@',
          example: '@',
          type: '@',
          textModel: '='
        },
        controller: 'InputTextController',
        link: function (scope, element, attrs, ctrl) {},
        templateUrl: 'app/shared/directives/InputText/views/InputText.html'
    }
}

angular
    .module('inspinia')
    .directive('inputText', InputText)
