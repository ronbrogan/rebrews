namespace RebrewsData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserRole : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ApiUsers", "Role", c => c.Int());
        }
        
        public override void Down()
        {
            DropColumn("dbo.ApiUsers", "Role");
        }
    }
}
