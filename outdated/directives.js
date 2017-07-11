function operacion() {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            datos: '=',
            titles: '=',
            showbody: '='
        },
        controllerAs: 'operacion',
        controller: function($scope) {
          $scope.$watch('showbody', function() {
              $scope.isHidden = $scope.showbody;
          });
        },
        link: function(scope, element, attrs, ctrl) {
        },
        template: [
            '<div class="operacion" ng-show="datos.state.Checked">',
            '<div class="conteinerOperacion ">',
            '<operation-header header-data=datos progress=datos.progressStops></operation-header>',
            '<status-progress-bar progress="{{ datos.progressTime.elapsedDuration * 100 / datos.progressTime.expectedDuration | number:2}}" state=datos.state type="secondary"></status-progress-bar>',
            '<progress-bar progress={{datos.progressStops.value}} color="orange" type="secondary"></progress-bar>',
            '<div class="itemHeader" style="margin-bottom:20px;">',
            '<div class="itemHeaderLeft">',
            '<i style="vertical-align:middle" class="fa fa-code-fork fa-rotate-90  fa-fw"></i>',
            '<h5 class="itemTitle"> {{operationHeader.headerData.total}} / [ {{operationHeader.headerData.completed}} -  {{ operationHeader.headerData.completed * 100 / operationHeader.headerData.total | number:2}} %]</h5>',
            '</div>',
            '<div class="itemHeaderRight">',
            '<span class="progress-completed" >{{operationHeader.progress.value}}% [ Mn: {{operationHeader.progress.minCompleted}} / Mx: {{operationHeader.progress.maxCompleted}} ]</span>',
            '</div>',
            '</div>',
            '<div><span class="glyphicon" ng-class="isHidden? \'glyphicon-chevron-down\' : \'glyphicon-chevron-up\'" ng-click="isHidden = !isHidden;"></div>',
            '<tracing-body2 indicators=datos.indicators titles=titles ng-show=isHidden />',
            '<map></map>',
            '</div>',
            '</div>'
        ].join('')
    };
}

function map() {
    return {
        restrict: 'EA',
        replace: true,
        controllerAs: 'mapCtrl',
        controller: function() {
        },
        link: function($scope, $element, $attrs) {
        },
        template: [
          '<div>',
            '<div class="show-map">',
              '<button class="show-map-button btn btn-default" type="button"  ng-click="showMap = !showMap"><i class="fa fa-map-marker"></i>&nbsp;&nbsp;Show in map</button>',
            '</div>',
            '<div ng-if=showMap>',
              '<div class="wrapper wrapper-content  animated fadeInRight">',
                  '<div class="row">',
                      '<div class="col-md-12">',
                          '<section id="map" ng-controller="PlacesMapCtrl">',
                              '<div ui-map="myMap" ui-options="mapOptions" class="google-map" ui-event="{\'map-click\': \'addMarker($event, $params)\', \'map-zoom_changed\': \'setZoomMessage(myMap.getZoom())\' }"></div>',
                          '</section>',
                      '</div>',
                  '</div>',
              '</div>',
            '</div>',
          '</div>'
        ].join('')
    };
}



function statusProgressBar() {
    return {
        restrict: 'EA',
        replace: true,
        bindToController: true,
        scope: {
            progress: "@",
            state: "=",
            type: "@"
        },
        controllerAs: 'progressBar',
        controller: function() {
        },
        link: function($scope, $element, $attrs) {
        },
        template: [
              '<div class="progress progress-bar-operation" ng-class="{ \'progress-bar-main\': progressBar.type == \'main\', \'progress-bar-secondary\': progressBar.type == \'secondary\'}">',
                '<div class="progress-bar" role="progressbar" ng-class="{ \'progress-bar-green\': progressBar.state.Id == 1, \'progress-bar-blue\': progressBar.state.Id == 2, \'progress-bar-red\': progressBar.state.Id == 3, \'progress-bar-black\': progressBar.state.Id == 4 }" aria-valuenow="{{ (progressBar.progress > 100) ? 100 : progressBar.progress}}" aria-valuemin="0" aria-valuemax="100" style="width: {{progressBar.progress}}%;">',
                '</div>',
                '</div>'
        ].join('')
    };
}

