${
    Template(Settings settings){
        settings.OutputExtension = "d.ts";
    }
}declare module Rebrews.Enums { $Enums(RebrewsData.Enums.*)[
    export enum $Name {$Values[
        $Name = $Value][,]
    }]
}