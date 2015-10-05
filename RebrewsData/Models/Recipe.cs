using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace RebrewsData.Models
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

    }
}