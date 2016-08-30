var Rebrews;
(function (Rebrews) {
    var HopService = (function () {
        function HopService($http, $rootScope) {
            var _this = this;
            this.$http = $http;
            this.$rootScope = $rootScope;
            this.get = function () {
                var self = _this;
                return self.$http({
                    url: "api/Hops/List",
                    method: "get",
                    data: null
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
        }
        HopService.$inject = ["$http", "$rootScope"];
        return HopService;
    }());
    Rebrews.HopService = HopService;
    angular.module("Rebrews").service("HopService", HopService);
})(Rebrews || (Rebrews = {}));
//# sourceMappingURL=HopService.js.map