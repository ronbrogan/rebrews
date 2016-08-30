var Rebrews;
(function (Rebrews) {
    var IngredientsService = (function () {
        function IngredientsService($http, $rootScope) {
            var _this = this;
            this.$http = $http;
            this.$rootScope = $rootScope;
            this.get = function (recipeId, ingredientType) {
                var self = _this;
                return self.$http({
                    url: "api/Ingredients/" + ingredientType + "/Recipe/" + recipeId,
                    method: "get",
                    data: null
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.postFermentable = function (recipeId, newIngredient) {
                var self = _this;
                return self.$http({
                    url: "api/Ingredients/Fermentables/Recipe/" + recipeId,
                    method: "post",
                    data: newIngredient
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.postHop = function (recipeId, newIngredient) {
                var self = _this;
                return self.$http({
                    url: "api/Ingredients/Hops/Recipe/" + recipeId,
                    method: "post",
                    data: newIngredient
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.postYeast = function (recipeId, newIngredient) {
                var self = _this;
                return self.$http({
                    url: "api/Ingredients/Yeasts/Recipe/" + recipeId,
                    method: "post",
                    data: newIngredient
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.putFermentable = function (recipeId, updatedIngredient) {
                var self = _this;
                return self.$http({
                    url: "api/Ingredients/Fermentables/Recipe/" + recipeId,
                    method: "put",
                    data: updatedIngredient
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.putHop = function (recipeId, updatedIngredient) {
                var self = _this;
                return self.$http({
                    url: "api/Ingredients/Hops/Recipe/" + recipeId,
                    method: "put",
                    data: updatedIngredient
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.putYeast = function (recipeId, updatedIngredient) {
                var self = _this;
                return self.$http({
                    url: "api/Ingredients/Yeasts/Recipe/" + recipeId,
                    method: "put",
                    data: updatedIngredient
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.delete = function (ingredientId, ingredientType) {
                var self = _this;
                return self.$http({
                    url: "api/Ingredients/" + ingredientType + "/" + ingredientId,
                    method: "delete",
                    data: null
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
        }
        IngredientsService.$inject = ["$http", "$rootScope"];
        return IngredientsService;
    }());
    Rebrews.IngredientsService = IngredientsService;
    angular.module("Rebrews").service("IngredientsService", IngredientsService);
})(Rebrews || (Rebrews = {}));
//# sourceMappingURL=IngredientsService.js.map