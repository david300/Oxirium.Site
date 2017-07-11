function StatusIcon() {
    return {
        template: '<ng-include src="template"/>',
        restrict: 'E',
        scope:{
            type: '='
        },
        link: function postLink(scope) {
            var template = "";
            switch (scope.type) {
                case 1:
                    template = "OnTimeStopIcon";
                    break;
                case 2:
                    template = "OnTimeTransitIcon";
                    break;
                case 3:
                    template = "IncidentIcon";
                    break;
                case 4:
                    template = "DelayedStopIcon";
                    break;
                case 5:
                    template = "DelayedTransitIcon";
                    break;
                case 6:
                    template = "SearchIcon";
                    break;
                default:
                    template = "OnTimeStopIcon";
            }
            scope.template = 'app/shared/directives/StatusIcon/views/' + template + '.html';
        }
    }
}

angular
    .module('inspinia')
    .directive('statusIcon', StatusIcon)