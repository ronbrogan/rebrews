var Rebrews;
(function (Rebrews) {
    var YeastService = (function () {
        function YeastService($http, $rootScope) {
            var _this = this;
            this.$http = $http;
            this.$rootScope = $rootScope;
            this.get = function () {
                var self = _this;
                return self.$http({
                    url: "api/Yeasts/List",
                    method: "get",
                    data: null
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
        }
        YeastService.$inject = ["$http", "$rootScope"];
        return YeastService;
    }());
    Rebrews.YeastService = YeastService;
    angular.module("Rebrews").service("YeastService", YeastService);
})(Rebrews || (Rebrews = {}));
//# sourceMappingURL=YeastService.js.map