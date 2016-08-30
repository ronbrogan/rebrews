var Rebrews;
(function (Rebrews) {
    var NewRecipe;
    (function (NewRecipe) {
        var NewRecipeComponent = {
            controller: "newRecipeController as newRecipe",
            templateUrl: "/app/newrecipe/newrecipe.html"
        };
        var NewRecipeController = (function () {
            function NewRecipeController(StylesService, RecipesService) {
                var _this = this;
                this.StylesService = StylesService;
                this.RecipesService = RecipesService;
                this.createRecipe = function () {
                    var self = _this;
                    self.RecipesService.createRecipe(self.newRecipe);
                };
                this.$onInit = function () {
                    var self = _this;
                    console.log("WHAT");
                    self.StylesService.getList().then(function (data) {
                        self.recipeStyles = data;
                    });
                };
            }
            NewRecipeController.providerName = "newRecipeController";
            NewRecipeController.$injector = ["StylesService", "RecipesService"];
            return NewRecipeController;
        }());
        NewRecipe.NewRecipeController = NewRecipeController;
        angular.module("Rebrews").controller(NewRecipeController.providerName, NewRecipeController).component("newRecipe", NewRecipeComponent);
    })(NewRecipe = Rebrews.NewRecipe || (Rebrews.NewRecipe = {}));
})(Rebrews || (Rebrews = {}));
//# sourceMappingURL=newrecipe.js.map