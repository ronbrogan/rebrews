declare module Rebrews.ViewModels {
    export class RecipeFermentableViewModel {
        id: number;
        amount: number;
        base_Id: number;
        base: BaseFermentableViewModel;
        steepOnly: boolean;
    }
}