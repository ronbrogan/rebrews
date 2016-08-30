var Rebrews;
(function (Rebrews) {
    var AccountService = (function () {
        function AccountService($http, $rootScope) {
            var _this = this;
            this.$http = $http;
            this.$rootScope = $rootScope;
            this.getUserInfo = function () {
                var self = _this;
                return self.$http({
                    url: "api/Account/UserInfo",
                    method: "get",
                    data: null
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.login = function (login) {
                var self = _this;
                return self.$http({
                    url: "api/account/",
                    method: "post",
                    data: login
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.logout = function () {
                var self = _this;
                return self.$http({
                    url: "api/Account/Logout",
                    method: "post",
                    data: null
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.getManageInfo = function (returnUrl, generateState) {
                var self = _this;
                return self.$http({
                    url: "api/Account/ManageInfo?returnUrl=" + returnUrl + "&generateState=" + generateState,
                    method: "get",
                    data: null
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.changePassword = function (model) {
                var self = _this;
                return self.$http({
                    url: "api/Account/ChangePassword",
                    method: "post",
                    data: model
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.setPassword = function (model) {
                var self = _this;
                return self.$http({
                    url: "api/Account/SetPassword",
                    method: "post",
                    data: model
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.addExternalLogin = function (model) {
                var self = _this;
                return self.$http({
                    url: "api/Account/AddExternalLogin",
                    method: "post",
                    data: model
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.removeLogin = function (model) {
                var self = _this;
                return self.$http({
                    url: "api/Account/RemoveLogin",
                    method: "post",
                    data: model
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.getExternalLogin = function (provider, error) {
                var self = _this;
                return self.$http({
                    url: "api/Account/ExternalLogin?provider=" + provider + "&error=" + error,
                    method: "get",
                    data: null
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.getExternalLogins = function (returnUrl, generateState) {
                var self = _this;
                return self.$http({
                    url: "api/Account/ExternalLogins?returnUrl=" + returnUrl + "&generateState=" + generateState,
                    method: "get",
                    data: null
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.register = function (model) {
                var self = _this;
                return self.$http({
                    url: "api/Account/Register",
                    method: "post",
                    data: model
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.registerExternal = function (model) {
                var self = _this;
                return self.$http({
                    url: "api/Account/RegisterExternal",
                    method: "post",
                    data: model
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
            this.getWhoami = function () {
                var self = _this;
                return self.$http({
                    url: "api/account/",
                    method: "get",
                    data: null
                }).then(function (result) {
                    return result.data;
                }).catch(self.$rootScope.errHandler);
            };
        }
        AccountService.$inject = ["$http", "$rootScope"];
        return AccountService;
    }());
    Rebrews.AccountService = AccountService;
    angular.module("Rebrews").service("AccountService", AccountService);
})(Rebrews || (Rebrews = {}));
//# sourceMappingURL=AccountService.js.map