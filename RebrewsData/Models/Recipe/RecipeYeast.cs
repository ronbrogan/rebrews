using System.ComponentModel.DataAnnotations.Schema;
using RebrewsData.Models.Base;

namespace RebrewsData.Models.Recipe
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