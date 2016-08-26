module Rebrews.Recipe {

    export class RecipeController {
        static providerName = "recipeController";
        static $inject = ["$stateParams", "rttService", "$http"];

        constructor($stateParams: any, rttService: any, $http: angular.IHttpService) {
            let self: any = this;
            self.recipeId = $stateParams.recipe_Id;
            self.recipe = {};

            self.getClampedHydroReading = function (finalGravity: number) : number {
                var min = 0;
                var max = 33;

                return Math.min(Math.max((finalGravity - 1) * 1000, min), max) / 3;
            };

            self.getHoppinessIndex = function (ibus: number) {
                var min = 0;
                var max = 13;
                console.log(ibus);
                return Math.min(Math.max(ibus / 8, min), max);
            };

            self.getBarleyIndex = function (gravity: number) {
                var min = 0;
                var max = 100;

                return Math.min(Math.max((gravity - 1) * 1000), min, max) / 4;
            };

            self.formatGravity = function () {
                return function (gravityValue: string) {
                    return parseFloat(gravityValue).toFixed(3);
                }
            }

            self.formatAbv = function () {
                return function (abvValue: string) {
                    return parseFloat(abvValue).toFixed(1) + "%";
                }
            }

            function initialize() {
                $http.get("/api/Recipes/" + self.recipeId).then(function (result) {
                    self.recipe = result.data;
                });
            }

            initialize();
        }
    }

    angular.module("Rebrews").controller(RecipeController.providerName, RecipeController);
}