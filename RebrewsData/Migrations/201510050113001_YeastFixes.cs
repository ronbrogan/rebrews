namespace RebrewsData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class YeastFixes : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.RecipeYeasts", name: "Yeast_Id", newName: "BaseYeast_Id");
            RenameIndex(table: "dbo.RecipeYeasts", name: "IX_Yeast_Id", newName: "IX_BaseYeast_Id");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.RecipeYeasts", name: "IX_BaseYeast_Id", newName: "IX_Yeast_Id");
            RenameColumn(table: "dbo.RecipeYeasts", name: "BaseYeast_Id", newName: "Yeast_Id");
        }
    }
}
