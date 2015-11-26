using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using RebrewsData;
using RebrewsViewModels.ViewModels.Recipe;

namespace RebrewsWeb.Controllers
{
    public class RecipesController : ApiController
    {
        private RebrewsDataContext db = new RebrewsDataContext();

        public HttpResponseMessage GetRecipes()
        {
            var topRecipes = db.Recipes.Take(50).ToList();

            return Request.CreateResponse(HttpStatusCode.OK, topRecipes.Select(Mapper.Map<RecipeViewModel>));
        }

        [Route("api/Recipes/{id}")]
        public HttpResponseMessage GetRecipesById(int id)
        {
            var recipe = db.Recipes.Find(id);

            return Request.CreateResponse(HttpStatusCode.OK, Mapper.Map<RecipeViewModel>(recipe));
        }

    }
}
