namespace RebrewsData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Recipe : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Recipes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.RecipeFermentables", "Recipe_Id", c => c.Int());
            AddColumn("dbo.RecipeHops", "Recipe_Id", c => c.Int());
            AddColumn("dbo.RecipeYeasts", "Recipe_Id", c => c.Int());
            AddColumn("dbo.BaseYeasts", "Attenuation", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AddColumn("dbo.BaseYeasts", "Type", c => c.String());
            CreateIndex("dbo.RecipeFermentables", "Recipe_Id");
            CreateIndex("dbo.RecipeHops", "Recipe_Id");
            CreateIndex("dbo.RecipeYeasts", "Recipe_Id");
            AddForeignKey("dbo.RecipeFermentables", "Recipe_Id", "dbo.Recipes", "Id");
            AddForeignKey("dbo.RecipeHops", "Recipe_Id", "dbo.Recipes", "Id");
            AddForeignKey("dbo.RecipeYeasts", "Recipe_Id", "dbo.Recipes", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.RecipeYeasts", "Recipe_Id", "dbo.Recipes");
            DropForeignKey("dbo.RecipeHops", "Recipe_Id", "dbo.Recipes");
            DropForeignKey("dbo.RecipeFermentables", "Recipe_Id", "dbo.Recipes");
            DropIndex("dbo.RecipeYeasts", new[] { "Recipe_Id" });
            DropIndex("dbo.RecipeHops", new[] { "Recipe_Id" });
            DropIndex("dbo.RecipeFermentables", new[] { "Recipe_Id" });
            DropColumn("dbo.BaseYeasts", "Type");
            DropColumn("dbo.BaseYeasts", "Attenuation");
            DropColumn("dbo.RecipeYeasts", "Recipe_Id");
            DropColumn("dbo.RecipeHops", "Recipe_Id");
            DropColumn("dbo.RecipeFermentables", "Recipe_Id");
            DropTable("dbo.Recipes");
        }
    }
}
