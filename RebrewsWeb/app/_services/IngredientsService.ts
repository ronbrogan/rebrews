
module Rebrews { 

    export class IngredientsController {

        constructor(private $http: ng.IHttpService) { 
        } 
        
        public get = (recipeId: number, ingredientType: string) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Ingredients/${ingredientType}/Recipe/${recipeId}", 
                method: "get", 
                data: null
            });
        };
        
        public postFermentable = (recipeId: number, newIngredient: RecipeFermentableViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Ingredients/Fermentables/Recipe/${recipeId}", 
                method: "post", 
                data: newIngredient
            });
        };
        
        public postHop = (recipeId: number, newIngredient: RecipeHopViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Ingredients/Hops/Recipe/${recipeId}", 
                method: "post", 
                data: newIngredient
            });
        };
        
        public postYeast = (recipeId: number, newIngredient: RecipeYeastViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Ingredients/Yeasts/Recipe/${recipeId}", 
                method: "post", 
                data: newIngredient
            });
        };
        
        public putFermentable = (recipeId: number, updatedIngredient: RecipeFermentableViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Ingredients/Fermentables/Recipe/${recipeId}", 
                method: "put", 
                data: updatedIngredient
            });
        };
        
        public putHop = (recipeId: number, updatedIngredient: RecipeHopViewModel) : ng.IHttpPromise<any> => {
            
            return this.$http<any>({
                url: "api/Ingredients/Hops/Recipe/${recipeId}", 
                method: "put", 
                data: updatedIngredient
            });
        };
        
        public putYeast = (recipeId: number, updatedIngredient: RecipeYeastViewModel) : ng.IHttpPromise<any> => {
            
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
    
    angular.module("Rebrews").service("IngredientsService", ["$http", IngredientsController]);
}