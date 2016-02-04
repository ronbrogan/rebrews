(function () {

    angular.module("rebrews").controller("recipeController", recipeController);

    recipeController.$inject = ["$stateParams", "rttService", "$http"];

    function recipeController($stateParams, rttService, $http) {
        var self = this;
        self.recipeId = $stateParams.recipe_Id;
        self.recipe = {};


        function initialize() {
            $http.get("/api/Recipes/" + self.recipeId).then(function(result) {
                self.recipe = result.data;
            });
        }

        initialize();
    }
})();