function progressBar() {
    return {
        restrict: 'EA',
        replace: true,
        bindToController: true,
        scope: {
            progress: "@",
            color: "@",
            type: "@"
        },
        controllerAs: 'progressBar',
        controller: function() {
        },
        link: function($scope, $element, $attrs) {
        },
        template: [
              '<div class="progress progress-bar-operation" ng-class="{ \'progress-bar-main\': progressBar.type == \'main\', \'progress-bar-secondary\': progressBar.type == \'secondary\'}">',
                '<div class="progress-bar" role="progressbar" ng-class="{ \'progress-bar-green\': progressBar.color == \'green\', \'progress-bar-orange\': progressBar.color == \'orange\', \'progress-bar-deepblue\': progressBar.color == \'blue\' }" aria-valuenow="{{progressBar.progress}}" aria-valuemin="0" aria-valuemax="100" style="width: {{progressBar.progress}}%;">',
                '</div>',
              '</div>'
        ].join('')
    };
}

function operationHeader() {
    return {
        restrict: 'EA',
        replace: true,
        bindToController: {
            headerData: '=',
            progress: '='
        },
        controllerAs: 'operationHeader',
        controller: function() {
          var minutes = this.headerData.progressTime.expectedDuration;
          var hours = Math.floor(minutes/60);
          var days = Math.floor(hours/24);
          hours = hours-(days*24);
          minutes = minutes-(days*24*60)-(hours*60);
          this.expectedDuracion =  days + "d " + hours + ":" + ("0" + minutes).slice(-2);
          minutes = this.headerData.progressTime.elapsedDuration;
          hours = Math.floor(minutes/60);
          days = Math.floor(hours/24);
          hours = hours-(days*24);
          minutes = minutes-(days*24*60)-(hours*60);
          this.elapsedDuration =  days + "d " + hours + ":" + ("0" + minutes).slice(-2);
        },
        link: function($scope, $element, $attrs) {},
        template: [
            '<div >',
            '<div class="itemHeader">',
            '<div class="itemHeaderLeft">',
            '<h3 class="itemTitle">{{operationHeader.headerData.operationTitle}}</h3>',
            '</div>',
            '<div class="itemHeaderRight">',
            '<div class="font-normal"><b>Costo de operacion:</b> <span class="txt-color-green"><i class="fa fa-dollar"></i> &nbsp;5,000.00</div>',
            '</div>',
            '<div>',
              '<div class="itemHeaderLeft">',
              '<h5 class="itemTitle itemTitleDate"> [{{operationHeader.headerData.date}}]</h5>',
              '</div>',
              '<div class="itemHeaderRight">',
              '<span><b>Tiempo estimado: </b>{{operationHeader.expectedDuracion}} - <b>Tiempo transcurrido: </b>{{operationHeader.elapsedDuration}} </span>',
              '<span class="txt-color-green">',
                '<i class="fa fa-arrow-circle-up"></i>&nbsp;1.2% </span>',
              '</span>',
              '<statusdot state="{{operationHeader.headerData.state.Title}}"></statusdot>',
              '</div>',
            '</div>',
            '</div>',
            '</div>'
        ].join('')
    };
}

function status() {
    return {
        restrict: 'EA',
        replace: true,
        bindToController: {
            state: '@'
        },
        controllerAs: 'statusCtrl',
        controller: function() {
        },
        link: function($scope, $element, $attrs) {
        },
        template: [
          '<div style="display:inline-block;padding: 5px 1px;">',
          '<statusdot state="{{statusCtrl.state}}"/>',
          '<span class="label" ng-class="{ \'label-primary\': statusCtrl.state == \'Normal\', \'label-success\': statusCtrl.state == \'Pendiente\', \'label-danger\': statusCtrl.state == \'Demorado\', \'label-black\': statusCtrl.state == \'Finalizado\'}">{{statusCtrl.state}}</span>',
          '</div>'
        ].join('')
    };
}

