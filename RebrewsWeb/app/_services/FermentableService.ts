
module Rebrews { 

    export class FermentableController {

        constructor(private $http: ng.IHttpService) { 
        } 
        
        public get = () : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Fermentables/List", 
                method: "get", 
                data: null
            });
        };
    }
    
    angular.module("Rebrews").service("FermentableService", ["$http", FermentableController]);
}