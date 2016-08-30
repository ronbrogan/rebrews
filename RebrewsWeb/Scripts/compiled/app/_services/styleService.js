(function () {
    var app = angular.module("Rebrews");
    app.service("styleService", ["$http", "$rootScope", function ($http, $rootScope) {
            var self = this;
            self.getStyleList = function () {
                return $http.get("/api/Styles/List").then(function (result) {
                    return result.data;
                }).catch($rootScope.errHandler);
            };
            return self;
        }]);
})();
//# sourceMappingURL=styleService.js.map