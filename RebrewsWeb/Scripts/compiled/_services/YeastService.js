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
        YeastController.$inject = ["$http"];
        return YeastController;
    }());
    Rebrews.YeastController = YeastController;
    angular.module("Rebrews").service("YeastService", [YeastController.$inject, YeastController]);
})(Rebrews || (Rebrews = {}));
//# sourceMappingURL=YeastService.js.map