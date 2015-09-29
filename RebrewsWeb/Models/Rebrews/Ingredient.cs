using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;


namespace HomebrewsRewrite.Models.Rebrews
{
    public class Ingredient
    {
        public string Name  { get; set; }

        public string Unit { get; set; }
    }
}