using System.ComponentModel.DataAnnotations;

namespace RebrewsData.Models.Recipe
{
    public abstract class RecipeIngredient
    {
        [Key]
        public int Id { get; set; }

        public virtual decimal Amount { get; set; }
    }
}