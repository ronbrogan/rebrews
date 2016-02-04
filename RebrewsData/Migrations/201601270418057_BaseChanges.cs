namespace RebrewsData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class BaseChanges : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.RecipeFermentables", name: "BaseFermentable_Id", newName: "Base_Id");
            RenameColumn(table: "dbo.RecipeHops", name: "BaseHop_Id", newName: "Base_Id");
            RenameColumn(table: "dbo.RecipeYeasts", name: "BaseYeast_Id", newName: "Base_Id");
            RenameIndex(table: "dbo.RecipeFermentables", name: "IX_BaseFermentable_Id", newName: "IX_Base_Id");
            RenameIndex(table: "dbo.RecipeHops", name: "IX_BaseHop_Id", newName: "IX_Base_Id");
            RenameIndex(table: "dbo.RecipeYeasts", name: "IX_BaseYeast_Id", newName: "IX_Base_Id");
            AddColumn("dbo.Recipes", "Owner_Id", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Recipes", "Owner_Id");
            RenameIndex(table: "dbo.RecipeYeasts", name: "IX_Base_Id", newName: "IX_BaseYeast_Id");
            RenameIndex(table: "dbo.RecipeHops", name: "IX_Base_Id", newName: "IX_BaseHop_Id");
            RenameIndex(table: "dbo.RecipeFermentables", name: "IX_Base_Id", newName: "IX_BaseFermentable_Id");
            RenameColumn(table: "dbo.RecipeYeasts", name: "Base_Id", newName: "BaseYeast_Id");
            RenameColumn(table: "dbo.RecipeHops", name: "Base_Id", newName: "BaseHop_Id");
            RenameColumn(table: "dbo.RecipeFermentables", name: "Base_Id", newName: "BaseFermentable_Id");
        }
    }
}
