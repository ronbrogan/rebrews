var Rebrews;
(function (Rebrews) {
    var RecipesService = (function () {
        function RecipesService($http, $rootScope) {
            var _this = this;
            this.$http = $http;
            this.$rootScope = $rootScope;
            this.getRecipes = function () {
                var self = _this;
                return self.$http({
                    url: "api/recipes/",
                    method: "get",
                    data: null
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.getRecipeById = function (id) {
                var self = _this;
                return self.$http({
                    url: "api/Recipes/" + id,
                    method: "get",
                    data: null
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.createRecipe = function (vm) {
                var self = _this;
                return self.$http({
                    url: "api/Recipes",
                    method: "post",
                    data: vm
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.getAllRecipes = function () {
                var self = _this;
                return self.$http({
                    url: "api/Recipes",
                    method: "get",
                    data: null
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
        }
        RecipesService.$inject = ["$http", "$rootScope"];
        return RecipesService;
    }());
    Rebrews.RecipesService = RecipesService;
    angular.module("Rebrews").service("RecipesService", RecipesService);
})(Rebrews || (Rebrews = {}));
//# sourceMappingURL=RecipesService.js.map