
module Rebrews { 

    export class StylesController {

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
    
    angular.module("Rebrews").service("StylesService", ["$http", StylesController]);
}