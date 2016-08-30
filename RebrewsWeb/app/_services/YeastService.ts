
module Rebrews { 

    export class YeastController {

        public static $inject = ["$http"];
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
    
    angular.module("Rebrews").service("YeastService", [YeastController.$inject, YeastController]);
}