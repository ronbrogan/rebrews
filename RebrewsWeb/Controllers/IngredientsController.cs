using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Runtime.Serialization;
using System.Web.Http;
using System.Web.Http.Description;
using AutoMapper;
using Newtonsoft.Json;
using RebrewsData;
using RebrewsData.Models.Recipe;
using RebrewsViewModels.ViewModels.Recipe;
using System.Linq.Expressions;
using RebrewsWeb.Core;

namespace RebrewsWeb.Controllers
{
    public class IngredientsController : ApiController
    {
        private RebrewsDataContext db = new RebrewsDataContext();

        [Route("api/Ingredients/{ingredientType}/Recipe/{recipeId}")]
        public HttpResponseMessage Get(int recipeId, string ingredientType)
        {
            Expression<Func<RecipeIngredient, bool>> query = x => x.Recipe_Id == recipeId;

            switch (ingredientType.ToLower())
            {
                case "fermentables":
                    return Request.CreateResponse(HttpStatusCode.OK, db.RecipeFermentables.Where(query).ToList().Select(Mapper.Map<RecipeFermentableViewModel>));
                case "hops":
                    return Request.CreateResponse(HttpStatusCode.OK, db.RecipeHops.Where(query).ToList().Select(Mapper.Map<RecipeHopViewModel>));
                case "yeasts":
                    return Request.CreateResponse(HttpStatusCode.OK, db.RecipeYeasts.Where(query).ToList().Select(Mapper.Map<RecipeYeastViewModel>));
                default:
                    throw new ArgumentException("Unknown ingredient type.");

            }
        }

        #region Posts

        [Route("api/Ingredients/Fermentables/Recipe/{recipeId}")]
        public HttpResponseMessage PostFermentable(int recipeId, [FromBody] RecipeFermentableViewModel newIngredient)
        {
            var ferm = Mapper.Map<RecipeFermentable>(newIngredient);

            ferm.Recipe_Id = recipeId;

            db.RecipeFermentables.Add(ferm);

            db.SaveChanges();

            var recipe = db.Recipes
                            .Include(r => r.Fermentables)
                            .FirstOrDefault(r => r.Id == recipeId);

            var recipeVm = Mapper.Map<RecipeViewModel>(recipe);

            return Request.CreateResponse(HttpStatusCode.OK, new IngredientModifiedViewModel
            {
                RecipeProfile = recipeVm.Profile,
                UpdatedIngredients = recipeVm.Fermentables
            });
        }

        [Route("api/Ingredients/Hops/Recipe/{recipeId}")]
        public HttpResponseMessage PostHop(int recipeId, [FromBody] RecipeHopViewModel newIngredient)
        {
            var hop = Mapper.Map<RecipeHop>(newIngredient);

            hop.Recipe_Id = recipeId;

            db.RecipeHops.Add(hop);

            db.SaveChanges();

            var recipe = db.Recipes
                            .Include(r => r.Hops)
                            .FirstOrDefault(r => r.Id == recipeId);

            var recipeVm = Mapper.Map<RecipeViewModel>(recipe);

            return Request.CreateResponse(HttpStatusCode.OK, new IngredientModifiedViewModel
            {
                RecipeProfile = recipeVm.Profile,
                UpdatedIngredients = recipeVm.Hops
            });
        }

        [Route("api/Ingredients/Yeasts/Recipe/{recipeId}")]
        public HttpResponseMessage PostYeast(int recipeId, [FromBody] RecipeYeastViewModel newIngredient)
        {
            var yeast = Mapper.Map<RecipeYeast>(newIngredient);

            yeast.Recipe_Id = recipeId;

            db.RecipeYeasts.Add(yeast);

            db.SaveChanges();

            var recipe = db.Recipes
                            .Include(r => r.Yeasts)
                            .FirstOrDefault(r => r.Id == recipeId);

            var recipeVm = Mapper.Map<RecipeViewModel>(recipe);

            return Request.CreateResponse(HttpStatusCode.OK, new IngredientModifiedViewModel
            {
                RecipeProfile = recipeVm.Profile,
                UpdatedIngredients = recipeVm.Yeasts
            });
        }

        #endregion

        #region Puts

