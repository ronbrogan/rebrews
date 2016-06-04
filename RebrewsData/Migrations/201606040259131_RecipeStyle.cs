namespace RebrewsData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RecipeStyle : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Recipes", "Style_Id", c => c.Int(nullable: false, defaultValue: 1, defaultValueSql: "1"));
            CreateIndex("dbo.Recipes", "Style_Id");
            AddForeignKey("dbo.Recipes", "Style_Id", "dbo.RecipeStyles", "Id", cascadeDelete: false);
            DropColumn("dbo.Recipes", "Profile_OriginalGravity");
            DropColumn("dbo.Recipes", "Profile_FinalGravity");
            DropColumn("dbo.Recipes", "Profile_AlcoholByVolume");
            DropColumn("dbo.Recipes", "Profile_InternationalBitteringUnits");
            DropColumn("dbo.Recipes", "Profile_ColorSRM");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Recipes", "Profile_ColorSRM", c => c.Double(nullable: false));
            AddColumn("dbo.Recipes", "Profile_InternationalBitteringUnits", c => c.Double(nullable: false));
            AddColumn("dbo.Recipes", "Profile_AlcoholByVolume", c => c.Double(nullable: false));
            AddColumn("dbo.Recipes", "Profile_FinalGravity", c => c.Double(nullable: false));
            AddColumn("dbo.Recipes", "Profile_OriginalGravity", c => c.Double(nullable: false));
            DropForeignKey("dbo.Recipes", "Style_Id", "dbo.RecipeStyles");
            DropIndex("dbo.Recipes", new[] { "Style_Id" });
            DropColumn("dbo.Recipes", "Style_Id");
        }
    }
}
