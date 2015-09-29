using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HomebrewsRewrite.Models.Rebrews
{
    public class Yeast : Ingredient
    {
        [Key]
        public int Id { get; set; }

        public double Attenuation { get; set; }

        public YeastType Type { get; set; }
    }
}