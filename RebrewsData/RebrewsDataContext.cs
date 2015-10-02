using System;
using System.Collections.Generic;
using System.Data.Entity;
using RebrewsData.Models;

namespace RebrewsData
{
    public class RebrewsDataContext : DbContext
    {
        // Orders
        public DbSet<Fermentable> Fermentables { get; set; }
    }
}