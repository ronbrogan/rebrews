using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RebrewsData.Models
{
    public class BaseFermentable : BaseIngredient
    {
        public int PPG { get; set; }

        public decimal DegreesLovibond { get; set; }
    }
}