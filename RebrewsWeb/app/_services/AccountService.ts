
module Rebrews { 

    export class AccountController {

        public static $inject = ["$http"];
        constructor(private $http: ng.IHttpService) { 
        } 
        
        public getUserInfo = () : ng.IHttpPromise<ViewModels.UserInfoViewModel> => {
            
            return this.$http<ViewModels.UserInfoViewModel>({
                url: "api/Account/UserInfo", 
                method: "get", 
                data: null
            });
        };
        
        public login = (login: ViewModels.LoginViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/account/", 
                method: "post", 
                data: login
            });
        };
        
        public logout = () : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Account/Logout", 
                method: "post", 
                data: null
            });
        };
        
        public getManageInfo = (returnUrl: string, generateState: boolean) : ng.IHttpPromise<ViewModels.ManageInfoViewModel> => {
            
            return this.$http<ViewModels.ManageInfoViewModel>({
                url: "api/Account/ManageInfo?returnUrl=${returnUrl}&generateState=${generateState}", 
                method: "get", 
                data: null
            });
        };
        
        public changePassword = (model: ViewModels.ChangePasswordViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Account/ChangePassword", 
                method: "post", 
                data: model
            });
        };
        
        public setPassword = (model: ViewModels.SetPasswordViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Account/SetPassword", 
                method: "post", 
                data: model
            });
        };
        
        public addExternalLogin = (model: ViewModels.AddExternalLoginViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Account/AddExternalLogin", 
                method: "post", 
                data: model
            });
        };
        
        public removeLogin = (model: ViewModels.RemoveLoginViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Account/RemoveLogin", 
                method: "post", 
                data: model
            });
        };
        
        public getExternalLogin = (provider: string, error: string) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Account/ExternalLogin?provider=${provider}&error=${error}", 
                method: "get", 
                data: null
            });
        };
        
        public getExternalLogins = (returnUrl: string, generateState: boolean) : ng.IHttpPromise<ViewModels.ExternalLoginViewModel[]> => {
            
            return this.$http<ViewModels.ExternalLoginViewModel[]>({
                url: "api/Account/ExternalLogins?returnUrl=${returnUrl}&generateState=${generateState}", 
                method: "get", 
                data: null
            });
        };
        
        public register = (model: ViewModels.RegisterViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Account/Register", 
                method: "post", 
                data: model
            });
        };
        
        public registerExternal = (model: ViewModels.RegisterExternalViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Account/RegisterExternal", 
                method: "post", 
                data: model
            });
        };
        
        public getWhoami = () : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/account/", 
                method: "get", 
                data: null
            });
        };
    }
    
    angular.module("Rebrews").service("AccountService", [AccountController.$inject, AccountController]);
}