(function () {
    var app = angular.module("rebrews");


    app.component("allRecipes", {
        templateUrl: "/app/discover/all-recipes/all-recipes.html",
        controller: "allRecipesController as recipes"
    });

    app.controller("allRecipesController", ["recipeService", "$state", function (recipeService, $state) {
        var self = this;

        self.gotoRecipe = function (recipeId) {
            $state.go("recipe.detail", { recipe_Id: recipeId });
        }

        self.$onInit = function () {
            recipeService.allRecipes().then(function (data) {
                self.allRecipes = data;
            });
        };



    }]);


})();