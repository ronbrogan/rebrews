using System.ComponentModel.DataAnnotations.Schema;
using RebrewsData.Models.Base;

namespace RebrewsData.Models.Recipe
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