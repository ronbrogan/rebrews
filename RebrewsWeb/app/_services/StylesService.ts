
module Rebrews { 

    export class StylesController {

        public static $inject = ["$http"];
        constructor(private $http: ng.IHttpService) { 
        } 
        
        public getList = () : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/styles/", 
                method: "get", 
                data: null
            });
        };
    }
    
    angular.module("Rebrews").service("StylesService", [StylesController.$inject, StylesController]);
}