function statusdot() {
    return {
        restrict: 'EA',
        bindToController: true,
        replace:true,
        scope: {
          state: '='
        },
        controllerAs: 'statusDotCtrl',
        controller: function() {
        },
        link: function($scope, $element, $attrs) {
        },
        template: [
          '<span>',
            '<i class="fa fa-circle" ng-class="{ \'text-navy\': statusDotCtrl.state.Id == \'1\', \'text-blue\': statusDotCtrl.state.Id == \'2\', \'text-danger\': statusDotCtrl.state.Id == \'3\', \'text-black\': statusDotCtrl.state.Id == \'4\'}">',
            '</i>',
          '</span>'
        ].join('')
    };
}

function tracingFilters() {
    return {
        restrict: 'EA',
        replace: true,
        controllerAs: 'tracingFIlterstCtrl',
        controller: function() {
        },
        link: function($scope, $element, $attrs) {
        },
        template: [
          '<div class="theme-config">',
              '<div class="theme-config-box" ng-class="{\'show\' : toggle}">',
                  '<div class="spin-icon" ng-click="toggle = !toggle" >',
                      '<i class="fa fa-cogs fa-spin"></i>',
                  '</div>',
                  '<div class="skin-setttings">',
                      '<div class="title">Apply Filters</div>',
                        '<div class="setings-item">',
                            '<form>',
                              '<div class="form-group">',
                                '<div class="input-group">',
                                  '<div class="input-group-addon"><i class="fa fa-search"></i></div>',
                                  '<input type="text" class="form-control" placeholder="Search by name" ng-model="searchName">',
                                '</div>',
                              '</div>',
                              '<div class="subTitle">',
                                '<b>Order by:</b>',
                              '</div>',
                              '<span class="orderBy">',
                                '<select class="form-control" ng-model="sortBy">',
                                  '<option value="operationTitle">Name</option>',
                                  '<option value="progress.value">Percentage completed</option>',
                                '</select>',
                              '</span>',
                              '<span class="orderByDirection">',
                                  '<label>',
                                    '<input icheck type="radio" ng-model="ctrl.orderByDirection" value="ASC">',
                                    'ASC',
                                  '</label>',
                                  '<label>',
                                    '<input icheck type="radio" ng-model="ctrl.orderByDirection" value="DESC">',
                                    'DESC',
                                  '</label>',
                              '</span>',
                            '</form>',
                            '<div class="subTitle">',
                              '<b>Status:</b>',
                              '<div ui-sortable="sortableOptions" ng-model="ctrl.Status" >',
                              '<span ng-repeat="status in ctrl.Status track by $index" style="margin: 5px;">',
                                '<input icheck type="checkbox" ng-model="status.Checked"><status state={{status.Title}}></status></span>',
                              '</span>',
                              '</div>',
                            '</div>',
                            '<div class="subTitle">',
                              '<div style="margin-top: 5px;margin-bottom: 5px;">',
                                '<b>Indicators:</b>',
                                '<span><span class="glyphicon" ng-class="ctrl.showbody? \'glyphicon-chevron-down\' : \'glyphicon-chevron-up\'" ng-click="ctrl.showbody = !ctrl.showbody;"></span>',
                              '</div>',
                               '<div class="floatleft">',
                                 '<div ui-sortable="sortableOptions" ng-model="ctrl.indicatorTitles" class="list">',
                                   '<span style="display:inline-block;width:95px;" ng-repeat="indicatorTitle in ctrl.indicatorTitles track by $index" class="item">',
                                       '<input icheck type="checkbox" ng-model="indicatorTitle.Checked"><i></i> {{indicatorTitle.Title}}',
                                   '</span>',
                                 '</div>',
                               '</div>',
                            '</div>',
                      '</div>',
                  '</div>',
              '</div>',
          '</div>',
        ].join('')
    };
}


