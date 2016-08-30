
module Rebrews { 

    export class StylesService {

        public static $inject = ["$http", "$rootScope"];
        constructor(private $http: ng.IHttpService, private $rootScope: RebrewsRootScope) { 
        } 
        
        public getList = () : ng.IHttpPromise<ViewModels.RecipeStyleListViewModel[]> => {
            let self = this;

            return self.$http<ViewModels.RecipeStyleListViewModel[]>({
                url: `api/styles/`, 
                method: "get", 
                data: null
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
    }
    
    angular.module("Rebrews").service("StylesService", StylesService);
}