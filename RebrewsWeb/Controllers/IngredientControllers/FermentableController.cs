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

    public class FermentableController : ApiController
    {
        private RebrewsDataContext db = new RebrewsDataContext();

        [Route("api/Fermentables/List")]
        public HttpResponseMessage Get()
        {
            //Base fermentables will not expand uncontrollably, reasonably safe to blast all over the wire.
            var items = db.Fermentables.ToList();

            return Request.CreateResponse(HttpStatusCode.OK, items.Select(Mapper.Map<BaseFermentableViewModel>));
        }
    }
}
