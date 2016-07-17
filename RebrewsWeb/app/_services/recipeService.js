(function() {
    var app = angular.module("rebrews");

    app.service("recipeService", ["$rootScope", "$http", "$state", function ($rootScope, $http, $state) {
        var self = this;

        self.createRecipe = function (recipeObject) {
            $http.post("/api/Recipes", recipeObject).then(function (result) {
                $state.go("recipe.detail", { recipe_Id: result.data.id });
            }).catch($rootScope.errHandler);
        };

        self.allRecipes = function () {
            return $http.get("/api/Recipes").then(function (result) {
                return result.data;
            }).catch($rootScope.errHandler);
        };

        return self;
    }]);


})();