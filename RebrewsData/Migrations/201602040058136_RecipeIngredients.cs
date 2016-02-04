namespace RebrewsData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RecipeIngredients : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Recipes", "Profile_OriginalGravity", c => c.Double(nullable: false));
            AddColumn("dbo.Recipes", "Profile_FinalGravity", c => c.Double(nullable: false));
            AddColumn("dbo.Recipes", "Profile_AlcoholByVolume", c => c.Double(nullable: false));
            AddColumn("dbo.Recipes", "Profile_InternationalBitteringUnits", c => c.Double(nullable: false));
            AddColumn("dbo.Recipes", "Profile_ColorSRM", c => c.Double(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Recipes", "Profile_ColorSRM");
            DropColumn("dbo.Recipes", "Profile_InternationalBitteringUnits");
            DropColumn("dbo.Recipes", "Profile_AlcoholByVolume");
            DropColumn("dbo.Recipes", "Profile_FinalGravity");
            DropColumn("dbo.Recipes", "Profile_OriginalGravity");
        }
    }
}
