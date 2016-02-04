using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RebrewsData.Models.Recipe
{
    public abstract class RecipeIngredient
    {
        [Key]
        public int Id { get; set; }

        public virtual decimal Amount { get; set; }

        [ForeignKey("Recipe")]
        public int? Recipe_Id { get; set; }
    }
}