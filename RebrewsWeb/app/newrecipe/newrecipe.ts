module Rebrews.NewRecipe {

    let NewRecipeComponent: ng.IComponentOptions = {
        controller: "newRecipeController as newRecipe",
        templateUrl:"/app/newrecipe/newrecipe.html"
    }

    interface INewRecipeController {
        recipeStyles: ViewModels.RecipeStyleListViewModel[],
        newRecipe: ViewModels.RecipeViewModel,
        createRecipe(): void
    }

    export class NewRecipeController implements INewRecipeController, ng.IComponentController {
        static providerName = "newRecipeController";
        static $injector = ["StylesService", "RecipesService"];

        recipeStyles;
        newRecipe;

        constructor(public StylesService: StylesService, private RecipesService: RecipesService) {
            
        }

        createRecipe = (): void => {
            let self = this;

            self.RecipesService.createRecipe(self.newRecipe);
        }
        
        $onInit = ():void => {
            let self = this;
            console.log("WHAT");
            self.StylesService.getList().then(function (data) {
                self.recipeStyles = data;
            });
        }
    }

    angular.module("Rebrews").controller(NewRecipeController.providerName, NewRecipeController).component("newRecipe", NewRecipeComponent);
}