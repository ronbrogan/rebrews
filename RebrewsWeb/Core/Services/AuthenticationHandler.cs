using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization.Formatters.Binary;
using System.Security.Claims;
using System.Web;
using AutoMapper;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using Newtonsoft.Json;
using RebrewsData.Models.Authentication;
using RebrewsViewModels.ViewModels.Authentication;

namespace RebrewsWeb.Core.Services
{
    public class AuthenticationHandler
    {

        private IAuthenticationManager AuthenticationManager;

        public AuthenticationHandler(IAuthenticationManager authMan)
        {
            AuthenticationManager = authMan;
        }

        public void SignInUser(ApiUser user, bool isPersistent = false)
        {
            var cookieData = Mapper.Map<CookieViewModel>(user);
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Email),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim("User", cookieData.GetSerialized())
            };


            var identity = new ClaimsIdentity(claims, DefaultAuthenticationTypes.ApplicationCookie);

            AuthenticationManager.SignIn(new AuthenticationProperties()
            {
                AllowRefresh = true,
                IsPersistent = isPersistent,
                ExpiresUtc = DateTime.UtcNow.AddHours(12)

            }, identity);
        }

        public void SignOutUser()
        {
            AuthenticationManager.SignOut(DefaultAuthenticationTypes.ApplicationCookie, DefaultAuthenticationTypes.ExternalCookie);
        }

    }
}