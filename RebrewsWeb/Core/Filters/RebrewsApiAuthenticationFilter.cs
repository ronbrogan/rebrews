using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
using Newtonsoft.Json;
using RebrewsViewModels.ViewModels.Authentication;

namespace RebrewsWeb.Core.Filters
{
    public class RebrewsApiAuthenticationFilter : AuthorizationFilterAttribute
    {
        public override void OnAuthorization(HttpActionContext actionContext)
        {
            if (!actionContext.RequestContext.Principal.Identity.IsAuthenticated)
            {
                return;
            }

            ClaimsIdentity identity = actionContext.RequestContext.Principal.Identity as ClaimsIdentity;

            if (identity != null)
            {
                var user = identity;

                var claimsList = user.Claims.ToList();

                var userPayload = claimsList.FirstOrDefault(c => c.Type == "User");

                var userObject = CookieViewModel.DeserializeCookie(userPayload.Value);

                if (userObject.CookieVersion != new CookieViewModel().CookieVersion)
                {
                    HttpContext.Current.GetOwinContext().Authentication.SignOut();
                    var defaultPrincipal = new ClaimsPrincipal(new ClaimsIdentity(new List<Claim> { new Claim("name", "") }));
                    actionContext.RequestContext.Principal = defaultPrincipal;
                }
                else
                {
                    HttpContext.Current.Items.Add("WebContext", WebContext.CreateContext(userObject));
                }
            }

            base.OnAuthorization(actionContext);
        }
    }
}