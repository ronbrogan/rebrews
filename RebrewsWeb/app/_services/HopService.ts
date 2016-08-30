
module Rebrews { 

    export class HopService {

        public static $inject = ["$http", "$rootScope"];
        constructor(private $http: ng.IHttpService, private $rootScope: RebrewsRootScope) { 
        } 
        
        public get = () : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Hops/List`, 
                method: "get", 
                data: null
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
    }
    
    angular.module("Rebrews").service("HopService", HopService);
}