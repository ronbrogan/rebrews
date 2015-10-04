using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace RebrewsData.Models
{
    public class RecipeYeast : RecipeIngredient
    {
        [ForeignKey("Yeast")]
        public int? Yeast_Id { get; set; }

        public BaseYeast Yeast { get; set; }
    }
}