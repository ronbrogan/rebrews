var Rebrews;
(function (Rebrews) {
    var StylesController = (function () {
        function StylesController($http) {
            var _this = this;
            this.$http = $http;
            this.getList = function () {
                return _this.$http({
                    url: "api/styles/",
                    method: "get",
                    data: null
                });
            };
        }
        return StylesController;
    }());
    Rebrews.StylesController = StylesController;
    angular.module("Rebrews").service("StylesService", ["$http", StylesController]);
})(Rebrews || (Rebrews = {}));
//# sourceMappingURL=StylesService.js.map