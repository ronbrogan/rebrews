using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Web;
using System.Web.Mvc;
using RebrewsViewModels.ViewModels.Authentication;

namespace RebrewsWeb.Core.Filters
{
    
    public class RebrewsAuthenticationFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var httpUser = (ClaimsPrincipal)filterContext.HttpContext.User;

            var userPayload = httpUser.Claims.FirstOrDefault(c => c.Type == "User");

            if(!string.IsNullOrEmpty(userPayload?.Value))
            {
                var userObject = CookieViewModel.DecompressCookieViewModel(userPayload.Value);

                filterContext.HttpContext.Items.Add("WebContext", WebContext.CreateContext(userObject));
            }

            base.OnActionExecuting(filterContext);
        }

    }
}