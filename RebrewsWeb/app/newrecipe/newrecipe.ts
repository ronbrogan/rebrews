(function() {
    var app = angular.module("Rebrews");

    app.component("newRecipe", {
        controller: "newRecipeController as newRecipe",
        templateUrl: "/app/newrecipe/newrecipe.html"
    });

    app.controller("newRecipeController", ["styleService", "recipeService", function (styleService, recipeService) {
        var self = this;
        self.recipeStyles = [];
        self.newRecipe = {};

        styleService.getStyleList().then(function (data) {
            self.recipeStyles = data;
        });

        self.createRecipe = function() {
            recipeService.createRecipe(self.newRecipe);
        }

    }]);

})();