        [Route("api/Ingredients/Fermentables/Recipe/{recipeId}")]
        public HttpResponseMessage PutFermentable(int recipeId, [FromBody] RecipeFermentableViewModel updatedIngredient)
        {
            var currFerm = db.RecipeFermentables.FirstOrDefault(i => i.Id == updatedIngredient.Id && i.Recipe_Id == recipeId);

            if (currFerm == null)
                throw new ArgumentNullException(nameof(updatedIngredient), "No recipe fermentable found for provided view model, cannot update.");

            db.Entry(currFerm).CurrentValues.SetValues(updatedIngredient);

            db.SaveChanges();

            var recipe = db.Recipes
                            .Include(r => r.Fermentables)
                            .FirstOrDefault(r => r.Id == recipeId);

            var recipeVm = Mapper.Map<RecipeViewModel>(recipe);

            return Request.CreateResponse(HttpStatusCode.OK, new IngredientModifiedViewModel
            {
                RecipeProfile = recipeVm.Profile,
                UpdatedIngredients = recipeVm.Fermentables
            });
        }

        [Route("api/Ingredients/Hops/Recipe/{recipeId}")]
        public HttpResponseMessage PutHop(int recipeId, [FromBody] RecipeHopViewModel updatedIngredient)
        {
            var currFerm = db.RecipeHops.FirstOrDefault(i => i.Id == updatedIngredient.Id && i.Recipe_Id == recipeId);

            if (currFerm == null)
                throw new ArgumentNullException(nameof(updatedIngredient), "No recipe hop found for provided view model, cannot update.");

            db.Entry(currFerm).CurrentValues.SetValues(updatedIngredient);

            db.SaveChanges();

            var recipe = db.Recipes
                            .Include(r => r.Hops)
                            .FirstOrDefault(r => r.Id == recipeId);

            var recipeVm = Mapper.Map<RecipeViewModel>(recipe);

            return Request.CreateResponse(HttpStatusCode.OK, new IngredientModifiedViewModel
            {
                RecipeProfile = recipeVm.Profile,
                UpdatedIngredients = recipeVm.Hops
            });
        }

        [Route("api/Ingredients/Yeasts/Recipe/{recipeId}")]
        public HttpResponseMessage PutYeast(int recipeId, [FromBody] RecipeYeastViewModel updatedIngredient)
        {
            var currFerm = db.RecipeYeasts.FirstOrDefault(i => i.Id == updatedIngredient.Id && i.Recipe_Id == recipeId);

            if (currFerm == null)
                throw new ArgumentNullException(nameof(updatedIngredient), "No recipe yeast found for provided view model, cannot update.");

            db.Entry(currFerm).CurrentValues.SetValues(updatedIngredient);

            db.SaveChanges();

            var recipe = db.Recipes
                            .Include(r => r.Yeasts)
                            .FirstOrDefault(r => r.Id == recipeId);

            var recipeVm = Mapper.Map<RecipeViewModel>(recipe);

            return Request.CreateResponse(HttpStatusCode.OK, new IngredientModifiedViewModel
            {
                RecipeProfile = recipeVm.Profile,
                UpdatedIngredients = recipeVm.Yeasts
            });
        }
        #endregion

        [Route("api/Ingredients/{ingredientType}/{ingredientId}")]
        public HttpResponseMessage Delete(int ingredientId, string ingredientType)
        {
            int recipeId;
            switch (ingredientType.ToLower())
            {
                case "fermentables":
                    var ferm = db.RecipeFermentables.Find(ingredientId);
                    recipeId = ferm.Recipe_Id.Value;
                    db.Entry(ferm).State = EntityState.Deleted;
                    break;
                case "hops":
                    var hop = db.RecipeHops.Find(ingredientId);
                    recipeId = hop.Recipe_Id.Value;
                    db.Entry(hop).State = EntityState.Deleted;
                    break;
                case "yeasts":
                    var yeast = db.RecipeYeasts.Find(ingredientId);
                    recipeId = yeast.Recipe_Id.Value;
                    db.Entry(yeast).State = EntityState.Deleted;
                    break;
                default:
                    return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            db.SaveChanges();

            var recipe = db.Recipes.Find(recipeId);

            var recipeVm = Mapper.Map<RecipeViewModel>(recipe);

            return Request.CreateResponse(HttpStatusCode.OK, new IngredientModifiedViewModel{
                RecipeProfile = recipeVm.Profile,
                UpdatedIngredients = recipeVm.GetType().GetProperty(ingredientType.Capitalize()).GetValue(recipeVm)
            });
        }

    }
}
