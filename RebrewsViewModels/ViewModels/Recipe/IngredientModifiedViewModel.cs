using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RebrewsViewModels.ViewModels.Recipe
{
    public class IngredientModifiedViewModel
    {
        public RecipeProfileViewModel RecipeProfile { get; set; }
        public dynamic UpdatedIngredients { get; set; }
    }
}