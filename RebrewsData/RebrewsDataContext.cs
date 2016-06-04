using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;
using RebrewsData.Models;
using RebrewsData.Models.Authentication;
using RebrewsData.Models.Base;
using RebrewsData.Models.Recipe;

namespace RebrewsData
{
    public class RebrewsDataContext : IdentityDbContext<ApiUser>
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
        public DbSet<RecipeStyle> RecipeStyles { get; set; }

        //Brewday Items



        public RebrewsDataContext() : base("RebrewsDataContext")
        {
            Database.SetInitializer<RebrewsDataContext>(null);
            Database.Initialize(true);
        }

        public static RebrewsDataContext Create()
        {
            return new RebrewsDataContext();
        }

        protected override void OnModelCreating(System.Data.Entity.DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<IdentityUser>().ToTable("ApiUsers");
            modelBuilder.Entity<ApiUser>().ToTable("ApiUsers");
            modelBuilder.Entity<IdentityUserRole>().ToTable("ApiUserRoles");
            modelBuilder.Entity<IdentityUserLogin>().ToTable("ApiUserLogins");
            modelBuilder.Entity<IdentityUserClaim>().ToTable("ApiUserClaims");
            modelBuilder.Entity<IdentityRole>().ToTable("ApiRoles");
        }
    }
}