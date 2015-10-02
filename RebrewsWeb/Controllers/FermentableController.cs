using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using RebrewsData;

namespace RebrewsWeb.Controllers
{
    public class FermentableController : ApiController
    {
        private RebrewsDataContext db = new RebrewsDataContext();

        [Route("api/Fermentables/Search/{query}")]
        public HttpResponseMessage GetFermentableBySearch(string query)
        {
            var result = db.Fermentables.Where(x => x.Name.ToLower().Contains(query.ToLower())).ToList();

            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

    }
}
