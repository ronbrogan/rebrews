using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace HomebrewsRewrite.Models.Rebrews
{
    public class Hop : Ingredient
    {
        [Key]
        public int Id { get; set; }

        public double AlphaAcid { get; set;}
    }
}