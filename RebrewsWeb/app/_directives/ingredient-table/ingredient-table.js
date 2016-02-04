(function () {

    angular.module("rebrews").directive("ingredientTable", function () {
        return {
            restrict: 'E',
            bindToController: {
                ingredientType: "@",
                recipeItem: "="
            },
            scope: {},
            // view
            templateUrl: '/app/_directives/ingredient-table/ingredient-table.template.html',
            // controller
            controller: "ingredientTableController as ctrl",
			link: function(scope, element, attr, thisCtrl){
				
			}
        }
    })

    .controller("ingredientTableController", ingredientTableController);

    ingredientTableController.$inject = ["$scope", "$stateParams", "$http", "$timeout"];

    function ingredientTableController($scope, $stateParams, $http, $timeout) {
        var self = this;

        self.listEndpoint = "/api/" + self.ingredientType + "/List";
        self.crudEndpoint = "/api/Ingredients/" + self.ingredientType + "/Recipe/" + self.recipeItem.id;

        self.remove = function(item) {
            $scope.$emit("loadingBar-increment", .2);
            $timeout(function () {
                $scope.$emit("loadingBar-complete");
            }, 5000);
        };

        self.items = [];
        self.selectableItems = [];

        self.columnDefinition = {
            "fermentables": [
                {
                    "heading": "Amount",
                    "binding": "amount",
                    "append": " lbs",
                    "isEditable": true
                },
                {
                    "heading": "Name",
                    "binding": "baseFermentable",
                    "property": "name",
                    "isEditable": true,
                    "type": "selector"
                },
                {
                    "heading": "Lovibond °L",
                    "binding": "baseFermentable",
                    "property": "degreesLovibond",
                    "isEditable": false
                },
                {
                    "heading": "PPG",
                    "binding": "baseFermentable",
                    "property": "ppg",
                    "isEditable": false
                }
            ],
            "hops": [
                {
                    "heading": "Amount",
                    "binding": "amount",
                    "append": " oz"
                },
                {
                    "heading": "Time",
                    "binding": "boilTime"
                },
                {
                    "heading": "Name",
                    "binding": "baseHop",
                    "property": "name"
                },
                {
                    "heading": "AA",
                    "binding": "baseHop",
                    "property": "alphaAcid"
                }
            ],
            "yeasts": [
                {
                    "heading": "Name",
                    "binding": "baseYeast",
                    "property": "name"
                },
                {
                    "heading": "Attenuation",
                    "binding": "baseYeast",
                    "property": "attenuation",
                    "append": "%"
                }
            ]
        };

        var init = $scope.$watch(function() {
            return self.recipeItem;
        }, function () {
            if (!_.isEmpty(self.recipeItem)) {
                initialize();
                init();
            }
        }, true);

        function initialize() {
            $scope.$emit("loadingBar-start");
            if (self.recipeItem && self.recipeItem[self.ingredientType] && self.recipeItem[self.ingredientType].length > 0) {
                self.items = angular.copy(self.recipeItem[self.ingredientType]);
                $timeout(function() {
                    $scope.$emit("loadingBar-complete");
                }, 10000);
                
            } else {
                $http.get(self.crudEndpoint).then(function(result) {
                    self.items = result.data;
                    $timeout(function () {
                        $scope.$emit("loadingBar-complete");
                    }, 10000);
                });
            }
        }
    }
})();
