using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RebrewsData.Models.Recipe
{
    public class Recipe
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        //Collections of ingredients 
        [InverseProperty("Recipe")]
        public virtual ICollection<RecipeFermentable> Fermentables { get; set; }

        [InverseProperty("Recipe")]
        public virtual ICollection<RecipeHop> Hops { get; set; }

        [InverseProperty("Recipe")]
        public virtual ICollection<RecipeYeast> Yeasts { get; set; }

        [ForeignKey("Style")]
        public int Style_Id { get; set; }

        public virtual RecipeStyle Style { get; set; }

        public int Owner_Id { get; set; }


    }
}