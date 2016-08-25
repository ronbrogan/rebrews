(function () {

    

    materialTableController.$inject = ["$scope", "$element", "$attrs", "$stateParams", "materialTableService"];

    function materialTableController($scope, $element, $attrs, $stateParams, materialTableService) {
        var self = this;
        self.columnsDefinition = [];

        self.apiUrl = null;
        self.newItem = {};

        self.items = [];

        function initialize() {
            self.columnsDefinition = angular.fromJson($attrs.colsDef);
            self.apiUrl = $attrs.apiUrl;

            self.getItems();
        }

        
        self.getItems = function () {
            materialTableService.getItems(self.apiUrl).then(function (data) {
                self.items = data;
            });
        }

        
        //Call initialization function
        initialize();
    }

    materialTableService.$inject = ["$http"];

    function materialTableService($http) {
        var serviceReturn = {

            getItems: function(apiUrl) {
                return $http.get(apiUrl).then(function(result) {
                    return result.data;
                }).catch();
            }

        };

        return serviceReturn;
    }

    angular.module("Rebrews").directive("materialTable", function() {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    buttonAction: "&",
                    initialized: "&",
                    apiUrl: "@",
                    colsDef: "@"
                },
                // view
                templateUrl: '/app/_directives/material-table/material-table.template.html',
                // controller
                controller: "materialTableController as matab",
                link: function(scope, element, attr, thisCtrl) {

                }
            }
    })

    .controller("materialTableController", materialTableController)
    .service("materialTableService", materialTableService);

})();
