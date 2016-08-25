module Rebrews { 
    export interface RecipeStyleViewModel { 
        id: number;
        styleName: string;
        lowOG: number;
        hiog: number;
        lowFG: number;
        hifg: number;
        lowABV: number;
        hiabv: number;
        lowIBU: number;
        hiibu: number;
        lowSRM: number;
        hisrm: number;
        volumesCO2: number;
    }
}