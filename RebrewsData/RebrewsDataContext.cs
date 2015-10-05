using System;
using System.Collections.Generic;
using System.Data.Entity;
using RebrewsData.Models;

namespace RebrewsData
{
    public class RebrewsDataContext : DbContext
    {
        // Base Items
        public DbSet<BaseFermentable> Fermentables { get; set; }
        public DbSet<BaseHop> Hops { get; set; }
        public DbSet<BaseYeast> Yeasts { get; set; }


        //Recipe Items
        public DbSet<RecipeFermentable> RecipeFermentables { get; set; }
        public DbSet<RecipeHop> RecipeHops { get; set; }
        public DbSet<RecipeYeast> RecipeYeasts { get; set; }

        public DbSet<Recipe> Recipes { get; set; }


        //Brewday Items
    }
}