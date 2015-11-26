(function() {
    angular.module("rebrews", ["ui.router", "ct.ui.router.extras"]).config(config).run(run);

    config.$inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider", "$stickyStateProvider", "$httpProvider"];

    function config($locationProvider, $stateProvider, $urlRouterProvider, $stickyStateProvider, $httpProvider) {
        // use the HTML5 History API
        $locationProvider.html5Mode(true);

        $stickyStateProvider.enableDebug(true);

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
                url: "/recipe",
                sticky: true,
                views: {
                    "main": {
                        templateUrl: "/app/recipe/recipe.template.html",
                        controller: "recipeController as recipe"
                    }
                }
            })
        ;


    }

    run.$inject = ["$rootScope"];

    function run($rootScope) {
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


    };


})();