using System.ComponentModel.DataAnnotations.Schema;
using RebrewsData.Models.Base;

namespace RebrewsData.Models.Recipe
{
    public class RecipeHop : RecipeIngredient
    {
        [ForeignKey("Base")]
        public int Base_Id { get; set; }

        public virtual BaseHop Base { get; set; }

        public int BoilTime { get; set; }

        public bool DryHop { get; set; }

        public bool IsLeaf { get; set; }

        public Recipe Recipe { get; set; }

    }
}