(function () {
    "use strict";

    angular.module("rebrews").service("ingredientService", ingredientService);

    ingredientService.$inject = ["$http"];
    
    function ingredientService($http) {
        var service = {
            searchFermentable: function(query) {
                return $http.get("api/Fermentables/Search/" + query).then(function(result) {
                    return result.data;
                }).catch();
            }


    };

        return service;
    }
})();