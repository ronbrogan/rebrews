var Rebrews;
(function (Rebrews) {
    var FermentableService = (function () {
        function FermentableService($http, $rootScope) {
            var _this = this;
            this.$http = $http;
            this.$rootScope = $rootScope;
            this.get = function () {
                var self = _this;
                return self.$http({
                    url: "api/Fermentables/List",
                    method: "get",
                    data: null
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
        }
        FermentableService.$inject = ["$http", "$rootScope"];
        return FermentableService;
    }());
    Rebrews.FermentableService = FermentableService;
    angular.module("Rebrews").service("FermentableService", FermentableService);
})(Rebrews || (Rebrews = {}));
//# sourceMappingURL=FermentableService.js.map