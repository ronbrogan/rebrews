module Rebrews { 
    export interface RecipeFermentableViewModel { 
        id: number;
        amount: number;
        base_Id: number;
        base: BaseFermentableViewModel;
        steepOnly: boolean;
    }
}