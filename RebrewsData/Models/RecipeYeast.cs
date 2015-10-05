using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace RebrewsData.Models
{
    public class RecipeYeast : RecipeIngredient
    {
        [ForeignKey("BaseYeast")]
        public int? BaseYeast_Id { get; set; }

        public virtual BaseYeast BaseYeast { get; set; }

        [ForeignKey("Recipe")]
        public int? Recipe_Id { get; set; }

        public Recipe Recipe { get; set; }
    }
}