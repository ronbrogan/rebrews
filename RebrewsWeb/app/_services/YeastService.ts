
module Rebrews { 

    export class YeastController {

        constructor(private $http: ng.IHttpService) { 
        } 
        
        public get = () : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Yeasts/List", 
                method: "get", 
                data: null
            });
        };
    }
    
    angular.module("Rebrews").service("YeastService", ["$http", YeastController]);
}