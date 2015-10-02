using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace RebrewsData.Models
{
    public abstract class BaseIngredient
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

    }
}