using System.ComponentModel.DataAnnotations.Schema;
using RebrewsData.Models.Base;

namespace RebrewsData.Models.Recipe
{
    public class RecipeYeast : RecipeIngredient
    {
        [ForeignKey("Base")]
        public int Base_Id { get; set; }

        public virtual BaseYeast Base { get; set; }

        public Recipe Recipe { get; set; }
    }
}