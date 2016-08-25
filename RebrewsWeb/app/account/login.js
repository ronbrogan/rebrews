(function() {
    var app = angular.module("Rebrews");

    app.controller("loginController", ["$http", "$rootScope", function ($http, $rootScope) {
        var self = this;
        self.creds = {};

        self.login = function () {
            $http.post("/api/Account/Login", self.creds).then(function (result) {
                console.log(result);
            }).catch($rootScope.errHandler);
        }
    }]);

})();