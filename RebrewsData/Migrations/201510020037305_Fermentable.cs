namespace RebrewsData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Fermentable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Fermentables",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        PPG = c.Int(nullable: false),
                        DegreesLovibond = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Amount = c.Double(nullable: false),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            DropTable("dbo.Ingredients");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Ingredients",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Amount = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            DropTable("dbo.Fermentables");
        }
    }
}
