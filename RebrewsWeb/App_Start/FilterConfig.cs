using System.Web;
using System.Web.Mvc;
using RebrewsWeb.Controllers;
using RebrewsWeb.Core.Classes;
using RebrewsWeb.Core.Filters;

namespace RebrewsWeb
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            filters.Add(new AiHandleErrorAttribute());
            filters.Add(new RebrewsAuthenticationFilter());


        }
    }



}
