using System.ComponentModel.DataAnnotations.Schema;
using RebrewsData.Models.Base;

namespace RebrewsData.Models.Recipe
{
    public class RecipeHop : RecipeIngredient
    {
        [ForeignKey("BaseHop")]
        public int? BaseHop_Id { get; set; }

        public virtual BaseHop BaseHop { get; set; }

        public int BoilTime { get; set; }

        public bool DryHop { get; set; }

        public bool IsLeaf { get; set; }

        [ForeignKey("Recipe")]
        public int? Recipe_Id { get; set; }

        public Recipe Recipe { get; set; }

    }
}