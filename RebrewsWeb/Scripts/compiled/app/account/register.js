(function () {
    var app = angular.module("Rebrews");
    app.controller("registerController", ["$http", "$rootScope", function ($http, $rootScope) {
            var self = this;
            self.creds = {};
            self.register = function () {
                $http.post("/api/Account/Register", self.creds).then(function (result) {
                    console.log(result);
                }).catch($rootScope.errHandler);
            };
        }]);
})();
//# sourceMappingURL=register.js.map