using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using RebrewsData.Models.Authentication;
using RebrewsViewModels.ViewModels.Authentication;
using RebrewsWeb.Core.Filters;

namespace RebrewsWeb.Core
{
    public class WebContext
    {
        /// This is populated from <see cref="RebrewsAuthenticationFilter"/> 
        public static WebContext Current => HttpContext.Current.Items["WebContext"] as WebContext;

        public CookieViewModel User { get; set; }

        public static WebContext CreateContext(CookieViewModel userData)
        {
            var ctx = new WebContext {User = userData};

            return ctx;
        }

    }
}