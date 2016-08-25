var Rebrews;
(function (Rebrews) {
    var HopController = (function () {
        function HopController($http) {
            var _this = this;
            this.$http = $http;
            this.get = function () {
                return _this.$http({
                    url: "api/Hops/List",
                    method: "get",
                    data: null
                });
            };
        }
        return HopController;
    }());
    Rebrews.HopController = HopController;
    angular.module("Rebrews").service("HopService", ["$http", HopController]);
})(Rebrews || (Rebrews = {}));
//# sourceMappingURL=HopService.js.map