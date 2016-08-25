
module Rebrews { 

    export class RecipesController {

        constructor(private $http: ng.IHttpService) { 
        } 
        
        public getRecipes = () : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/recipes/", 
                method: "get", 
                data: null
            });
        };
        
        public getRecipesById = (id: number) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Recipes/${id}", 
                method: "get", 
                data: null
            });
        };
        
        public createRecipe = (vm: RecipeViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Recipes", 
                method: "post", 
                data: vm
            });
        };
        
        public getAllRecipes = () : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Recipes", 
                method: "get", 
                data: null
            });
        };
    }
    
    angular.module("Rebrews").service("RecipesService", ["$http", RecipesController]);
}