var Rebrews;
(function (Rebrews) {
    var StylesService = (function () {
        function StylesService($http, $rootScope) {
            var _this = this;
            this.$http = $http;
            this.$rootScope = $rootScope;
            this.getList = function () {
                var self = _this;
                return self.$http({
                    url: "api/styles/",
                    method: "get",
                    data: null
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
        }
        StylesService.$inject = ["$http", "$rootScope"];
        return StylesService;
    }());
    Rebrews.StylesService = StylesService;
    angular.module("Rebrews").service("StylesService", StylesService);
})(Rebrews || (Rebrews = {}));
//# sourceMappingURL=StylesService.js.map