(function () {
    "use strict";

    angular.module("rebrews").service("ingredientService", ingredientService);

    ingredientService.$inject = ["$http"];
    
    function ingredientService($http) {
        var self = this;

        self.searchFermentable = function (query) {
            return $http.get("api/Fermentables/Search/" + query).then(function (result) {
                return result.data;
            }).catch();
        };

        self.allIngredients = function (ingredientType) {
            return $http.get("api/" + ingredientType + "/List").then(function (result) {
                return result.data;
            }).catch();
        };
    

        return self;
    }
})();