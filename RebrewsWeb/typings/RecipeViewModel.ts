module Rebrews { 
    export interface RecipeViewModel { 
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