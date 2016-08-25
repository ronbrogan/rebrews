module Rebrews { 
    export interface RecipeYeastViewModel { 
        id: number;
        amount: number;
        base_Id: number;
        base: BaseYeastViewModel;
    }
}