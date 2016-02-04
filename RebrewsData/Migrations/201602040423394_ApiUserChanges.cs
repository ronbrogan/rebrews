namespace RebrewsData.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ApiUserChanges : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ApiRoles",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(nullable: false, maxLength: 256),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.Name, unique: true, name: "RoleNameIndex");
            
            CreateTable(
                "dbo.ApiUserRoles",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        RoleId = c.String(nullable: false, maxLength: 128),
                        IdentityUser_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => new { t.UserId, t.RoleId })
                .ForeignKey("dbo.ApiRoles", t => t.RoleId, cascadeDelete: true)
                .ForeignKey("dbo.ApiUsers", t => t.IdentityUser_Id)
                .Index(t => t.RoleId)
                .Index(t => t.IdentityUser_Id);
            
            CreateTable(
                "dbo.ApiUsers",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Email = c.String(maxLength: 256),
                        EmailConfirmed = c.Boolean(nullable: false),
                        PasswordHash = c.String(),
                        SecurityStamp = c.String(),
                        PhoneNumber = c.String(),
                        PhoneNumberConfirmed = c.Boolean(nullable: false),
                        TwoFactorEnabled = c.Boolean(nullable: false),
                        LockoutEndDateUtc = c.DateTime(),
                        LockoutEnabled = c.Boolean(nullable: false),
                        AccessFailedCount = c.Int(nullable: false),
                        UserName = c.String(nullable: false, maxLength: 256),
                        Discriminator = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .Index(t => t.UserName, unique: true, name: "UserNameIndex");
            
            CreateTable(
                "dbo.ApiUserClaims",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.String(),
                        ClaimType = c.String(),
                        ClaimValue = c.String(),
                        IdentityUser_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ApiUsers", t => t.IdentityUser_Id)
                .Index(t => t.IdentityUser_Id);
            
            CreateTable(
                "dbo.ApiUserLogins",
                c => new
                    {
                        LoginProvider = c.String(nullable: false, maxLength: 128),
                        ProviderKey = c.String(nullable: false, maxLength: 128),
                        UserId = c.String(nullable: false, maxLength: 128),
                        IdentityUser_Id = c.String(maxLength: 128),
                    })
                .PrimaryKey(t => new { t.LoginProvider, t.ProviderKey, t.UserId })
                .ForeignKey("dbo.ApiUsers", t => t.IdentityUser_Id)
                .Index(t => t.IdentityUser_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ApiUserRoles", "IdentityUser_Id", "dbo.ApiUsers");
            DropForeignKey("dbo.ApiUserLogins", "IdentityUser_Id", "dbo.ApiUsers");
            DropForeignKey("dbo.ApiUserClaims", "IdentityUser_Id", "dbo.ApiUsers");
            DropForeignKey("dbo.ApiUserRoles", "RoleId", "dbo.ApiRoles");
            DropIndex("dbo.ApiUserLogins", new[] { "IdentityUser_Id" });
            DropIndex("dbo.ApiUserClaims", new[] { "IdentityUser_Id" });
            DropIndex("dbo.ApiUsers", "UserNameIndex");
            DropIndex("dbo.ApiUserRoles", new[] { "IdentityUser_Id" });
            DropIndex("dbo.ApiUserRoles", new[] { "RoleId" });
            DropIndex("dbo.ApiRoles", "RoleNameIndex");
            DropTable("dbo.ApiUserLogins");
            DropTable("dbo.ApiUserClaims");
            DropTable("dbo.ApiUsers");
            DropTable("dbo.ApiUserRoles");
            DropTable("dbo.ApiRoles");
        }
    }
}
