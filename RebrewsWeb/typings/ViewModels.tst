${
    Template(Settings settings){
        settings.OutputExtension = "d.ts";
    }

    public string TypeName(Property p){
        if (p.Type.IsEnum){
         return "Enums." + p.Type.Name;
        }
        return p.Type.Name;
    }
}declare module Rebrews.ViewModels {$Classes(RebrewsViewModels.ViewModels.*)[
    export class $Name {$Properties[
        $name: $TypeName;]
    }
]}