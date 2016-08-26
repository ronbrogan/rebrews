var Rebrews;
(function (Rebrews) {
    var YeastController = (function () {
        function YeastController($http) {
            var _this = this;
            this.$http = $http;
            this.get = function () {
                return _this.$http({
                    url: "api/Yeasts/List",
                    method: "get",
                    data: null
                });
            };
        }
        return YeastController;
    }());
    Rebrews.YeastController = YeastController;
    angular.module("Rebrews").service("YeastService", ["$http", YeastController]);
})(Rebrews || (Rebrews = {}));
//# sourceMappingURL=YeastService.js.map