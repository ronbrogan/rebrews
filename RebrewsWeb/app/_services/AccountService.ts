
module Rebrews { 

    export class AccountService {

        public static $inject = ["$http", "$rootScope"];
        constructor(private $http: ng.IHttpService, private $rootScope: RebrewsRootScope) { 
        } 
        
        public getUserInfo = () : ng.IHttpPromise<ViewModels.UserInfoViewModel> => {
            let self = this;

            return self.$http<ViewModels.UserInfoViewModel>({
                url: `api/Account/UserInfo`, 
                method: "get", 
                data: null
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public login = (login: ViewModels.LoginViewModel) : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/account/`, 
                method: "post", 
                data: login
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public logout = () : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Account/Logout`, 
                method: "post", 
                data: null
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public getManageInfo = (returnUrl: string, generateState: boolean) : ng.IHttpPromise<ViewModels.ManageInfoViewModel> => {
            let self = this;

            return self.$http<ViewModels.ManageInfoViewModel>({
                url: `api/Account/ManageInfo?returnUrl=${returnUrl}&generateState=${generateState}`, 
                method: "get", 
                data: null
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public changePassword = (model: ViewModels.ChangePasswordViewModel) : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Account/ChangePassword`, 
                method: "post", 
                data: model
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public setPassword = (model: ViewModels.SetPasswordViewModel) : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Account/SetPassword`, 
                method: "post", 
                data: model
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public addExternalLogin = (model: ViewModels.AddExternalLoginViewModel) : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Account/AddExternalLogin`, 
                method: "post", 
                data: model
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public removeLogin = (model: ViewModels.RemoveLoginViewModel) : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Account/RemoveLogin`, 
                method: "post", 
                data: model
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public getExternalLogin = (provider: string, error: string) : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Account/ExternalLogin?provider=${provider}&error=${error}`, 
                method: "get", 
                data: null
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public getExternalLogins = (returnUrl: string, generateState: boolean) : ng.IHttpPromise<ViewModels.ExternalLoginViewModel[]> => {
            let self = this;

            return self.$http<ViewModels.ExternalLoginViewModel[]>({
                url: `api/Account/ExternalLogins?returnUrl=${returnUrl}&generateState=${generateState}`, 
                method: "get", 
                data: null
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public register = (model: ViewModels.RegisterViewModel) : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Account/Register`, 
                method: "post", 
                data: model
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public registerExternal = (model: ViewModels.RegisterExternalViewModel) : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Account/RegisterExternal`, 
                method: "post", 
                data: model
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public getWhoami = () : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/account/`, 
                method: "get", 
                data: null
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
    }
    
    angular.module("Rebrews").service("AccountService", AccountService);
}