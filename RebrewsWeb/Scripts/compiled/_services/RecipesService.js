var Rebrews;
(function (Rebrews) {
    var RecipesController = (function () {
        function RecipesController($http) {
            var _this = this;
            this.$http = $http;
            this.getRecipes = function () {
                return _this.$http({
                    url: "api/recipes/",
                    method: "get",
                    data: null
                });
            };
            this.getRecipesById = function (id) {
                return _this.$http({
                    url: "api/Recipes/${id}",
                    method: "get",
                    data: null
                });
            };
            this.createRecipe = function (vm) {
                return _this.$http({
                    url: "api/Recipes",
                    method: "post",
                    data: vm
                });
            };
            this.getAllRecipes = function () {
                return _this.$http({
                    url: "api/Recipes",
                    method: "get",
                    data: null
                });
            };
        }
        RecipesController.$inject = ["$http"];
        return RecipesController;
    }());
    Rebrews.RecipesController = RecipesController;
    angular.module("Rebrews").service("RecipesService", [RecipesController.$inject, RecipesController]);
})(Rebrews || (Rebrews = {}));
//# sourceMappingURL=RecipesService.js.map