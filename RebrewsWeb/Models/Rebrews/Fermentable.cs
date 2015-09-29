using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HomebrewsRewrite.Models.Rebrews
{
    public class Fermentable : Ingredient
    {
        [Key]
        public int Id { get; set; }

        public int PPG { get; set; }

        public int DiastaticPower { get; set; }

        public double Attenuation { get; set; }

        public double LovibondDegrees { get; set; }

        public PhType PhType { get; set; }
    }
}