/*
function tracingBody() {
    return {
        restrict: 'EA',
        replace: true,
        bindToController: {
            indicators: '=',
            titles: '='
        },
        controllerAs: 'tracingBodyCtrl',
        controller: function() {
          for(var i = 0; i < this.indicators.length; i++){
            var completedChart = this.indicators[i].Completed * 100 / this.indicators[i].Total;
            this.indicators[i].chartData = [
                {
                    data: [
                        { x: 0, y: completedChart }
                    ],
                    color: '#ecba52'
                },
                {
                    data: [
                        { x: 0, y: 100 - completedChart }
                    ],
                    color: '#d7d7d7'
                }
            ];
          }
        },
        link: function($scope, $element, $attrs) {
        },
        template: [
          '<div class="table-responsive">',
            '<table class="table">',
              '<tbody>',
                '<tr >',
                  '<td ng-repeat="indicatorTitle in tracingBodyCtrl.titles" ng-show="indicatorTitle.Checked">',
                    '<div ng-repeat="indicator in tracingBodyCtrl.indicators"  ng-if="indicatorTitle.Title == indicator.Title">',
                      '<div ng-controller="ChartsCtrl as chart">',
                        '<div width="25px">',
                          '<table>',
                            '<tr ng-click="isWeightInfoOpen = !isWeightInfoOpen">',
                              '<td valign="top">',
                                '<rickshaw style="display:inline-block;" rickshaw-options="chart.stackedOptions" rickshaw-features="" rickshaw-series="indicator.chartData"></rickshaw>',
                              '</td>',
                              '<td style="padding-left:5px;">',
                                '<span><b>{{indicatorTitle.Title}}</b></br></span>',
                                '<span style="text-align:left; white-space: nowrap;">{{indicator.Completed}} - {{indicator.Total}} Kg</span></br>',
                                '<span style="margin-top:10px;">{{ indicator.Completed * 100 / indicator.Total | number:2}}%</span>',
                                '<div class="arrow_box" ng-show="isWeightInfoOpen">',
                                  'Max: {{indicator.Max}} - [{{ indicator.Max * 100 / indicator.Total | number:2}}%]</br>',
                                  'Min: {{indicator.Min}} - [{{ indicator.Min * 100 / indicator.Total | number:2}}%]</br>',
                                  'Avg: {{indicator.Avg}} - [{{ indicator.Avg * 100 / indicator.Total | number:2}}%]</br>',
                                '</div>',
                              '</td>',
                            '</tr>',
                          '</table>',
                        '</div>',
                      '</div>',
                    '</div>',
                  '</td>',
                '</tr>',
              '</tbody>',
            '</table>',
            '</div>',
          '</div>'
        ].join('')
    };
}
*/

