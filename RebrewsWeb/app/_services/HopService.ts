
module Rebrews { 

    export class HopController {

        constructor(private $http: ng.IHttpService) { 
        } 
        
        public get = () : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Hops/List", 
                method: "get", 
                data: null
            });
        };
    }
    
    angular.module("Rebrews").service("HopService", ["$http", HopController]);
}