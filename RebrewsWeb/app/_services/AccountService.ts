
module Rebrews { 

    export class AccountController {

        constructor(private $http: ng.IHttpService) { 
        } 
        
        public getUserInfo = () : ng.IHttpPromise<UserInfoViewModel> => {
            
            return this.$http<UserInfoViewModel>({
                url: "api/Account/UserInfo", 
                method: "get", 
                data: null
            });
        };
        
        public login = (login: LoginViewModel) : ng.IHttpPromise<any> => {
            
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
        
        public getManageInfo = (returnUrl: string, generateState: boolean) : ng.IHttpPromise<ManageInfoViewModel> => {
            
            return this.$http<ManageInfoViewModel>({
                url: "api/Account/ManageInfo?returnUrl=${returnUrl}&generateState=${generateState}", 
                method: "get", 
                data: null
            });
        };
        
        public changePassword = (model: ChangePasswordViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Account/ChangePassword", 
                method: "post", 
                data: model
            });
        };
        
        public setPassword = (model: SetPasswordViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Account/SetPassword", 
                method: "post", 
                data: model
            });
        };
        
        public addExternalLogin = (model: AddExternalLoginViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Account/AddExternalLogin", 
                method: "post", 
                data: model
            });
        };
        
        public removeLogin = (model: RemoveLoginViewModel) : ng.IHttpPromise<any> => {
            
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
        
        public getExternalLogins = (returnUrl: string, generateState: boolean) : ng.IHttpPromise<ExternalLoginViewModel[]> => {
            
            return this.$http<ExternalLoginViewModel[]>({
                url: "api/Account/ExternalLogins?returnUrl=${returnUrl}&generateState=${generateState}", 
                method: "get", 
                data: null
            });
        };
        
        public register = (model: RegisterViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Account/Register", 
                method: "post", 
                data: model
            });
        };
        
        public registerExternal = (model: RegisterExternalViewModel) : ng.IHttpPromise<any> => {
            
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
    
    angular.module("Rebrews").service("AccountService", ["$http", AccountController]);
}