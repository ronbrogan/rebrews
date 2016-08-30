${
    using Typewriter.Extensions.WebApi;

	Template(Settings settings)
    {
        //settings.IncludeProject("Project.Name");
        settings.OutputExtension = ".ts";
        
        settings.OutputFilenameFactory = file => System.IO.Path.ChangeExtension(file.Name.Replace("Controller", "Service"), settings.OutputExtension);
    }

    string ReturnType(Method m)
	{
		switch (m.Type.Name){
			case "HttpResponseMessage":
			case "IHttpActionResult":
				return "any";

			default:
				return "ViewModels." + m.Type.Name;
		}
	}

    string ServiceName(Class c) => c.Name.Replace("Controller", "Service");

    string FullType(Parameter p){
       if(p.Type.IsEnum){
            return "Enums." + p.Type.Name;
       }

       if(!p.Type.IsPrimitive)
        return "ViewModels." + p.Type.Name;

       return p.Type.Name;
    }

}
module Rebrews { $Classes(:ApiController)[

    export class $Name {

        public static $inject = ["$http"];
        constructor(private $http: ng.IHttpService) { 
        } $Methods[
        
        public $name = ($Parameters[$name: $FullType][, ]) : ng.IHttpPromise<$ReturnType> => {
            
            return this.$http<$ReturnType>({
                url: "$Url", 
                method: "$HttpMethod", 
                data: $RequestData
            });
        };]
    }
    
    angular.module("Rebrews").service("$ServiceName", [$Name.$inject, $Name]);]
}