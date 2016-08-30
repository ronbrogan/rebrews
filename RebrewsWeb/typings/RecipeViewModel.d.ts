declare module Rebrews.ViewModels {
    export class RecipeViewModel {
        id: number;
        name: string;
        fermentables: RecipeFermentableViewModel[];
        hops: RecipeHopViewModel[];
        yeasts: RecipeYeastViewModel[];
        profile: RecipeProfileViewModel;
        style: RecipeStyleViewModel;
        style_Id: number;
    }
}