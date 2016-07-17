using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using RebrewsData;
using RebrewsViewModels.ViewModels.Recipe;
using System.Data.Entity;
using RebrewsData.Models.Recipe;

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
            var recipe = db.Recipes.Include(r => r.Style).FirstOrDefault(r => r.Id == id);

            if (recipe == null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Could not find recipe for Id: " + id);

            return Request.CreateResponse(HttpStatusCode.OK, Mapper.Map<RecipeViewModel>(recipe));
        }

        [Route("api/Recipes"), HttpPost]
        public HttpResponseMessage CreateRecipe(RecipeViewModel vm)
        {
            var recipe = new Recipe
            {
                Name = vm.Name,
                Style_Id = vm.Style_Id
            };

            db.Recipes.Add(recipe);
            db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK, Mapper.Map<RecipeViewModel>(recipe));
        }

        [Route("api/Recipes"), HttpGet]
        public HttpResponseMessage GetAllRecipes()
        {
            return Request.CreateResponse(HttpStatusCode.OK, Mapper.Map < List < RecipeViewModel >>( db.Recipes.ToList()));
        }
    }
}
