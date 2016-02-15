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



    }
}