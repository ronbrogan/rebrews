
module Rebrews { 

    export class IngredientsService {

        public static $inject = ["$http", "$rootScope"];
        constructor(private $http: ng.IHttpService, private $rootScope: RebrewsRootScope) { 
        } 
        
        public get = (recipeId: number, ingredientType: string) : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Ingredients/${ingredientType}/Recipe/${recipeId}`, 
                method: "get", 
                data: null
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public postFermentable = (recipeId: number, newIngredient: ViewModels.RecipeFermentableViewModel) : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Ingredients/Fermentables/Recipe/${recipeId}`, 
                method: "post", 
                data: newIngredient
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public postHop = (recipeId: number, newIngredient: ViewModels.RecipeHopViewModel) : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Ingredients/Hops/Recipe/${recipeId}`, 
                method: "post", 
                data: newIngredient
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public postYeast = (recipeId: number, newIngredient: ViewModels.RecipeYeastViewModel) : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Ingredients/Yeasts/Recipe/${recipeId}`, 
                method: "post", 
                data: newIngredient
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public putFermentable = (recipeId: number, updatedIngredient: ViewModels.RecipeFermentableViewModel) : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Ingredients/Fermentables/Recipe/${recipeId}`, 
                method: "put", 
                data: updatedIngredient
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public putHop = (recipeId: number, updatedIngredient: ViewModels.RecipeHopViewModel) : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Ingredients/Hops/Recipe/${recipeId}`, 
                method: "put", 
                data: updatedIngredient
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public putYeast = (recipeId: number, updatedIngredient: ViewModels.RecipeYeastViewModel) : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Ingredients/Yeasts/Recipe/${recipeId}`, 
                method: "put", 
                data: updatedIngredient
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
        
        public delete = (ingredientId: number, ingredientType: string) : ng.IHttpPromise<any> => {
            let self = this;

            return self.$http<any>({
                url: `api/Ingredients/${ingredientType}/${ingredientId}`, 
                method: "delete", 
                data: null
            }).then(function(result){
                return result.data;
            }).catch(self.$rootScope.errHandler);
        };
    }
    
    angular.module("Rebrews").service("IngredientsService", IngredientsService);
}