function config($qProvider, $stateProvider, $httpProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider, $localStorageProvider, $locationProvider) {

    $qProvider.errorOnUnhandledRejections(false);
    IdleProvider.idle(5);
    IdleProvider.timeout(120);
    $locationProvider.hashPrefix('');
    // Set  custom token to header.
    $httpProvider.interceptors.push(function () {
        return {
            'request': function (config) {
                config.headers['token'] = $localStorageProvider.get("token") ? $localStorageProvider.get("token").token : '';
                return config;
            }
        };
    });

    $urlRouterProvider.otherwise("/Login");

    $ocLazyLoadProvider.config({
        debug: false
    });

    $stateProvider
        .state('base', {
            abstract: true,
            url: "",
            templateUrl: "app/components/base/content.html",
            controller: 'ContentCtrl'
        })

        /* STATE FREIGHTS */

        .state('base.freights', {
            url: "/Freights",
            abstract: true,
            templateUrl: "app/components/freights/content.html",
            controller: "FreightsController",
            /*resolve: {
                ActiveRoutes: function (RouteTrackingService) {
                    return RouteTrackingService.GetActiveRoutes();
                }
            },*/
            loginRequired: true
        })

        .state('base.freights.list', {
            url: "/List",
            views: {
                'Freights': {
                    templateUrl: "app/components/freights/views/freightList.html",
                    controller: "FreightListController"
                }/*,
                'SideMenu': {
                    templateUrl: "app/components/monitoring/route-tracking/views/SideMenu.html",
                    controller: "RouteTrackingSideMenuController"
                }*/
            },
            loginRequired: true
        })

        .state('base.freights.list.details', {
            url: "/List/:id",
            views: {
                'FreightDetails': {
                    templateUrl: "app/components/freights/views/FreightDetails.html",
                    controller: "FreightDetailsController"
                }/*,
                'SideMenu': {
                    templateUrl: "app/components/monitoring/route-tracking/views/SideMenu.html",
                    controller: "RouteTrackingSideMenuController"
                }*/
            },
            loginRequired: true
        })

        /* STATE MONITORING */
        .state('base.monitoring', {
            abstract: true,
            url: "/Monitoring"
        })

        .state('base.monitoring.routeTracking', {
            url: "/RouteTracking",
            abstract: true,
            templateUrl: "app/components/monitoring/content.html",
            controller: "RouteTrackingController",
            resolve: {
                ActiveRoutes: function (RouteTrackingService) {
                    return RouteTrackingService.GetActiveRoutes();
                }
            },
            loginRequired: true
        })

        .state('base.monitoring.routeTracking.list', {
            url: "",
            views: {
                'Map': {
                    templateUrl: "app/components/monitoring/route-tracking/views/Map.html",
                    controller: "RouteTrackingMapController"
                },
                'SideMenu': {
                    templateUrl: "app/components/monitoring/route-tracking/views/SideMenu.html",
                    controller: "RouteTrackingSideMenuController"
                }
            },
            loginRequired: true
        })

        .state('base.monitoring.routeTracking.list.details', {
            url: "/{routeID:int}",
            loginRequired: true
        })

        .state('base.monitoring.routeTracking.list.details.default', {
            url: "",
            loginRequired: true,
            onEnter: function ($stateParams, $state) {
                if ($stateParams.routeID)
                    $state.go('base.monitoring.routeTracking.list.details.stops', {
                        routeID: $stateParams.routeID
                    });
            }
        })

        .state('base.monitoring.routeTracking.list.details.instructions', {
            url: "/Instructions",
            resolve: {
                InstructionItems: function (InstructionService, $stateParams) {
                    return InstructionService.FetchInstructionItems();
                }
            },
            views: {
                'InstructionDetails@base.monitoring.routeTracking.list': {
                    templateUrl: "app/components/monitoring/route-tracking/views/Instruction/InstructionDetails.html",
                    controller: "InstructionController"
                }
            },
            loginRequired: true
        })

        .state('base.monitoring.routeTracking.list.details.stops', {
            url: "/Stops",
            resolve: {
                StopItems: function (StopService, $stateParams) {
                    return StopService.FetchStopItems();
                }
            },
            views: {
                'StopDetails@base.monitoring.routeTracking.list': {
                    templateUrl: "app/components/monitoring/route-tracking/views/Stop/StopDetails.html",
                    controller: "StopController"
                }
            },
            loginRequired: true
        })

        .state('base.monitoring.routeTracking.list.details.incidents', {
            url: "/Incidents",
            resolve: {
                IncidentItems: function (IncidentService, $stateParams) {
                    return IncidentService.FetchIncidentItems();
                }
            },
            views: {
                'IncidentDetails@base.monitoring.routeTracking.list': {
                    templateUrl: "app/components/monitoring/route-tracking/views/Incidents/IncidentDetails.html",
                    controller: "IncidentController"
                }
            },
            loginRequired: true
        })

        .state('base.monitoring.routeTracking.list.details.binnacle', {
            url: "/Binnacle",
            resolve: {
                BinnacleItems: function (BinnacleService, $stateParams) {
                    return BinnacleService.FetchBinnacleItems();
                }
            },
            views: {
                'BinnacleDetails@base.monitoring.routeTracking.list': {
                    templateUrl: "app/components/monitoring/route-tracking/views/Binnacle/BinnacleDetails.html",
                    controller: "BinnacleController"
                }
            },
            loginRequired: true
        })

        .state('base.tracking', {
            url: "/Tracking",
            templateUrl: "app/components/tracking/content.html"
        })

        /*
            Authentication
        */
        .state('landingLogin', {
            abstract: true,
            templateUrl: "app/components/login/views/content.html"
        })

        .state('landingLogin.login', {
            url: "/Login",
            templateUrl: "app/components/login/views/login.html",
            data: {
                pageTitle: 'Login'
            },
            controller: "LoginCtrl"
        })

        .state('landingLogin.register', {
            url: "/Register",
            templateUrl: "app/components/login/views/register.html",
            data: {
                pageTitle: 'Register'
            },
            controller: "RegisterCtrl"
        })

        .state('lockscreen', {
            url: "/Lockscreen",
            templateUrl: "app/components/login/views/lockscreen.html",
            data: {
                pageTitle: 'Lockscreen'
            }
        })

        .state('forgot_password', {
            url: "/Forgot_password",
            templateUrl: "app/components/login/views/forgot_password.html",
            data: {
                pageTitle: 'Forgot password',
                specialClass: 'gray-bg'
            }
        });
}
angular
    .module('inspinia')
    .config(config)
    .run(function ($rootScope, $state, LoginManager, $transitions, $uibModalStack) {
        $rootScope.$state = $state;
        var lgMng = new LoginManager();
        $transitions.onSuccess({}, function (e) {
            $uibModalStack.dismissAll();
        });
        $rootScope.$on('$stateChangeSuccess', function (e, to) {
            /*if (to.loginRequired && !lgMng.getToken()) {
                e.preventDefault();
                $state.go('landingLogin.login');
            }*/

        });
    });
