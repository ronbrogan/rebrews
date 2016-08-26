module Rebrews {
    export interface AddRequestFunction {
        (hash: string): void;
    }

    export interface ResolveRequestFunction {
        (hash: string): void;
    }

    export interface ErrorHandlingFunction {
        (result: any): void
    }

    export interface RebrewsRootScope extends ng.IRootScopeService {
        requests: any;
        resolved: Array<any>;
        addRequest: AddRequestFunction;
        resolveRequest: ResolveRequestFunction;
        errHandler: ErrorHandlingFunction;
    }

    class run {

        static $inject = ["$rootScope", "$q", "toastr"];

        constructor($rootScope: RebrewsRootScope, $q: ng.IQService, toastr: any) {
            $rootScope.requests = {};
            $rootScope.resolved = [];

            $rootScope.addRequest = function (hash) {
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

                if (result.unwrappedError.exceptionMessage) {
                    toastr.error(result.unwrappedError.exceptionMessage);
                } else if (result.unwrappedError && result.unwrappedError.message) {
                    toastr.error(result.unwrappedError.message);
                }

                console.log("ErrorHandler: ");
                console.log(result);

                return $q.reject(result);
            };
        }
    }

    class config {

        static $inject = ["$locationProvider", "$stateProvider", "$urlRouterProvider", "$httpProvider", "toastrConfig"];

        constructor($locationProvider: ng.ILocationProvider, $stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $httpProvider: ng.IHttpProvider, toastrConfig: any) {
            // use the HTML5 History API
            $locationProvider.html5Mode(true);

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
                            templateUrl: "/app/account/login.html",
                            controller: "loginController as login"
                        }
                    }
                })
                .state("account.register", {
                    url: "/register",
                    views: {
                        "maininner": {
                            templateUrl: "/app/account/register.html",
                            controller: "registerController as register"
                        }
                    }
                })
                .state("dashboard", {
                    url: "/dashboard",
                    views: {
                        "main": {
                            templateUrl: "/app/dashboard/dashboard.template.html"
                        }
                    }
                })
                .state("recipe", {
                    url: "/recipe",
                    abstract: true
                })
                .state("recipe.new", {
                    url: "/new",
                    views: {
                        "main@": {
                            template: "<new-recipe></new-recipe>"
                        }
                    }
                })
                .state("recipe.detail", {
                    url: "/:recipe_Id",
                    views: {
                        "main@": {
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
    }

    angular.module("Rebrews", ["ui.router", "toastr"]).run(run).config(config);
}