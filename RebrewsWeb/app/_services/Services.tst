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
				return m.Type.Name;
		}
	}

    string ServiceName(Class c) => c.Name.Replace("Controller", "Service");

}
module Rebrews { $Classes(:ApiController)[

    export class $Name {

        constructor(private $http: ng.IHttpService) { 
        } $Methods[
        
        public $name = ($Parameters[$name: $Type][, ]) : ng.IHttpPromise<$ReturnType> => {
            
            return this.$http<$ReturnType>({
                url: "$Url", 
                method: "$HttpMethod", 
                data: $RequestData
            });
        };]
    }
    
    angular.module("Rebrews").service("$ServiceName", ["$http", $Name]);]
}