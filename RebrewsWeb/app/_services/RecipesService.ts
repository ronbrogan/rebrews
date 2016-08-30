
module Rebrews { 

    export class RecipesService {

        public static $inject = ["$http", "$rootScope"];
        constructor(private $http: ng.IHttpService, private $rootScope: RebrewsRootScope) { 
        } 
        
        public getRecipes = () : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/recipes/`, 
                method: "get", 
                data: null
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public getRecipeById = (id: number) : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Recipes/${id}`, 
                method: "get", 
                data: null
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public createRecipe = (vm: ViewModels.RecipeViewModel) : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Recipes`, 
                method: "post", 
                data: vm
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public getAllRecipes = () : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Recipes`, 
                method: "get", 
                data: null
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
    }
    
    angular.module("Rebrews").service("RecipesService", RecipesService);
}