var Rebrews;
(function (Rebrews) {
    var AccountController = (function () {
        function AccountController($http) {
            var _this = this;
            this.$http = $http;
            this.getUserInfo = function () {
                return _this.$http({
                    url: "api/Account/UserInfo",
                    method: "get",
                    data: null
                });
            };
            this.login = function (login) {
                return _this.$http({
                    url: "api/account/",
                    method: "post",
                    data: login
                });
            };
            this.logout = function () {
                return _this.$http({
                    url: "api/Account/Logout",
                    method: "post",
                    data: null
                });
            };
            this.getManageInfo = function (returnUrl, generateState) {
                return _this.$http({
                    url: "api/Account/ManageInfo?returnUrl=${returnUrl}&generateState=${generateState}",
                    method: "get",
                    data: null
                });
            };
            this.changePassword = function (model) {
                return _this.$http({
                    url: "api/Account/ChangePassword",
                    method: "post",
                    data: model
                });
            };
            this.setPassword = function (model) {
                return _this.$http({
                    url: "api/Account/SetPassword",
                    method: "post",
                    data: model
                });
            };
            this.addExternalLogin = function (model) {
                return _this.$http({
                    url: "api/Account/AddExternalLogin",
                    method: "post",
                    data: model
                });
            };
            this.removeLogin = function (model) {
                return _this.$http({
                    url: "api/Account/RemoveLogin",
                    method: "post",
                    data: model
                });
            };
            this.getExternalLogin = function (provider, error) {
                return _this.$http({
                    url: "api/Account/ExternalLogin?provider=${provider}&error=${error}",
                    method: "get",
                    data: null
                });
            };
            this.getExternalLogins = function (returnUrl, generateState) {
                return _this.$http({
                    url: "api/Account/ExternalLogins?returnUrl=${returnUrl}&generateState=${generateState}",
                    method: "get",
                    data: null
                });
            };
            this.register = function (model) {
                return _this.$http({
                    url: "api/Account/Register",
                    method: "post",
                    data: model
                });
            };
            this.registerExternal = function (model) {
                return _this.$http({
                    url: "api/Account/RegisterExternal",
                    method: "post",
                    data: model
                });
            };
            this.getWhoami = function () {
                return _this.$http({
                    url: "api/account/",
                    method: "get",
                    data: null
                });
            };
        }
        AccountController.$inject = ["$http"];
        return AccountController;
    }());
    Rebrews.AccountController = AccountController;
    angular.module("Rebrews").service("AccountService", [AccountController.$inject, AccountController]);
})(Rebrews || (Rebrews = {}));
//# sourceMappingURL=AccountService.js.map