using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using Microsoft.Owin;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Owin;
using RebrewsWeb.Core;

[assembly: OwinStartup(typeof(RebrewsWeb.Startup))]

namespace RebrewsWeb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            AutoMapperConfigurator.Configure();


        }
    }
}
