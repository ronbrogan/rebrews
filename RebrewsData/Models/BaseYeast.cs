using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RebrewsData.Models
{
    public class BaseYeast : BaseIngredient
    {
        public decimal Attenuation { get; set; }

        public string Type { get; set; }
    }
}