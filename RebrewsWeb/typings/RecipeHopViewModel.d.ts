declare module Rebrews.ViewModels {
    export class RecipeHopViewModel {
        id: number;
        amount: number;
        base_Id: number;
        base: BaseHopViewModel;
        boilTime: number;
        dryHop: boolean;
        isLeaf: boolean;
    }
}