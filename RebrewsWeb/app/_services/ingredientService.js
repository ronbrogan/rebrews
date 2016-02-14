(function () {
    "use strict";

    angular.module("rebrews").service("ingredientService", ingredientService);

    ingredientService.$inject = ["$http", "$q", "$rootScope"];
    
    function ingredientService($http, $q, $rootScope) {
        var self = this;

        self.searchFermentable = function (query) {
            return $http.get("api/Fermentables/Search/" + query).then(function (result) {
                return result.data;
            }).catch($rootScope.errHandler);
        };

        self.allIngredients = function (ingredientType) {
            return $http.get("api/" + ingredientType + "/List").then(function (result) {
                return result.data;
            }).catch($rootScope.errHandler);
        };



        self.removeIngredient = function (ingredientType, ingredientId) {
            return $http.delete("api/Ingredients/" + ingredientType + "/" + ingredientId).then(function (result) {
                return result.data;
            }).catch($rootScope.errHandler);
        }

        self.addIngredient = function (ingredientType, recipeId, ingredientItem) {
            return $http.post("api/Ingredients/" + ingredientType + "/Recipe/" + recipeId, ingredientItem).then(function (result) {
                return result.data;
            }).catch($rootScope.errHandler);
        }
    

        return self;
    }
})();