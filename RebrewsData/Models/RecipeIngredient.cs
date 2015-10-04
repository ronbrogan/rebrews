using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace RebrewsData.Models
{
    public abstract class RecipeIngredient
    {
        [Key]
        public int Id { get; set; }

        public virtual decimal Amount { get; set; }
    }
}