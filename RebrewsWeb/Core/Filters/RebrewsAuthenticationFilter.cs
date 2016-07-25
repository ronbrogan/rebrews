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
                var userObject = CookieViewModel.DeserializeCookie(userPayload.Value);

                if(userObject.CookieVersion != new CookieViewModel().CookieVersion)
                {
                    filterContext.HttpContext.GetOwinContext().Authentication.SignOut();
                    var defaultPrincipal = new ClaimsPrincipal(new ClaimsIdentity(new List<Claim> { new Claim("name", "") }));
                    filterContext.HttpContext.User = defaultPrincipal;
                }
                else
                {   
                    filterContext.HttpContext.Items.Add("WebContext", WebContext.CreateContext(userObject));
                }
            }

            base.OnActionExecuting(filterContext);
        }

    }
}