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

        self.newItem = {};
        self.itemAddMode = false;

        self.remove = function(item) {
            $scope.$emit("loadingBar-start");

            ingredientService.removeIngredient(self.ingredientType, item.id).then(function (data) {
                console.log(data);

                self.recipeItem.profile = data.recipeProfile;
                self.recipeItem[self.ingredientType] = angular.copy(data.updatedIngredients);

                $scope.$emit("loadingBar-complete");
            });   
        };

        self.addNew = function () {
            _.forEach(self.columnDefinition[self.ingredientType], function(val) {
                if(val.isEditable === true && val.type !== "selector") {
                    self.newItem[val.binding] = "";
                }
            });

            self.newItem["base"] = self.selectableItems[0];
            self.newItem["base_Id"] = self.newItem.base.id;

            self.itemAddMode = true;
        };

        self.cancelAdd = function () {
            self.newItem = {};
            self.itemAddMode = false;
        };

        self.confirmAdd = function () {
            self.itemAddMode = false;
            $scope.$emit("loadingBar-start");
            ingredientService.addIngredient(self.ingredientType, self.recipeItem.id, self.newItem).then(function (data) {
                self.recipeItem.profile = data.recipeProfile;
                self.recipeItem[self.ingredientType] = angular.copy(data.updatedIngredients);
            }).catch(function(result) {
                self.itemAddMode = true;
            }).finally(function() {
                $scope.$emit("loadingBar-complete");
            });



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
                    "property": "name",
                    "isEditable": true,
                    "type": "selector"
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


            ingredientService.allIngredients(self.ingredientType).then(function (data) {
                self.selectableItems = data;
                $scope.$emit("loadingBar-complete");
            });



            
        }
    }
})();