function tracingBody2() {
    return {
        restrict: 'EA',
        replace: true,
        bindToController: true,
        scope: {
            indicators: '=',
            titles: '='
        },
        controllerAs: 'tracingBodyCtrl',
        controller: function() {
          for(var i = 0; i < this.indicators.length; i++){
            var completedChart = this.indicators[i].Completed * 100 / this.indicators[i].Total;
            this.indicators[i].chartData = [
                {
                    data: [
                        { x: 0, y: completedChart }
                    ],
                    color: '#ecba52'
                },
                {
                    data: [
                        { x: 0, y: 100 - completedChart }
                    ],
                    color: '#d7d7d7'
                }
            ];
          }
        },
        link: function($scope, $element, $attrs) {
        },
        template: [
          '<div class="table-responsive">',
            '<table class="table">',
              '<tbody>',
                '<tr ng-repeat="indicatorTitle in tracingBodyCtrl.titles" ng-show="indicatorTitle.Checked">',
                  '<td ng-repeat="indicator in tracingBodyCtrl.indicators"  ng-if="indicatorTitle.Title == indicator.Title">',
                    '<table width=100%>',
                      '<tr ng-click="isWeightInfoOpen = !isWeightInfoOpen">',
                        '<td width=80px valign="top" style="top:0;">',
                          '{{indicator.Title}}',
                          '<span ng-show="isWeightInfoOpen" align="right">',
                            '<h5 style="margin-top:0px;font-weight:normal;margin-right:5px;">',
                            '<span class="font-normal">',
                            'Max</br>',
                            'Min',
                            '</span>',
                            '</h5>',
                          '</span>',
                        '</td>',
                        '<td valign="top">',
                          '<progress-bar progress="{{ indicator.Completed * 100 / indicator.Total | number:2}}" color=\'orange\' type="secondary"></progress-bar>',
                          '<div ng-show="isWeightInfoOpen" >',
                            '<div style="margin-top:2px;">',
                              '<progress-bar progress="{{ indicator.Max * 100 / indicator.Total | number:2}}" color="blue" type="secondary"></progress-bar>',
                            '</div>',
                            '<div style="margin-top:2px;">',
                              '<progress-bar progress="{{ indicator.Min * 100 / indicator.Total | number:2}}" color="blue" type="secondary"></progress-bar>',
                            '</div>',
                          '</div>',
                        '</td>',
                        '<td width=150px valign="top">',
                          '<div style="display:inline-block;text-align: right;">',
                            '<span style="margin-top:10px;">{{ indicator.Completed * 100 / indicator.Total | number:2}}%</span>',
                            '<span ng-show="isWeightInfoOpen" >',
                              '<h5 style="margin-top:0px;font-weight:normal">',
                              '<span class="font-normal">',
                              '{{ indicator.Max * 100 / indicator.Total | number:2}}%</br>',
                              '{{ indicator.Min * 100 / indicator.Total | number:2}}%</br>',
                              '</span>',
                              '</h5>',
                            '</span>',
                          '</div>',
                          '<div style="display:inline-block;text-align: right;float:right;">',
                            '<span style="margin-top:10px;">{{indicator.Completed}} / {{indicator.Total}}</span>',
                            '<span ng-show="isWeightInfoOpen" >',
                              '<h5 style="margin-top:0px;font-weight:normal">',
                              '<span class="font-normal">',
                              '{{ indicator.Max }} / {{indicator.Total}}</br>',
                              '{{ indicator.Min }} / {{indicator.Total}}</br>',
                              '</span>',
                              '</h5>',
                            '</span>',
                          '</div>',
                        '</td>',
                      '</tr>',
                    '</table>',
                  '</td>',
                '</tr>',
              '</tbody>',
            '</table>',
            '</div>',
          '</div>'
        ].join('')
    };
}

function arrowPercentage() {
    return {
        restrict: 'EA',
        replace: true,
        bindToController: true,
        scope: {
            percentage: "@",
            label: "@"
        },
        controllerAs: 'arrowPercentageCtrl',
        controller: function() {
          this.percentageRounded = parseFloat(this.percentage).toFixed(2);
        },
        link: function($scope, $element, $attrs) {
        },
        template: [
          '<div class="arrow-percentage" ng-class="arrowPercentageCtrl.percentage < 0 ? \'txt-color-red\' : \'txt-color-green\'" ><i ng-class="arrowPercentageCtrl.percentage < 0 ? \'fa-arrow-circle-down\' : \'fa-arrow-circle-up\'" class="fa"></i>&nbsp;{{arrowPercentageCtrl.percentage < 0 ? arrowPercentageCtrl.percentageRounded * -1 : arrowPercentageCtrl.percentageRounded}}% {{arrowPercentageCtrl.label}}</div>',
        ].join('')
    };
}


/**
 *
 * Pass all functions into module
 */
angular
    .module('inspinia')
    .directive('progressBar', progressBar)
    .directive('operationHeader', operationHeader)
    .directive('operacion', operacion)
    .directive('status', status)
    .directive('statusdot',statusdot)
    .directive('tracingFilters',tracingFilters)
    .directive('map',map)
    .directive('statusProgressBar',statusProgressBar)
    .directive('tracingBody2', tracingBody2)
    .directive('arrowPercentage',arrowPercentage);
