(function () {

    angular.module("Rebrews").controller("recipeController", recipeController);

    recipeController.$inject = ["$stateParams", "rttService", "$http"];

    function recipeController($stateParams, rttService, $http) {
        var self = this;
        self.recipeId = $stateParams.recipe_Id;
        self.recipe = {};

        self.getClampedHydroReading = function (finalGravity) {
            var min = 0;
            var max = 33;

            return parseInt(Math.min(Math.max(parseInt((finalGravity - 1) * 1000), min), max) / 3);
        };

        self.getHoppinessIndex = function (ibus) {
            var min = 0;
            var max = 13;

            return parseInt(Math.min(Math.max(ibus / 8, min), max));
        };

        self.getBarleyIndex = function (gravity) {
            var min = 0;
            var max = 100;

            return parseInt(Math.min(Math.max(parseInt((gravity - 1) * 1000), min), max) / 4);
        };

        self.formatGravity = function() {
            return function(gravityValue) {
                return parseFloat(gravityValue).toFixed(3);
            }
        }

        self.formatAbv = function() {
            return function(abvValue) {
                return parseFloat(abvValue).toFixed(1) + "%";
            }
        }

        function initialize() {
            $http.get("/api/Recipes/" + self.recipeId).then(function(result) {
                self.recipe = result.data;
            });
        }

        initialize();
    }
})();
