namespace RebrewsData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Styles : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.RecipeStyles",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        StyleName = c.String(),
                        LowOG = c.Double(nullable: false),
                        HiOG = c.Double(nullable: false),
                        LowFG = c.Double(nullable: false),
                        HiFG = c.Double(nullable: false),
                        LowABV = c.Double(nullable: false),
                        HiABV = c.Double(nullable: false),
                        LowIBU = c.Double(nullable: false),
                        HiIBU = c.Double(nullable: false),
                        LowSRM = c.Double(nullable: false),
                        HiSRM = c.Double(nullable: false),
                        VolumesCO2 = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.RecipeStyles");
        }
    }
}
