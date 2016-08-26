var Rebrews;
(function (Rebrews) {
    var IngredientsController = (function () {
        function IngredientsController($http) {
            var _this = this;
            this.$http = $http;
            this.get = function (recipeId, ingredientType) {
                return _this.$http({
                    url: "api/Ingredients/${ingredientType}/Recipe/${recipeId}",
                    method: "get",
                    data: null
                });
            };
            this.postFermentable = function (recipeId, newIngredient) {
                return _this.$http({
                    url: "api/Ingredients/Fermentables/Recipe/${recipeId}",
                    method: "post",
                    data: newIngredient
                });
            };
            this.postHop = function (recipeId, newIngredient) {
                return _this.$http({
                    url: "api/Ingredients/Hops/Recipe/${recipeId}",
                    method: "post",
                    data: newIngredient
                });
            };
            this.postYeast = function (recipeId, newIngredient) {
                return _this.$http({
                    url: "api/Ingredients/Yeasts/Recipe/${recipeId}",
                    method: "post",
                    data: newIngredient
                });
            };
            this.putFermentable = function (recipeId, updatedIngredient) {
                return _this.$http({
                    url: "api/Ingredients/Fermentables/Recipe/${recipeId}",
                    method: "put",
                    data: updatedIngredient
                });
            };
            this.putHop = function (recipeId, updatedIngredient) {
                return _this.$http({
                    url: "api/Ingredients/Hops/Recipe/${recipeId}",
                    method: "put",
                    data: updatedIngredient
                });
            };
            this.putYeast = function (recipeId, updatedIngredient) {
                return _this.$http({
                    url: "api/Ingredients/Yeasts/Recipe/${recipeId}",
                    method: "put",
                    data: updatedIngredient
                });
            };
            this.delete = function (ingredientId, ingredientType) {
                return _this.$http({
                    url: "api/Ingredients/${ingredientType}/${ingredientId}",
                    method: "delete",
                    data: null
                });
            };
        }
        return IngredientsController;
    }());
    Rebrews.IngredientsController = IngredientsController;
    angular.module("Rebrews").service("IngredientsService", ["$http", IngredientsController]);
})(Rebrews || (Rebrews = {}));
//# sourceMappingURL=IngredientsService.js.map