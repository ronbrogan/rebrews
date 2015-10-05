namespace RebrewsData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FermentableTweaks : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.BaseFermentables", "phType", c => c.Int(nullable: false));
            AddColumn("dbo.BaseFermentables", "Attenuation", c => c.Decimal(nullable: false, precision: 18, scale: 2));
            AddColumn("dbo.BaseFermentables", "DiastaticPower", c => c.Int(nullable: false));
            AddColumn("dbo.BaseFermentables", "RequiresMashing", c => c.Boolean(nullable: false));
            AddColumn("dbo.RecipeFermentables", "SteepOnly", c => c.Boolean(nullable: false));
            DropColumn("dbo.RecipeFermentables", "ContributesSugars");
        }
        
        public override void Down()
        {
            AddColumn("dbo.RecipeFermentables", "ContributesSugars", c => c.Boolean(nullable: false));
            DropColumn("dbo.RecipeFermentables", "SteepOnly");
            DropColumn("dbo.BaseFermentables", "RequiresMashing");
            DropColumn("dbo.BaseFermentables", "DiastaticPower");
            DropColumn("dbo.BaseFermentables", "Attenuation");
            DropColumn("dbo.BaseFermentables", "phType");
        }
    }
}
