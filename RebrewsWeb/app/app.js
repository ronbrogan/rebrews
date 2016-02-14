(function() {
    angular.module("rebrews", ["ui.router", "ct.ui.router.extras", "toastr"]).config(config).run(run);

    config.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider", "$stickyStateProvider", "$httpProvider", "toastrConfig"];

    function config($locationProvider, $stateProvider, $urlRouterProvider, $stickyStateProvider, $httpProvider, toastrConfig) {
        // use the HTML5 History API
        $locationProvider.html5Mode(true);

        $stickyStateProvider.enableDebug(false);

        $urlRouterProvider.otherwise("/");

        $httpProvider.interceptors.push("rttService");

        $stateProvider
            .state("home", {
                url: "/",
                views: {
                    "main": {
                        templateUrl: "/app/home/home.template.html"
                    }
                }
            })
            .state("discover", {
                url: "/discover",
                views: {
                    "main": {
                        templateUrl: "/app/discover/discover.template.html"
                    }
                }
            })
            .state("account", {
                url: "/account",
                sticky: true,
                abstract: true,
                views: {
                    "main": {
                        template: "<div ui-view='maininner' />"
                    }
                }
            })
                .state("account.login", {
                    url: "/login",
                    views: {
                        "maininner": {
                            templateUrl: "/app/account/login.template.html"
                        }
                    }
                })
                .state("account.register", {
                    url: "/register",
                    views: {
                        "maininner": {
                            templateUrl: "/app/account/register.template.html"
                        }
                    }
                })
            .state("dashboard", {
                url: "/dashboard",
                sticky: true,
                views: {
                    "main": {
                        templateUrl: "/app/dashboard/dashboard.template.html"
                    }
                }
            })
            .state("recipe", {
                url: "/recipe/:recipe_Id",
                sticky: true,
                views: {
                    "main": {
                        templateUrl: "/app/recipe/recipe.template.html",
                        controller: "recipeController as recipeCtrl"
                    }
                }
            })
        ;


        angular.extend(toastrConfig, {
            autoDismiss: true,
            containerId: 'toast-container',
            maxOpened: 0,
            newestOnTop: true,
            positionClass: 'toast-bottom-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: 'body',


            allowHtml: false,
            closeButton: false,
            closeHtml: '<button>&times;</button>',
            extendedTimeOut: 1000,
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            messageClass: 'toast-message',
            onHidden: null,
            onShown: null,
            onTap: null,
            progressBar: false,
            tapToDismiss: true,
            timeOut: 4000,
            titleClass: 'toast-title',
            toastClass: 'toast'
        });

    }

    run.$inject = ["$rootScope", "$q", "toastr"];

    function run($rootScope, $q, toastr) {
        $rootScope.requests = {};
        $rootScope.resolved = [];
        
        $rootScope.addRequest = function(hash) {
            $rootScope.requests[hash] = new Date().getTime();
        }

        $rootScope.resolveRequest = function (hash) {
            var end = new Date().getTime();
            var begin = $rootScope.requests[hash];
            delete $rootScope.requests[hash];

            var duration = end - begin;
            $rootScope.resolved.push({ 'Request Length': duration + "ms", 'Time': new Date(end) });
        }

        $rootScope.errHandler = function (result) {
            //do stuff with result here, present toast, create datapoints, etc.

            result.unwrappedError = result.data;

            toastr.error(result.unwrappedError.message);

            console.log("ErrorHandler: ");
            console.log(result);

            return $q.reject(result);
        };

    };


})();