
module Rebrews { 

    export class IngredientsController {

        public static $inject = ["$http"];
        constructor(private $http: ng.IHttpService) { 
        } 
        
        public get = (recipeId: number, ingredientType: string) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Ingredients/${ingredientType}/Recipe/${recipeId}", 
                method: "get", 
                data: null
            });
        };
        
        public postFermentable = (recipeId: number, newIngredient: ViewModels.RecipeFermentableViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Ingredients/Fermentables/Recipe/${recipeId}", 
                method: "post", 
                data: newIngredient
            });
        };
        
        public postHop = (recipeId: number, newIngredient: ViewModels.RecipeHopViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Ingredients/Hops/Recipe/${recipeId}", 
                method: "post", 
                data: newIngredient
            });
        };
        
        public postYeast = (recipeId: number, newIngredient: ViewModels.RecipeYeastViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Ingredients/Yeasts/Recipe/${recipeId}", 
                method: "post", 
                data: newIngredient
            });
        };
        
        public putFermentable = (recipeId: number, updatedIngredient: ViewModels.RecipeFermentableViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Ingredients/Fermentables/Recipe/${recipeId}", 
                method: "put", 
                data: updatedIngredient
            });
        };
        
        public putHop = (recipeId: number, updatedIngredient: ViewModels.RecipeHopViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Ingredients/Hops/Recipe/${recipeId}", 
                method: "put", 
                data: updatedIngredient
            });
        };
        
        public putYeast = (recipeId: number, updatedIngredient: ViewModels.RecipeYeastViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Ingredients/Yeasts/Recipe/${recipeId}", 
                method: "put", 
                data: updatedIngredient
            });
        };
        
        public delete = (ingredientId: number, ingredientType: string) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Ingredients/${ingredientType}/${ingredientId}", 
                method: "delete", 
                data: null
            });
        };
    }
    
    angular.module("Rebrews").service("IngredientsService", [IngredientsController.$inject, IngredientsController]);
}