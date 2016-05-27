using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using RebrewsData;
using RebrewsData.Models.Base;
using RebrewsData.Models.Recipe;

namespace RebrewsDataPopulator
{
    class Program
    {
        private static RebrewsDataContext db = new RebrewsDataContext();

        static void Main(string[] args)
        {
            if (!ConsolePrompt("Continue to empty (4) tables and write data to database at: '" + db.Database.Connection.Database + "@" + db.Database.Connection.DataSource + "' ?"))
                return;

            Console.WriteLine(string.Format("Before starting, we have {0} fermentables, {1} hops, {2} yeasts, and {3} recipe styles.", db.Fermentables.Count(), db.Hops.Count(), db.Yeasts.Count(), db.RecipeStyles.Count()));

            if (!ConsolePrompt("Continue?"))
                return;

            Console.ForegroundColor = ConsoleColor.Red;
            Console.Write("Emptying Fermentables...");
            db.Fermentables.RemoveRange(db.Fermentables);
            db.SaveChanges();
            Console.WriteLine("Done!");
            Console.ForegroundColor = ConsoleColor.Green;
            Console.Write("Creating Fermentable Entries...");
            db.Database.ExecuteSqlCommand("SET IDENTITY_INSERT [dbo].[BaseFermentables] ON");
            db.Fermentables.AddRange(JsonConvert.DeserializeObject<List<BaseFermentable>>(File.ReadAllText("Data\\FermentableData.json")));
            db.SaveChanges();
            db.Database.ExecuteSqlCommand("SET IDENTITY_INSERT [dbo].[BaseFermentables] OFF");
            Console.WriteLine("Done!");


            Console.ForegroundColor = ConsoleColor.Red;
            Console.Write("Emptying Hops...");
            db.Hops.RemoveRange(db.Hops);
            db.SaveChanges();
            Console.WriteLine("Done!");
            Console.ForegroundColor = ConsoleColor.Green;
            Console.Write("Creating Hops Entries...");
            db.Database.ExecuteSqlCommand("SET IDENTITY_INSERT [dbo].[BaseHops] ON");
            db.Hops.AddRange(JsonConvert.DeserializeObject<List<BaseHop>>(File.ReadAllText("Data\\HopsData.json")));
            db.SaveChanges();
            db.Database.ExecuteSqlCommand("SET IDENTITY_INSERT [dbo].[BaseHops] OFF");
            Console.WriteLine("Done!");


            Console.ForegroundColor = ConsoleColor.Red;
            Console.Write("Emptying Yeasts...");
            db.Yeasts.RemoveRange(db.Yeasts);
            db.SaveChanges();
            Console.WriteLine("Done!");
            Console.ForegroundColor = ConsoleColor.Green;
            Console.Write("Creating Yeasts Entries...");
            db.Database.ExecuteSqlCommand("SET IDENTITY_INSERT [dbo].[BaseYeasts] ON");
            db.Yeasts.AddRange(JsonConvert.DeserializeObject<List<BaseYeast>>(File.ReadAllText("Data\\YeastsData.json")));
            db.SaveChanges();
            db.Database.ExecuteSqlCommand("SET IDENTITY_INSERT [dbo].[BaseYeasts] OFF");
            Console.WriteLine("Done!");

            Console.ForegroundColor = ConsoleColor.Red;
            Console.Write("Emptying RecipeStyles...");
            db.RecipeStyles.RemoveRange(db.RecipeStyles);
            db.SaveChanges();
            Console.WriteLine("Done!");
            Console.ForegroundColor = ConsoleColor.Green;
            Console.Write("Creating RecipeStyles Entries...");
            db.Database.ExecuteSqlCommand("SET IDENTITY_INSERT [dbo].[RecipeStyles] ON");
            db.RecipeStyles.AddRange(JsonConvert.DeserializeObject<List<RecipeStyle>>(File.ReadAllText("Data\\RecipeStylesData.json")));
            db.SaveChanges();
            db.Database.ExecuteSqlCommand("SET IDENTITY_INSERT [dbo].[RecipeStyles] OFF");
            Console.WriteLine("Done!");


            Console.ForegroundColor = ConsoleColor.White;

            Console.WriteLine(string.Format("All is well, we have {0} fermentables, {1} hops, {2} yeasts, and {3} recipe styles now.", db.Fermentables.Count(), db.Hops.Count(), db.Yeasts.Count(), db.RecipeStyles.Count()));

            while (!ConsolePrompt("Exit?")){}
        }

        private static bool ConsolePrompt(string message)
        {
            Console.WriteLine(message + "\n(y/n)");

            var pressed = Console.ReadKey(true);

            while (pressed.KeyChar != 'y' && pressed.KeyChar != 'n')
            {
                Console.WriteLine("-- (y/n) --");
                pressed = Console.ReadKey(true);
            }

            Console.WriteLine(pressed.KeyChar);

            return pressed.KeyChar == 'y';
        }
    }
}
