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
        StylesController.$inject = ["$http"];
        return StylesController;
    }());
    Rebrews.StylesController = StylesController;
    angular.module("Rebrews").service("StylesService", [StylesController.$inject, StylesController]);
})(Rebrews || (Rebrews = {}));
//# sourceMappingURL=StylesService.js.map