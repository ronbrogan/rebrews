using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using RebrewsData;
using RebrewsViewModels.ViewModels.Base;

namespace RebrewsWeb.Controllers.IngredientControllers
{

    public class HopController : ApiController
    {
        private RebrewsDataContext db = new RebrewsDataContext();

        [Route("api/Hops/List")]
        public HttpResponseMessage Get()
        {
            //Base hops will not expand uncontrollably, reasonably safe to blast all over the wire.
            var items = db.Hops.ToList();

            return Request.CreateResponse(HttpStatusCode.OK, items.Select(Mapper.Map<BaseHopViewModel>));
        }
    }
}
