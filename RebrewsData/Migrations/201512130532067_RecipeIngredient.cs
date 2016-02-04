namespace RebrewsData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RecipeIngredient : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.RecipeFermentables", "BaseFermentable_Id", "dbo.BaseFermentables");
            DropForeignKey("dbo.RecipeHops", "BaseHop_Id", "dbo.BaseHops");
            DropForeignKey("dbo.RecipeYeasts", "BaseYeast_Id", "dbo.BaseYeasts");
            DropIndex("dbo.RecipeFermentables", new[] { "BaseFermentable_Id" });
            DropIndex("dbo.RecipeHops", new[] { "BaseHop_Id" });
            DropIndex("dbo.RecipeYeasts", new[] { "BaseYeast_Id" });
            AlterColumn("dbo.RecipeFermentables", "BaseFermentable_Id", c => c.Int(nullable: false));
            AlterColumn("dbo.RecipeHops", "BaseHop_Id", c => c.Int(nullable: false));
            AlterColumn("dbo.RecipeYeasts", "BaseYeast_Id", c => c.Int(nullable: false));
            CreateIndex("dbo.RecipeFermentables", "BaseFermentable_Id");
            CreateIndex("dbo.RecipeHops", "BaseHop_Id");
            CreateIndex("dbo.RecipeYeasts", "BaseYeast_Id");
            AddForeignKey("dbo.RecipeFermentables", "BaseFermentable_Id", "dbo.BaseFermentables", "Id", cascadeDelete: true);
            AddForeignKey("dbo.RecipeHops", "BaseHop_Id", "dbo.BaseHops", "Id", cascadeDelete: true);
            AddForeignKey("dbo.RecipeYeasts", "BaseYeast_Id", "dbo.BaseYeasts", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.RecipeYeasts", "BaseYeast_Id", "dbo.BaseYeasts");
            DropForeignKey("dbo.RecipeHops", "BaseHop_Id", "dbo.BaseHops");
            DropForeignKey("dbo.RecipeFermentables", "BaseFermentable_Id", "dbo.BaseFermentables");
            DropIndex("dbo.RecipeYeasts", new[] { "BaseYeast_Id" });
            DropIndex("dbo.RecipeHops", new[] { "BaseHop_Id" });
            DropIndex("dbo.RecipeFermentables", new[] { "BaseFermentable_Id" });
            AlterColumn("dbo.RecipeYeasts", "BaseYeast_Id", c => c.Int());
            AlterColumn("dbo.RecipeHops", "BaseHop_Id", c => c.Int());
            AlterColumn("dbo.RecipeFermentables", "BaseFermentable_Id", c => c.Int());
            CreateIndex("dbo.RecipeYeasts", "BaseYeast_Id");
            CreateIndex("dbo.RecipeHops", "BaseHop_Id");
            CreateIndex("dbo.RecipeFermentables", "BaseFermentable_Id");
            AddForeignKey("dbo.RecipeYeasts", "BaseYeast_Id", "dbo.BaseYeasts", "Id");
            AddForeignKey("dbo.RecipeHops", "BaseHop_Id", "dbo.BaseHops", "Id");
            AddForeignKey("dbo.RecipeFermentables", "BaseFermentable_Id", "dbo.BaseFermentables", "Id");
        }
    }
}
