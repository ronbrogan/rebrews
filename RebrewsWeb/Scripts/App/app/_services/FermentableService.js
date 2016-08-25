var Rebrews;
(function (Rebrews) {
    var FermentableController = (function () {
        function FermentableController($http) {
            var _this = this;
            this.$http = $http;
            this.get = function () {
                return _this.$http({
                    url: "api/Fermentables/List",
                    method: "get",
                    data: null
                });
            };
        }
        return FermentableController;
    }());
    Rebrews.FermentableController = FermentableController;
    angular.module("Rebrews").service("FermentableService", ["$http", FermentableController]);
})(Rebrews || (Rebrews = {}));
//# sourceMappingURL=FermentableService.js.map