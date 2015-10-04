using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RebrewsData.Models
{
    public class Recipe
    {
        //Collections of ingredients 
        public ICollection<RecipeFermentable> Fermentables { get; set; }

        public ICollection<RecipeHop> Hops { get; set; }

        public ICollection<RecipeYeast> Yeasts { get; set; } 

    }
}