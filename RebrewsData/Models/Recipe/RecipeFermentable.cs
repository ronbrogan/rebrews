using System.ComponentModel.DataAnnotations.Schema;
using RebrewsData.Models.Base;

namespace RebrewsData.Models.Recipe
{
    public class RecipeFermentable : RecipeIngredient
    {
        [ForeignKey("Base")]
        public int Base_Id { get; set; }

        public virtual BaseFermentable Base { get; set; }

        public bool SteepOnly { get; set; }

        public Recipe Recipe { get; set; }
    }
}