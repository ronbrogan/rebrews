namespace RebrewsData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialModelState : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.Fermentables", newName: "BaseFermentables");
            CreateTable(
                "dbo.BaseHops",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        AlphaAcid = c.Decimal(nullable: false, precision: 18, scale: 2),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.RecipeFermentables",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BaseFermentable_Id = c.Int(),
                        ContributesSugars = c.Boolean(nullable: false),
                        Amount = c.Decimal(nullable: false, precision: 18, scale: 2),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.BaseFermentables", t => t.BaseFermentable_Id)
                .Index(t => t.BaseFermentable_Id);
            
            CreateTable(
                "dbo.RecipeHops",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        BaseHop_Id = c.Int(),
                        BoilTime = c.Int(nullable: false),
                        DryHop = c.Boolean(nullable: false),
                        IsLeaf = c.Boolean(nullable: false),
                        Amount = c.Decimal(nullable: false, precision: 18, scale: 2),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.BaseHops", t => t.BaseHop_Id)
                .Index(t => t.BaseHop_Id);
            
            CreateTable(
                "dbo.RecipeYeasts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Yeast_Id = c.Int(),
                        Amount = c.Decimal(nullable: false, precision: 18, scale: 2),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.BaseYeasts", t => t.Yeast_Id)
                .Index(t => t.Yeast_Id);
            
            CreateTable(
                "dbo.BaseYeasts",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            DropColumn("dbo.BaseFermentables", "Amount");
        }
        
        public override void Down()
        {
            AddColumn("dbo.BaseFermentables", "Amount", c => c.Double(nullable: false));
            DropForeignKey("dbo.RecipeYeasts", "Yeast_Id", "dbo.BaseYeasts");
            DropForeignKey("dbo.RecipeHops", "BaseHop_Id", "dbo.BaseHops");
            DropForeignKey("dbo.RecipeFermentables", "BaseFermentable_Id", "dbo.BaseFermentables");
            DropIndex("dbo.RecipeYeasts", new[] { "Yeast_Id" });
            DropIndex("dbo.RecipeHops", new[] { "BaseHop_Id" });
            DropIndex("dbo.RecipeFermentables", new[] { "BaseFermentable_Id" });
            DropTable("dbo.BaseYeasts");
            DropTable("dbo.RecipeYeasts");
            DropTable("dbo.RecipeHops");
            DropTable("dbo.RecipeFermentables");
            DropTable("dbo.BaseHops");
            RenameTable(name: "dbo.BaseFermentables", newName: "Fermentables");
        }
    }
}
