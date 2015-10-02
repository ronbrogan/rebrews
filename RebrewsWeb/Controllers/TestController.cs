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
            List<Fermentable> ings = new List<Fermentable>
            {
                new Fermentable()
                {
                    Id = 1,
                    Amount = 12,
                    Name="2 Row",
                    PPG = 34,
                    DegreesLovibond = 4
                },

                new Fermentable()
                {
                    Id = 2,
                    Amount = 11,
                    Name="Wheat",
                    PPG = 31,
                    DegreesLovibond = 2
                },

                new Fermentable()
                {
                    Id = 3,
                    Amount = .5,
                    Name="Crystal 60",
                    PPG = 12,
                    DegreesLovibond = 60
                },
                new Fermentable()
                {
                    Id = 1,
                    Amount = 12,
                    Name="2 Row",
                    PPG = 34,
                    DegreesLovibond = 4
                },

                new Fermentable()
                {
                    Id = 2,
                    Amount = 11,
                    Name="Wheat",
                    PPG = 31,
                    DegreesLovibond = 2
                },

                new Fermentable()
                {
                    Id = 3,
                    Amount = .5,
                    Name="Crystal 60",
                    PPG = 12,
                    DegreesLovibond = 60
                },
            };



            return Request.CreateResponse(HttpStatusCode.OK, ings);
        }




    }

    [DataContract]
    public static class TestData
    {
        
        public static dynamic value = new[]
        {
            new
            {
                itemName = "2 Row",
                property1 = "4degL",
                property2 = "34ppg",
                amount = "12 lb"
            },
            new
            {
                itemName = "White Wheat",
                property1 = "4degL",
                property2 = "26ppg",
                amount = "2 lb"
            },
            new
            {
                itemName = "Crystal 60",
                property1 = "60degL",
                property2 = "4ppg",
                amount = "0.5 lb"
            }
        };
    }
}
