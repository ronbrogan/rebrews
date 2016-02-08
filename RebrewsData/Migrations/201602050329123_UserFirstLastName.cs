namespace RebrewsData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class UserFirstLastName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ApiUsers", "FirstName", c => c.String(maxLength: 100));
            AddColumn("dbo.ApiUsers", "LastName", c => c.String(maxLength: 100));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ApiUsers", "LastName");
            DropColumn("dbo.ApiUsers", "FirstName");
        }
    }
}
