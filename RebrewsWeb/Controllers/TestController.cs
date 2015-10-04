using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.Serialization;
using System.Web.Http;
using Newtonsoft.Json;
using RebrewsData.Models;

namespace RebrewsWeb.Controllers
{
    public class TestController : ApiController
    {
        [Route("api/Data")]
        public HttpResponseMessage GetData()
        {
            List<RecipeFermentable> ings = new List<RecipeFermentable>
            {
                new RecipeFermentable()
                {
                    Id = 1,
                    Amount = 12
                },

                new RecipeFermentable()
                {
                    Id = 2,
                    Amount = 11
                },

                new RecipeFermentable()
                {
                    Id = 3,
                    Amount = (decimal).5
                },
                new RecipeFermentable()
                {
                    Id = 1,
                    Amount = 12
                },

                new RecipeFermentable()
                {
                    Id = 2,
                    Amount = 11
                },

                new RecipeFermentable()
                {
                    Id = 3,
                    Amount = (decimal)0.5
                },
            };



            return Request.CreateResponse(HttpStatusCode.OK, ings);
        }




    }
}
