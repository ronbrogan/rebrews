using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RebrewsData.Models.Recipe
{
    public class RecipeStyle
    {
        [Key]
        public int Id { get; set; }

        public string StyleName { get; set; }

        public double LowOG { get; set; }

        public double HiOG { get; set; }

        public double LowFG { get; set; }

        public double HiFG { get; set; }

        public double LowABV { get; set; }

        public double HiABV { get; set; }

        public double LowIBU { get; set; }

        public double HiIBU { get; set; }

        public double LowSRM { get; set; }

        public double HiSRM { get; set; }

        public double VolumesCO2 { get; set; }
    }
}