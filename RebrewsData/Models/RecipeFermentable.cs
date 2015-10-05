using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace RebrewsData.Models
{
    public class RecipeFermentable : RecipeIngredient
    {
        [ForeignKey("BaseFermentable")]
        public int? BaseFermentable_Id { get; set; }

        public virtual BaseFermentable BaseFermentable { get; set; }

        public bool SteepOnly { get; set; }

        [ForeignKey("Recipe")]
        public int? Recipe_Id { get; set; }

        public Recipe Recipe { get; set; }
    }
}