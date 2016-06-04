using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using RebrewsData;

namespace RebrewsWeb.Controllers
{
    public class StylesController : ApiController
    {
        private RebrewsDataContext db = new RebrewsDataContext();


        public HttpResponseMessage GetList()
        {
            var styles = db.RecipeStyles.ToList();

            return Request.CreateResponse(HttpStatusCode.OK, styles.Select(s => new { Name = s.StyleName, Id = s.Id }));
        }
    }
}