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

    ingredientTableController.$inject = ["$scope", "$stateParams", "$http", "$timeout", "ingredientService"];

    function ingredientTableController($scope, $stateParams, $http, $timeout, ingredientService) {
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
                    "binding": "base",
                    "property": "name",
                    "isEditable": true,
                    "type": "selector"
                },
                {
                    "heading": "Lovibond °L",
                    "binding": "base",
                    "property": "degreesLovibond",
                    "isEditable": false
                },
                {
                    "heading": "PPG",
                    "binding": "base",
                    "property": "ppg",
                    "isEditable": false
                }
            ],
            "hops": [
                {
                    "heading": "Amount",
                    "binding": "amount",
                    "append": " oz",
                    "isEditable": true
                },
                {
                    "heading": "Time",
                    "binding": "boilTime",
                    "isEditable": true
                },
                {
                    "heading": "Name",
                    "binding": "base",
                    "property": "name",
                    "isEditable": true,
                    "type": "selector"
                },
                {
                    "heading": "AA",
                    "binding": "base",
                    "property": "alphaAcid"
                }
            ],
            "yeasts": [
                {
                    "heading": "Name",
                    "binding": "base",
                    "property": "name"
                },
                {
                    "heading": "Attenuation",
                    "binding": "base",
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

            self.items = self.recipeItem[self.ingredientType];

            ingredientService.allIngredients(self.ingredientType).then(function (data) {
                self.selectableItems = data;
                $scope.$emit("loadingBar-complete");
            });



            
        }
    }
})();
