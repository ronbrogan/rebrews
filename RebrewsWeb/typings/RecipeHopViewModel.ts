module Rebrews { 
    export interface RecipeHopViewModel { 
        id: number;
        amount: number;
        base_Id: number;
        base: BaseHopViewModel;
        boilTime: number;
        dryHop: boolean;
        isLeaf: boolean;
    }
}