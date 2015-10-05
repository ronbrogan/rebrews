namespace RebrewsData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class RecipeName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Recipes", "Name", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Recipes", "Name");
        }
    }
}
